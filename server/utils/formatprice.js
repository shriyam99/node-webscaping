var formatPrice = (str)=>{
  var templist = str.split('$');
  return templist[1];
}

module.exports ={formatPrice};
