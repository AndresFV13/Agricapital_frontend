import { useState } from "react";
import ProductModal from "../../common/modal/ProductModal";
import { Product, products } from "../../../interface/ProductListInterface";
  
const ProductsList = () => {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    
    const categories = ['Todas', 'Frutas', 'Verduras', 'Semillas', 'Bebidas'];
  
    return (
      <section className="products-container">
        <h1 className="title">Productos Agrícolas</h1>
        <div className="products-toolbar">
            <input
                type="text"
                className="search-input"
                placeholder="Buscar productos..."
            />
            <select className="category-filter">
                {categories.map(cat => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
                ))}
            </select>
        </div>
        <div className="products-grid">
            {products.map((product) => (
                <div
                key={product.id}
                className="product-card"
                onClick={() => setSelectedProduct(product)}
                >
                <div className="product-image-wrapper">
                    <img
                    className="product-image"
                    src="./cafe.webp"
                    alt={product.name}
                    />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    ${product.price.toFixed(2)}/kg
                </p>
                <div className="product-details">
                    <span className="product-category">
                    {product.category}
                    </span>
                    <span className="product-stock">
                    {product.stock} kg
                    </span>
                </div>
                <a href="#" className="btn">Comprar</a>
                </div>
            ))}
        </div>
  
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </section>
    );
  };
  

export default ProductsList;