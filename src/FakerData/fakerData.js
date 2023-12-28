import { faker } from '@faker-js/faker';

const NUMBER_OF_BRANDS = 6;
const NUMBER_OF_PRODUCT = 24;

function getProductDetails(brandName){
  return{
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({min: 1000, max: 5000}),
    image: faker.image.urlLoremFlickr({
      width: 480,
      height: 640,
      category: "fashion"
    }),
    rating: faker.number.int({
      min: 0,
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

// export brands;

export default productData(NUMBER_OF_PRODUCT);