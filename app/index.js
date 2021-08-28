import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let month = today.getMonth()+1;
  let date = today.getDate();
  let hours = today.getHours();
  let day = today.getDay();
  let mins = util.zeroPadding(today.getMinutes(),2);
  
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPadding(hours,2);
  }

  let time = `${hours}${mins}`;
  let binaryTime = `${util.toBinary(time,1)}${util.toBinary(time,2)}${util.toBinary(time,3)}${util.toBinary(time,4)}`
  
  for (let i = 0; i <= 15; i++) {
    const item = document.getElementById((i+1).toString());
    if(binaryTime.substr(i,1)==='1'){
          item.style.fill = 'white';
    }else{
      item.style.fill = 'black';
    }
  }
  document.getElementById('1').text = month;
  document.getElementById('1').style.fill = 'white';
  document.getElementById('2').text = date;
  document.getElementById('2').style.fill = 'white';
  document.getElementById('9').text = util.getDay(day);
  document.getElementById('9').style.fill = 'white';
}
