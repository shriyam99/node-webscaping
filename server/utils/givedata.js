const {giveAverage} = require('./giveaverage');

async function giveData(str) {
  var dataObject = [];
  var searchlist = str.split(",");
  for (var i = 0; i < searchlist.length; i++) {
    var item = searchlist[i].trim();
    var avg = await giveAverage(item);
    if(avg===null)
      return null;
    dataObject.push({items: item, price: avg});
  }
  return dataObject;
}

module.exports = {giveData};
