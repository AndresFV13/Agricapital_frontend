import { useState, useEffect, useMemo } from 'react';
import { Product } from '../interface/Product.dto';
import api from '../rest-services/rest-api-product';

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<string>('Todas');

    useEffect(() => {
        let cancelled = false;
        const fetchProducts = async () => {
        try {
            const response = await api.get<Product[]>('/products');
            if (!cancelled) setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        } finally {
            if (!cancelled) setLoading(false);
        }
        };
        fetchProducts();
        return () => { cancelled = true; };
    }, []);

    const categories = useMemo<string[]>(() => {
        const cats = products.map(p => p.category);
        return ['Todas', ...Array.from(new Set(cats))];
    }, [products]);

    const filteredProducts = useMemo<Product[]>(() => {
        const term = searchTerm.trim().toLocaleLowerCase();
        return products.filter(p => {
        const matchesName = p.name.toLowerCase().includes(term);
        const matchesCat = filterCategory === 'Todas' || p.category === filterCategory;
        return matchesName && matchesCat;
        });
    }, [searchTerm, filterCategory, products]);

    return {
        products,
        loading,
        searchTerm,
        setSearchTerm,
        filterCategory,
        setFilterCategory,
        categories,
        filteredProducts,
    };
}

export default useProducts;
