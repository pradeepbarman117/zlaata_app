import axios from 'axios';

const fetchProductList = async () => {
  try {
    const response = await axios.get('https://optzlt.testingserver8.com/api/load-product-list');
    return response.data;
  } catch (error) {
    console.log('error',error)
    throw error;
  }
};

export default fetchProductList