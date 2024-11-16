// src/pages/Store.tsx
import React, { useState } from 'react';
import { HiSparkles, HiShoppingCart } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'templates', name: 'Templates' },
    { id: 'plugins', name: 'Plugins' },
    { id: 'themes', name: 'Themes' },
    { id: 'tools', name: 'Tools' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Website Template',
      category: 'templates',
      price: 49.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Modern and responsive website template for businesses',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'SEO Plugin Pro',
      category: 'plugins',
      price: 29.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Advanced SEO optimization tool for your website',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Dark Mode Theme',
      category: 'themes',
      price: 19.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Elegant dark mode theme for modern applications'
    },
    {
      id: 4,
      name: 'Analytics Dashboard',
      category: 'tools',
      price: 79.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Comprehensive analytics dashboard for data visualization',
      badge: 'Featured'
    },
    {
      id: 5,
      name: 'E-commerce Template',
      category: 'templates',
      price: 59.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Complete e-commerce solution with shopping cart'
    },
    {
      id: 6,
      name: 'Form Builder Pro',
      category: 'plugins',
      price: 39.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Drag and drop form builder with advanced features'
    },
    {
      id: 7,
      name: 'Portfolio Theme',
      category: 'themes',
      price: 24.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Showcase your work with this beautiful portfolio theme'
    },
    {
      id: 8,
      name: 'Code Editor Plugin',
      category: 'tools',
      price: 34.99,
      image: 'https://via.placeholder.com/400x300',
      description: 'Advanced code editor with syntax highlighting'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#100b2e] to-[#030014]">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-full filter blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full filter blur-[120px] animate-float-delayed"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <HiSparkles className="w-6 h-6 text-violet-400" />
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-violet-400">
              Digital Products
            </span>
            <HiSparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Store
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of premium digital products and tools
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition-colors duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl p-px overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A]/90 rounded-3xl overflow-hidden">
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/90 text-white">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-violet-400">
                      ${product.price}
                    </span>
                    <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors duration-300 group">
                      <HiShoppingCart className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
