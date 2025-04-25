import { useEffect, useState } from "react";
import { Product } from "../interface/Product.dto";
import api from "../rest-services/rest-api-product";

const useProduct = (productId: number | null) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (productId === null) {
      setProduct(null);
      setError(null);
      setLoading(false);
      return;
    }
  
    let cancelled = false;
    setLoading(true);
    setError(null);
  
    (async () => {
      try {
        const response = await api.get<Product>(`/products/${productId}`);
        if (!cancelled) setProduct(response.data);
      } catch (err) {
        if (!cancelled) setError(err as Error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
  
    return () => { cancelled = true; };
  }, [productId]);
  

  return { product, loading, error };
}

export default useProduct;