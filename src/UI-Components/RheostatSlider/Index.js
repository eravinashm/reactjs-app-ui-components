import React, { Component } from 'react';
import RheostatSlider from './RheostatSlider';

class Index extends Component{
    state = {
        durationValues: [0, 100],
        ansDelayValues: [0, 100],
        timeSilenceValues: [0, 100],
        timeOnHoldValues: [0, 100]
    }
    callbackRheostatSlider = (updatedData) => {
        const id = updatedData.id;
        const min = updatedData.values[0];
        const max = updatedData.values[1];
        switch(id){
            case 'duration':
                const durationVal = [ ...this.state.durationValues ];
                if(durationVal[0] !== min)
                    durationVal[0] = min;
                if(durationVal[1] !== max)
                    durationVal[1] = max;
                this.setState({durationValues: durationVal});
                break;
            case 'ansDelay':
                const ansDelayVal = [ ...this.state.ansDelayValues ];
                if(ansDelayVal[0] !== min)
                    ansDelayVal[0] = min;
                if(ansDelayVal[1] !== max)
                    ansDelayVal[1] = max;
                this.setState({ansDelayValues: ansDelayVal});
                break;
            case 'timeSilence':
                const timeSilenceVal = [ ...this.state.timeSilenceValues ];
                if(timeSilenceVal[0] !== min)
                    timeSilenceVal[0] = min;
                if(timeSilenceVal[1] !== max)
                    timeSilenceVal[1] = max;
                this.setState({timeSilenceValues: timeSilenceVal});
                break;
            case 'timeOnHold':
                const timeOnHoldVal = [ ...this.state.timeOnHoldValues ];
                if(timeOnHoldVal[0] !== min)
                    timeOnHoldVal[0] = min;
                if(timeOnHoldVal[1] !== max)
                    timeOnHoldVal[1] = max;
                this.setState({timeOnHoldValues: timeOnHoldVal});
                break;
            default:
        } 
        console.log(this.state)
    }
 
    render(){
        const {
            durationValues,
            ansDelayValues,
            timeSilenceValues,
            timeOnHoldValues
        } = this.state;
        console.log(this.state)
        return(
        <div>
            <RheostatSlider  
                label="Duration" 
                values={durationValues} 
                callbackRheostatSlider={this.callbackRheostatSlider}
            />
            <RheostatSlider 
                label="Time On Hold" 
                values={this.state.timeOnHoldValues}
                callbackRheostatSlider={this.callbackRheostatSlider}
            />
            <RheostatSlider 
                label="Time Silence" 
                values={this.state.timeSilenceValues}
                callbackRheostatSlider={this.callbackRheostatSlider}
            />
            <RheostatSlider 
                label="Answer Delay" 
                values={this.state.ansDelayValues}
                callbackRheostatSlider={this.callbackRheostatSlider}
            />
        </div>              
        )
    }
}

export default Index;
