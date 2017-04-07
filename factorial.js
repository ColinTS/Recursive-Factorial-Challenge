 /*jshint esversion: 6*/
function factRecur (num) {
    //base case
    if(num < 1){
      return 1;
    }
    return num * factRecur(num - 1);
}

module.exports = factRecur;