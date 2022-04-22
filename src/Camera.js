import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import backButton from "./media/backWithShadow.png";
import { Link } from "react-router-dom";

class Camera extends Component {
  constructor(props){
    
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
      if(data == null) {
          console.log("nothing to see")
          return
      }
    let value = data
    console.log(value);

    this.setState({ result: data })
    console.log("////////////////////////////////////////////////////////////////////////", data.text)

    if (data.text) {
      let linkToAR = document.querySelector("#link-to-ar")
      linkToAR.innerHTML = `<button id="link-to-ar-button"><a style={{textDecoration: 'none'}} href=${data.text}>Tap here</a></button>`
    }
  }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
        height: window.innerHeight - (window.innerHeight/2),
        width: window.innerWidth,
        display: 'flex', "justifyContent": 'center',
        zIndex: '2 !important',
        // position: 'absolute',
        // top: window.innerHeight *.5,
    }

    const camStyle = {
        display: 'flex',
        justifyContent: "center",
        marginTop: '-50px'
    }

    const textStyle = {
        fontSize: '30px', "textAlign": 'center',
        marginTop: '-50px'
    }
 
    return(
      <div id="camera-page">
        <Link to="/explore"><img src={backButton} style={{zIndex: '2 !important', padding: "5%", width: "10%"}} alt="backBtn" id="backButton"/></Link>
        <p id="instructions"style={{fontSize: '1.3rem', "textAlign": 'center', padding: "5%", color: 'black', fontFamily: 'GilroySemiBold'}}>Hold front-facing camera to the QR Code to scan</p>
        <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            facingmode='environment'
            />
        
        {/* <div style={{display: 'flex', justifyContent: 'center'}}>            
          <img style={{width: '50%', zIndex: '2', position: 'absolute'}} src={focus}/>

        </div> */}

            <div id="link-to-ar" style={{display: 'flex', justifyContent: 'center', color: 'black'}}></div>

      </div>
    )
  }
}
export default Camera;