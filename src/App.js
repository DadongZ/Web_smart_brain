import React, { Component } from 'react';
import Clarifai, { COLOR_MODEL } from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import particleBackground from './components/ParticleBackground/ParticleBackground';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const app = new Clarifai.App({
 apiKey: '1f88737d68dc44548fadaad017793400'
});

class App extends Component {
  //constructior: initial state
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignIn: false
    }
  }
  // input
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  
  // face box
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = ( box ) => {
    console.log(box);
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignIn: false })
    } else if (route === 'home') {
      this.setState({ isSignIn: true })
    }
    this.setState({ route: route })
  }
  
  // setState allows you to hold the data throughout the lifecycle of the component and manage the state of it 
  // lifecycle functions are functions that are invcoked during the lifecyle of a component.
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleBackground} />
        <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div><Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : (
            this.state.route === 'signin' 
            ? <SignIn onRouteChange={this.onRouteChange}/> 
            : <Register onRouteChange={this.onRouteChange}/> 
          )
        }
      </div>
    );
  }
}

export default App;
