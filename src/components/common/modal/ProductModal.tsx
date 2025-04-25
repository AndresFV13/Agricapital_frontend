import React, { useEffect, useState } from 'react';
import { Product } from '../../../interface/Product.dto';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsActive(true), 10);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); 
  };

  return (
    <div 
      className={`modal-overlay ${isActive && !closing ? 'active' : ''} ${closing ? 'closing' : ''}`} 
      onClick={handleClose}
    >
      <div 
        className={`modal-content ${isActive && !closing ? 'active' : ''} ${closing ? 'closing' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>×</button>
        <h2>{product.name}</h2>
        <div className="modal-details">
          <div className="detail-section">
            <h3>Información Básica</h3>
            <p><strong>Precio:</strong> ${product.price.toFixed(2)}/kg</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Stock disponible:</strong> {product.stock} kg</p>
          </div>
          <div className="detail-section">
            <h3>Detalles del Producto</h3>
            <p>{product.description}</p>
            <p><strong>Origen:</strong> {product.origin}</p>
            <p><strong>Fecha de cosecha:</strong> {product.harvestDate}</p>
          </div>
          {product.nutritionalInfo && (
            <div className="detail-section">
              <h3>Valor Nutricional (por 100g)</h3>
              <p><strong>Calorías:</strong> {product.nutritionalInfo.calories} kcal</p>
              <p><strong>Vitaminas:</strong> {product.nutritionalInfo.vitamins.join(', ')}</p>
            </div>
          )}
          <div className="detail-section">
            <h3>Proveedor</h3>
            <p>{product.supplier}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
