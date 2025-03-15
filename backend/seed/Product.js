const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
    title: "DressBerrry",
    description: "Women Textured Structured Handheld Bag",
    price: 6500,
    discountPercentage: 12.96,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/DECEMBER/10/yu3KGehA_c59b515130c5423dafd84a7af053e4bb.jpg",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/DECEMBER/10/VfhBD8ER_2a0ec07688394b00abba254add26cb96.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/DECEMBER/10/VfhBD8ER_2a0ec07688394b00abba254add26cb96.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/DECEMBER/10/VfhBD8ER_2a0ec07688394b00abba254add26cb96.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/DECEMBER/10/yu3KGehA_c59b515130c5423dafd84a7af053e4bb.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/DECEMBER/10/yu3KGehA_c59b515130c5423dafd84a7af053e4bb.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Fog Scent Xpressio Perfume custom",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    stockQuantity: 21,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/13/1.jpg",
      "https://cdn.dummyjson.com/product-images/13/2.png",
      "https://cdn.dummyjson.com/product-images/13/3.jpg",
      "https://cdn.dummyjson.com/product-images/13/4.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
    stockQuantityQuantity: 5,
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
