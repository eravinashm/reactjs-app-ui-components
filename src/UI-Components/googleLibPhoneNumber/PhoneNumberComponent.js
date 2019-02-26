import React, { Component } from 'react';
import emojione from 'emojione';

class PhoneNumberComponent extends Component{    
    componentDidMount(){
        // document.getElementById('flag').innerHTML = emojione.shortnameToImage(":flag_gb:");
    }
    test = () => {
        document.getElementsByClassName('flag').innerHTML = emojione.shortnameToImage(":flag_gb:");
    }
    trim2 = (str, chr) => {
        var rgxtrim = (!chr) ? new RegExp('^\\s+|\\s+$', 'g') : new RegExp('^'+chr+'+|'+chr+'+$', 'g');
        return str.replace(rgxtrim, '');
      }
    render(){
        const phoneNumberStr = "+5187973278";

        // Get an instance of `PhoneNumberUtil`.
        const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
        const phoneNumberProto = phoneUtil.parse(phoneNumberStr, "");
        console.log(phoneNumberProto);
        let flag = emojione.shortnameToImage(":flag_gb:");
        let s2 = this.trim2(flag, '"');
        return(
            <div dangerouslySetInnerHTML={{__html: flag}}></div>
        )
    }
}
export default PhoneNumberComponent;