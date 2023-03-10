const axios = require("axios");
const SalesData = require("../models/salesData");

exports.getData = async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const data = response.data;
    for (let i = 0; i < data.length; i++) {
      const {
        id,
        title,
        price,
        description,
        category,
        image,
        sold,
        dateOfSale,
      } = data[i];
      SalesData.find({ id: id })
        .then((data) => {
          if (data.length==0) {
            const salesData = new SalesData({
              id: id,
              title: title,
              price: price,
              description: description,
              category: category,
              image: image,
              sold: sold,
              dateOfSale: new Date(dateOfSale),
              monthOfSale: dateOfSale.split("-")[1],
            });
            salesData
              .save()
              .then((result) => {
                console.log(result);
                console.log("Created Sales Record");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    res.status(200).json({
      message: "Data retrived successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getCombinedResponse = async (req, res, next) => {
  try {
    const month = req.params.month;
    const response1 = await axios.get(
      `http://localhost:8000/sales/getSalesData/${month}`
    );
    const response2 = await axios.get(
      `http://localhost:8000/sales/getBarChartData/${month}`
    );
    const response3 = await axios.get(
      `http://localhost:8000/sales/getPieChartData/${month}`
    );
    res.status(200).send({
      statisticsData: response1.data,
      barChartData: response2.data,
      pieChartData: response3.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
