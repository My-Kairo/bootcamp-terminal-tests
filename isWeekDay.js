module.exports = function isWeekday(wkday) {
	if(wkday.startsWith("S")) {
      return false;
    }else {
      return true;
    }
}