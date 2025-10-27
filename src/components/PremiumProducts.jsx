import React from 'react';
import '../styles/PremiumProducts.css';

const ProductCard = ({ icon, title, description }) => {
  return (
    <div className="product-card1">
      <div className="product-icon1">{icon}</div>
      <h3 className="product-title1">{title}</h3>
      <p className="product-description1">{description}</p>
      <button className="product-button1">Select Product</button>
    </div>
  );
};

export default function PremiumProducts() {
  const products = [
    { id: 1, icon: '🐄', title: 'Cow Milk', description: 'Fresh, pure cow milk delivered daily.' },
    { id: 2, icon: '🐃', title: 'Buffalo Milk', description: 'Creamy buffalo milk with higher fat content.' },
    { id: 3, icon: '🥛', title: 'Toned Milk', description: 'Perfect balance of taste and health benefits.' },
    { id: 4, icon: '🧈', title: 'Ghee', description: 'Pure desi ghee made from traditional methods.' },
  ];

  return (
    <div className="app-container1">
      <h1 className="page-title1">Our Premium Products</h1>
      <div className="products-grid1">
        {products.map(product => (
          <ProductCard
            key={product.id}
            icon={product.icon}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
