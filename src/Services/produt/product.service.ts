import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllProducts = async () => {
  const url = "http://localhost:7001/products";
  const { data } = await axios.get(url);
  return data;
};

const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
    /*Not refetching the query if the data hasn't changed for 24 hours*/
    staleTime: 1,
  });
};

export { getAllProducts, useGetAllProducts };
