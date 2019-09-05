const scrape = require('website-scraper');

let options = {
    urls: ['https://liberty-sa.terradotta.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=12240'],
    directory: './lusendBrochure',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});