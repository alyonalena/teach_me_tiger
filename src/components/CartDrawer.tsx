import { Drawer, InputNumber } from 'antd';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';

export interface CartItem {
  id: string;
  name: string;
  descr: string;
  quantity: number;
  image: string;
  size?: string;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartDrawer = ({ open, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) => {

  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      width={420}
      closable={false}
      styles={{
        body: { padding: 0 },
        header: { display: 'none' },
      }}
    >
      <div className="h-full flex flex-col bg-background">
        {/* Header */}
        <div className="flex items-center bg-charcoal justify-between px-6 py-5 border-b border-border">
          <h2 className="text-[#D0FE00] text-xl tracking-[0.15em]">Ваш профиль</h2>
          <button 
            onClick={onClose}
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <CloseOutlined style={{color: 'white'}}/>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-body text-muted-foreground mb-4"></p>
              <button onClick={onClose} className="mt-8 px-10 py-3 border border-primary/60 text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-300 animate-fade-up" >
                Войти
              </button>
              <button onClick={onClose} className="mt-8 px-10 py-3 border border-primary/60 text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-300 animate-fade-up">
                Зарегистрироваться
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-base tracking-wider">{item.name}</h3>
                        {item.size && (
                          <p className="font-body text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Remove item"
                      >
                        <DeleteOutlined className="text-sm" />
                      </button>
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <InputNumber
                        min={1}
                        max={10}
                        value={item.quantity}
                        onChange={(value) => onUpdateQuantity(item.id, value || 1)}
                        className="w-20"
                        size="small"
                      />
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-display text-xl">{}</span>
            </div>
            <button className="w-full py-4 bg-charcoal text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-charcoal-light transition-colors">
              Checkout
            </button>
            <p className="font-body text-xs text-center text-muted-foreground mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
