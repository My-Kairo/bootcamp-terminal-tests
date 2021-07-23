module.exports = function transportFee(shift) {
    //r morning = 'R20';
    //r afternoon = 'R10';
    //var nightshift = 'nothing';
    
      if(shift === "morning") {
        return 'R20';
      }
    if(shift === 'afternoon'){
      return 'R10';
      } 
    if(shift === 'nightshift') {
      return 'free';
      }
    }