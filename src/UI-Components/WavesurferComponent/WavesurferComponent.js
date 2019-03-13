import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WaveSurfer from 'wavesurfer.js';
// require('wavesurfer.js');

class WavesurferComponent extends Component{
    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
          container: this.$waveform,
          waveColor: 'violet',
          progressColor: 'purple'
        })
        this.wavesurfer.load(this.props.src)
    }

    render(){
        console.log(this.props)
        return(
            <div className='waveform'>
             <div className='wave'></div>
            </div>
        )
    }
}

WavesurferComponent.defaultProps = {
    src: ""
}

export default WavesurferComponent;