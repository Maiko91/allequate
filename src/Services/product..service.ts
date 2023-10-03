import http from "../http-common";
import CardType from "../Types/CardType";
import axios, { AxiosResponse } from 'axios';

const getAllProducts: any = async () => {

try {

const response: AxiosResponse = await axios.get('https://api.example.com/data');

return response.data;

// Process the response data

} catch (error) {

// Handle the error

}

};

export default getAllProducts;
