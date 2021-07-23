// function countAllPaarl(regs) {
//     console.log(regs)
//       var splitd = regs.split(", ");
//     console.log(splitd);
//         var arr = [];
//   for (var i=0;i<splitd.length;i++){
//     if(splitd[i].startsWith("CJ")) {
//       arr.push(splitd)
//       console.log(splitd);
//         //return arr;
//     }
//   }return arr.length;
//   }

module.exports = function countAllPaarl(regs){
  var splitd = regs.split(", ");
  var arr = [];
  for (var i=0;i<splitd.length;i++){
        if(splitd[i].startsWith("CJ")) {
          arr.push(splitd)
        }
      }return arr.length;
}