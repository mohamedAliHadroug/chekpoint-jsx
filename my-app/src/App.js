import React from 'react';
import './App.css';
import './style.css'
import imageInSrc from './imageInSrc.jpg'
import imageInPublic from './imageInPublic.jpg'
import myvideo from './myVideo.mp4'

function App() {
  return (
    <div>

        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

            <h1 className="title red">Mohamed Ali Hadroug</h1>

            <br />

            <img src={imageInSrc} />

            <br />

            <img src={imageInPublic} />

        </div>
        <video width="320" height="240" controls>

          <source src={myvideo} type="video/mp4" />

        </video>

    </div>
  );
}

export default App;
