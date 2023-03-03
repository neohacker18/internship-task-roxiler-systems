const SalesData = require("../models/salesData");

function getMonth(month) {
  month = month.toLowerCase();
  if (month === "january") return "01";
  else if (month === "february") return "02";
  else if (month === "march") return "03";
  else if (month === "april") return "04";
  else if (month === "may") return "05";
  else if (month === "june") return "06";
  else if (month === "july") return "07";
  else if (month === "august") return "08";
  else if (month === "september") return "09";
  else if (month === "october") return "10";
  else if (month === "november") return "11";
  else if (month === "december") return "12";
  return month
}

exports.getSalesData = (req, res, next) => {
  const month = req.params.month;
  SalesData.find({ monthOfSale: getMonth(month) })
    .then((data) => {
        let totalSaleAmount=0,totalNumberOfSoldItems=0,totalNumberOfNotSoldItems=0;
        for(let x=0;x<data.length;x++){
            if(data[x].sold){
                totalNumberOfSoldItems+=1;
                totalSaleAmount+=data[x].price;
            }
            else totalNumberOfNotSoldItems+=1;
        }
      res.status(200).json({
        totalSaleAmount: totalSaleAmount,
        totalNumberOfSoldItems:totalNumberOfSoldItems,
        totalNumberOfNotSoldItems:totalNumberOfNotSoldItems,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
