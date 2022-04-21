import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
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
  }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
        height: 700,
        width: 1000,
        display: 'flex', "justifyContent": 'center'
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
        <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />

      </div>
    )
  }
}
export default Camera;