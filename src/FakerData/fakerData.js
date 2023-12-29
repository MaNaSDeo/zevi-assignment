import { faker } from '@faker-js/faker';

const NUMBER_OF_BRANDS = 2;
const NUMBER_OF_PRODUCT = 16;
const NUMBER_OF_SUGGESTION = 4;

function getProductDetails(brandName){
  return{
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({min: 100, max: 3000}),
    image: faker.image.urlLoremFlickr({
      width: 480,
      height: 640,
      category: "fashion"
    }),
    rating: faker.number.int({
      min: 1,
      max: 5
    }),
    reviews: faker.number.int({
      min: 50,
      max: 1500
    }),
    brand: brandName
  }
}

function brandsName(n){
  const res = [];
  for(let i=0; i<NUMBER_OF_BRANDS; i++){
    res.push(faker.company.name());
  }
  return res;
}
export const brands = brandsName(NUMBER_OF_BRANDS);

function productData(NUMBER_OF_PRODUCT) {
  const res = [];

  for(let j=0; j<NUMBER_OF_PRODUCT; j++){
    res.push(getProductDetails(brands[j%NUMBER_OF_BRANDS]))
  }
  return res;
}

function getLatestTrends(NUMBER_OF_SUGGESTION) {
  let res = [];
  for(let i=0; i<NUMBER_OF_SUGGESTION; i++){
    res.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      image: faker.image.urlLoremFlickr({
        width: 480,
        height: 640,
        category: "fashion"
      }),
    })
  }
  return res;
}

export const trendData = getLatestTrends(NUMBER_OF_SUGGESTION);

export default productData(NUMBER_OF_PRODUCT);