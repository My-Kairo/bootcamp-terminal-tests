module.exports = function findItemsOver(fruitList, thresh){
    var overThresh = [];
      for(var i in fruitList){
      if(fruitList[i].qty > thresh){
              overThresh.push(fruitList[i]);
      }
      }
      return overThresh;
    
    }