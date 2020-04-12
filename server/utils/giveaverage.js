const cheerio = require('cheerio');
const axios = require('axios');
const querystring = require('querystring');

const {removeCommas} = require('./removecommas');

async function giveAverage(str){
  var query = querystring.encode({q: str});
  var res = await axios.get(`https://www.flipkart.com/search?${query}`);
  var result = 0;
  const $ = cheerio.load(res.data);
  $('._1vC4OE').each((index, element)=>{
    var price = removeCommas($(element).text());
    if(index<20)
      result += price;
  });
  result = result/20;
  return result;
}

module.exports = {giveAverage};
