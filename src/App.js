import React, { Component } from 'react';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import particleBackground from './components/ParticleBackground/ParticleBackground';
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
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response);
      },
      function (err) {
        // there was an error
      }
    );
  }
  
  // setState allows you to hold the data throughout the lifecycle of the component and manage the state of it 
  // lifecycle functions are functions that are invcoked during the lifecyle of a component.
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleBackground} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
