import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message, Collapse } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Bookmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer, { CartItem } from '@/components/CartDrawer';

import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

// Mock product data - in a real app this would come from an API
const allProducts = {
  '1': {
    id: '1',
    name: 'Продажи',
    descr: 'Краткое описание кандидата',
    image: product1,
    description: '',
  },
  '2': {
    id: '2',
    name: 'Внедрение ИИ',
    descr: 'Краткое описание кандидата',
    image: product2,
    description: '',
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = id ? allProducts[id as keyof typeof allProducts] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {

    message.success({
      content: 'Запрос отправлен',
      className: 'custom-message',
      style: { fontFamily: 'Montserrat, sans-serif' },
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const collapseItems = [
    {
      key: '1',
      label: <span className="font-body text-sm tracking-wide">Портфолио</span>,
      children: (
        <div className="font-body text-sm text-muted-foreground space-y-2">
          
        </div>
      ),
    },
    {
      key: '2',
      label: <span className="font-body text-sm tracking-wide">Опыт</span>,
      children: (
        <div className="font-body text-sm text-muted-foreground space-y-2">
          
        </div>
      ),
    },
    {
      key: '3',
      label: <span className="font-body text-sm tracking-wide">Расписание</span>,
      children: (
        <div className="font-body text-sm text-muted-foreground space-y-2">
          
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => message.info('Search coming soon')}
      />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Image gallery */}
            <div className="flex gap-4">

              {/* Main image */}
              <div className="flex-1 relative bg-[#f5f5f5]">
                <div className="aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Product info */}
            <div className="lg:pt-8">
              <h1 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="font-body text-lg text-muted-foreground mb-8">
                {product.descr}
              </p>

              {/* Collapsible sections */}
              <div className="border-t border-border">
                <Collapse 
                  items={collapseItems}
                  bordered={false}
                  expandIconPosition="end"
                  className="bg-transparent product-collapse"
                />
              </div>
              <br/><br/>
              {/* Add to cart section */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-charcoal text-primary-foreground font-body text-sm tracking-[0.15em] uppercase hover:bg-charcoal-light transition-colors"
                >
                  Связаться с тренером
                </button>
                <button
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    message.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
                  }}
                  className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                    isWishlisted 
                      ? 'bg-charcoal border-charcoal text-primary-foreground' 
                      : 'border-border hover:border-charcoal'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

            </div>
          </div>
        </div>
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

export default ProductDetail;
