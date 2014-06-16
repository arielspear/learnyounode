
  var sum = 0;
stepping = function(indexNum){
  if ((indexNum) !== (process.argv.length)){
    sum = sum + Number(process.argv[indexNum]);
    indexNum = indexNum+1;
    stepping(indexNum);
  }
  else {
    console.log(sum);
  }
};

stepping(2);
