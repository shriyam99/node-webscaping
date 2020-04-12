const cheerio = require('cheerio');
const axios = require('axios');
const querystring = require('querystring');

const {formatPrice} = require('./formatPrice');

async function giveAverage(str){
  var query = querystring.encode({k: str});
  try {
    var res = await axios.get(`https://www.amazon.com/s?${query}`);
    var result = 0;
    const $ = cheerio.load(res.data);
    var pricelist = [];
    $('.a-price').each((index, element)=>{
      if($(element).parent().attr('class').includes('a-price-range')){
        pricelist.push('range');
      }
      pricelist.push(formatPrice($(element).text()));
    });
    var counter=20;
    var i=0;
    while(i<counter && i<pricelist.length){
      if(pricelist[i]=='range'){
        var temp = Number(pricelist[i+1])+Number(pricelist[i+3]);
        temp = temp/2;
        result+=temp;
        i+=4;
        counter+=3;
        continue;
      }
      result+= Number(pricelist[i]);
      i++;
    }
    result = result/20;
    return result;
  } catch (e) {
    return null;
  }
  return null;
}

module.exports = {giveAverage};
