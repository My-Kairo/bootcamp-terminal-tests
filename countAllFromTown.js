// function countAllFromTown(regs,string) {
// 	var regnum = regs.split(",");
//   	var arr = [];
// for (var i=0;i<regnum.length;i++){
//   	var number = regnum[i].trim();
//   if(number.startsWith(string)) {
//     arr.push(number)
//     console.log(regnum);
//   	//return arr;
//   }
// }return arr.length;
// }

module.exports = function countAllFromTown(regs,string){
  var regnum = regs.split(",");
    	var arr = [];
  for (var i=0;i<regnum.length;i++){
    	var number = regnum[i].trim();
    if(number.startsWith(string)) {
      arr.push(number)
    }
  }return arr.length;
  }