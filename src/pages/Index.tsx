import { useState } from 'react';
import { message } from 'antd';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGrid from '@/components/ProductGrid';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import CartDrawer, { CartItem } from '@/components/CartDrawer';


const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => message.info('Search coming soon')}
      />
      
      <main>
        <HeroCarousel />
        <ProductGrid onAddToCart={() => {}} />
        <CategorySection />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
