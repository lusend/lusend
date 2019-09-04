const scrape = require('website-scraper');

let options = {
  urls: ['https://liberty-sa.terradotta.com/'],
    directory: './lusendHome',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});