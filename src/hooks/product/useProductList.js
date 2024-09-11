import { useQuery } from '@tanstack/react-query';
import fetchProductList from '../../apis/product/productAPI';

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProductList(),
    refetchOnWindowFocus: false
  })
};

export default useProducts;