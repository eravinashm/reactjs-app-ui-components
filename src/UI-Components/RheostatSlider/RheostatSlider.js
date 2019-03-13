import React, { Component } from 'react';
import 'rheostat/initialize';
import Rheostat from 'rheostat';

import './rheostat.css';
import { getIdByLabel } from './SliderArray';

class RheostatSlider extends Component{
    state = {
        id: getIdByLabel(this.props.label),
        max: 100
    }
    componentDidMount(){
        this.setState({max: this.props.values[1]});
    }
    onChangeHandler = (data) => {
        const updatedData = {
            id: this.state.id,
            values: data.values
        }
        this.props.callbackRheostatSlider(updatedData);
    }
    formatValue = (timeinSeconds) => {
        try {
          if (_.isNaN(timeinSeconds))
            return '00:00';
          var duration;
          duration = moment.isDuration(timeinSeconds) ? timeinSeconds : moment.duration(timeinSeconds, 'seconds');
          var timeInMinSecs = ''.concat(('0' + duration.minutes()).slice(-2), ':').concat(('0' + duration.seconds()).slice(-2));
          return duration.hours() > 0 ? ''.concat(('0' + duration.hours()).slice(-2), ':').concat(timeInMinSecs) : timeInMinSecs;
        } catch (error) {
          return timeinSeconds;
        }
    }
    render(){
        const values = this.props.values;
        const label = this.props.label;
        console.log(label+" = "+values);
        return(
            <div>
                <p>{this.props.label}</p>
                <Rheostat 
                // min={values[0]}
                max={this.state.max}
                values={values}
                key={label}
                onChange={this.onChangeHandler}
                // snapPoints={values}
                //disabled={[1-5]}
            />    
             <p>{values[0]}</p>
             <p>{values[1]}</p>
        </div>
        )
    }    
} 

export default RheostatSlider;