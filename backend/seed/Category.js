const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "Handbags" },
  { _id: "65a7e24602e12c44f599442d", name: "Wallets" },
  { _id: "65a7e24602e12c44f599442e", name: "BackPacks" },
  { _id: "65a7e24602e12c44f599442f", name: "Laptop Bag" },
  { _id: "65a7e24602e12c44f5994430", name: "Clutches" },
  { _id: "65a7e24602e12c44f5994431", name: "Duffel Bag" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
