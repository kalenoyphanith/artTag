import React, { Component } from 'react'
import QrReader from 'modern-react-qr-reader'
import backButton from "./media/back.png";
import refreshButton from "./media/refresh.png";
import { Link } from "react-router-dom";
import BottomNav from './components/BottomNav';

class Scan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
      console.log(result);
      let linkToAR = document.querySelector("#link-to-ar")
      linkToAR.innerHTML = `<button id="link-to-ar-button"><a style={{textDecoration: 'none'}} id="a-redirect" href=${this.state.result}>Tap here</a></button>`
    }
    console.log('no result');
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      marginTop: 10,
      height: 200,
      width: 320,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }


    function refreshPage() {
      window.location.reload(false);
    }

    return(/* display: flex;
    justify-content: space-around; */
      <div className="gallery-content">
        <div className="header" id="scan-header" style={{display: 'flex', justifyContent: 'space-around', marginTop: '10%'}}>
        <Link to="/explore"><img src={backButton} alt="backBtn" id="backButton"/></Link>
          <h1 id="back-header">ArtTag</h1>
          <button onClick={refreshPage}><img src={refreshButton} alt="backBtn" id="refresh-button" style={{float:"right"}}/></button>
        </div>
        
        <h1 id="headerQR">Hold in front of QR code to Scan!</h1>
        <div>          
          </div>
        <QrReader className="qr-image-wrapper"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <div id="link-to-ar" style={{marginTop: '25vh', display: 'flex', justifyContent: 'center', color: 'black'}}></div>
        {/* <BottomNav></BottomNav> */}
      </div>
    )
  }
}

export default Scan