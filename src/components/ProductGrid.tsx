import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

const products = [
  {
    id: '1',
    name: 'Продажи',
    descr: 'Описание кандидата',
    image: product1,
    isNew: true,
  },
  {
    id: '2',
    name: 'Использование ИИ',
    descr: 'Описание кандидата',
    image: product2,
    isNew: true,
  },
];

interface ProductGridProps {
  onAddToCart?: (id: string) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl tracking-[0.15em] text-[]">
          Тренеры
        </h2>
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
          Зарекомендовавшие себя
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard 
              {...product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <button className="px-12 py-4 border border-foreground text-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300">
          Все тренеры
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
