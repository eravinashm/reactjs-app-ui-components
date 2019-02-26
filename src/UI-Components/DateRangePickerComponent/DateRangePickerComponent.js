import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import './DateRangePickerComponent.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import calendarTemplate from './calendarTemplate';

class DateRangePickerComponent extends Component{
    constructor(){
        super();
        
    }
    datePickerHandler(event, picker){
        const inputFieldDate  = document.getElementById('inputFieldDate');
        inputFieldDate.value = picker.startDate.format('DD-MM-YYYY') +' - '+ picker.endDate.format('DD-MM-YYYY');
    }
    render(){
        return(
            <DateRangePicker 
                ranges= {customRanges} 
                timePickerIncrement = {1}  
                startDate="1/1/2014" 
                endDate="3/1/2014"
                opens = "right"
                format = 'DD-MM-YYYY'    
                onApply={this.datePickerHandler}

            >
                <input type='text' id='inputFieldDate' autoComplete="off"/>
            </DateRangePicker>
        )
    }
}
function getLastWorkingDay(){
    let diff = 0;
    let day = moment().day();
    if(day === 0 || day ===1){
      diff = day+2;
    }
    return moment().subtract(diff, 'days');
  }

const customRanges = {
    'Last Working Day': [
        getLastWorkingDay(),
        getLastWorkingDay()
      ],
      'Current Week': [
        moment().startOf('week'),
        moment()
      ],
      'Past Week': [
        moment().startOf('week').subtract(7, 'days') ,
        moment().startOf('week').subtract(1, 'days') ,
      ],
      'This Month': [
        moment().startOf('month'), 
        moment().endOf('month')
      ]
}
export default DateRangePickerComponent;