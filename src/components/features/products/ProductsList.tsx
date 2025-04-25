import React, { useState } from 'react';
import ProductModal from "../../common/modal/ProductModal";
import useProducts from '../../../hooks/useProducts';
import useProduct from '../../../hooks/useProduct';

const ProductsList: React.FC = () => {
  const {
    loading: loadingList,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    categories,
  } = useProducts();

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const {
    product: selectedProduct,
    loading: loadingProduct,
    error: productError,
  } = useProduct(selectedId);

  if (loadingList) {
    return <p className="loading">Cargando productos...</p>;
  }

  console.log(filteredProducts[0]);

  return (
    <section className="products-container" id="products-container">
      <h1 className="title">Productos Agrícolas</h1>

      <div className="products-toolbar">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className="category-filter"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
        >
          {categories.map(categorie => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedId(product.id)} 
          >
            <div className="product-image-wrapper">
            <img
                className="product-image"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className='product-price-container'>
              <p className="product-price">
                ${product.discount.toFixed(2)}/kg
              </p>
              {product.discount !== product.price && (
                <p className="product-price-discount">
                  ${product.price.toFixed(2)}/kg
                </p>
              )}
            </div>
            <div className="product-details">
              <span className="product-category">{product.category}</span>
              <span className="product-stock">{product.stock} kg</span>
            </div>
            <a className="btn">Comprar</a>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="no-results">No se encontraron productos.</p>
        )}
      </div>
      {selectedId !== null && (
        loadingProduct
          ? <p className="loading">Cargando detalle del producto…</p>
          : productError
            ? <p className="error">Error al cargar producto.</p>
            : selectedProduct && (
                <ProductModal
                  product={selectedProduct}
                  onClose={() => setSelectedId(null)}
                />
              )
      )}
    </section>
  );
};

export default ProductsList;
