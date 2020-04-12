var removeCommas = (str)=>{
  str = str.substr(1, str.length);
  var seperate = str.split(",");
  var res ="";
  for (var i = 0; i < seperate.length; i++) {
    res+= seperate[i];
  }
  return Number(res);
}

module.exports ={removeCommas};
