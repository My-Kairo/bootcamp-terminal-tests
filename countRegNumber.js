module.exports = function countRegNumber(reg) {
	var reg = "CA 182736,CY 523519";
  	var nam = reg.split(",");
  	return nam.length;
  console.log(nam.length);
}
