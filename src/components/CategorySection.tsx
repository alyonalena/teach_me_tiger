import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

const categories = [
  {
    title: 'Продажи',
    subtitle: 'В любых сферах',
    image: product1,
    href: '#pumps',
  },
  {
    title: 'Внедрение ИИ в рабочие процессы',
    subtitle: '',
    image: product2,
    href: '#stilettos',
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-[#D0FE00] text-3xl md:text-4xl tracking-[0.15em]">
            Категории 
          </h2>
          <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            Обучение по разным направлениям
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <a 
              key={category.title}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden block animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-3xl md:text-4xl tracking-[0.2em] text-primary-foreground">
                  {category.title}
                </h3>
                <p className="font-body text-xs tracking-[0.3em] text-primary-foreground/80 uppercase mb-2">
                  {category.subtitle}
                </p>
                <div className="mt-6 overflow-hidden">
                  <span className="inline-block font-body text-xs tracking-[0.2em] text-primary-foreground uppercase border-b border-primary-foreground pb-1 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Узнать больше
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
