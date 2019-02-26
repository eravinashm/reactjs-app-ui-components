import moment from 'moment';

var presentDayDate = moment().format('DD-MM-YYYY');

const dateRangePickerTemplate =`
<div class="daterangepicker">
   <div class="ranges"></div>
   <div class="drp-calendar left">
      <div class="daterangepicker_input">
         <div class="fa-calendar-div">
            <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
         </div>
         <div class="daterangepicker_start-div">
            <input class="input-mini form-control active daterangepicker_start" type="text" name="daterangepicker_start" id="daterangepicker_start" value="`+presentDayDate+`">
         </div>
         <div class="calendar-time" style="display: none;">
            <div></div>
            <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
         </div>
      </div>
      <div class="calendar-table"></div>
      <div class="calendar-time"></div>
   </div>
   <div class="drp-calendar right">
      <div class="daterangepicker_input">
         <div class="fa-calendar-div">
            <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
         </div>
         <div class="daterangepicker_end-div">         
            <input class="input-mini form-control daterangepicker_end" type="text" name="daterangepicker_end" id="daterangepicker_end" value="`+presentDayDate+`">
         </div>
         <div class="calendar-time" style="display: none;">
            <div></div>
            <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
         </div>
      </div>
      <div class="calendar-table"></div>
      <div class="calendar-time"></div>
   </div>
   <div class="drp-buttons"> 
      <span class="drp-selected"></span> 
      <button class="cancelBtn" type="button"></button> 
      <button class="applyBtn" disabled="disabled" type="button"></button>  
   </div>
</div>
`;

export default dateRangePickerTemplate;