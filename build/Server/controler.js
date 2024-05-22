const cheerio = require("cheerio");
const axios = require("axios");
const ProductModule = require("./productModule");
let data = [];
const Home = async (req, res) => {
  // try {
  //   res.send("Home");
  // } catch (err) {
  //   console.log(err);
  // }
};
const Data = async (req, res) => {
  try {
    let url = await req.body.url;
    await axios.get(url).then((res) => {
      const $ = cheerio.load(res.data);
      $("#gridItemRoot").each(function (el, index) {
        let trand = $(this).find("div .a-section span").text();
        let title = $(this)
          .find("div .p13n-sc-uncoverable-faceout div div a span div")
          .text();
        let url = $(this)
          .find("div .p13n-sc-uncoverable-faceout a")
          .attr("href");
        let reting = $(this).find("div .a-icon-row a").text();
        let price = $(this).find("div .a-row span span").text();
        let image = $(this).find("div .a-section img").attr("src");
        data.push({
          trand: trand,
          title: title,
          url: "https://www.amazon.in" + url,
          reting: reting.substring(0, 4),
          price: price,
          total_reating: reting.substring(19),
          image: image,
        });
      });
    });
    await res.status(200).send(data);
  } catch (err) {
    res.status(400).send("Data Not Found");
  }
};

const DataInsert = async (req, res) => {
  try {
    await ProductModule.Product.create(data);
    res.status(200).send("Data Inserted");
  } catch (error) {
    res.status(400).send("Not Insert Record");
  }
};
module.exports = { Home, Data, DataInsert };
