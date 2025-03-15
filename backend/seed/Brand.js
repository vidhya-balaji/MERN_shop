const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "DressBerry" },
  { _id: "65a7e20102e12c44f59943db", name: "Baggit" },
  { _id: "65a7e20102e12c44f59943dc", name: "Lavie" },
  { _id: "65a7e20102e12c44f59943dd", name: "Lino Perros"},
  { _id: "65a7e20102e12c44f59943de", name: "Caprese" },
  { _id: "65a7e20102e12c44f59943df", name: "Lavie" },
  { _id: "65a7e20102e12c44f59943e0", name: "Forever 21" },
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
