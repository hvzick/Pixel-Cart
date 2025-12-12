import { Button } from "@/components/ui/button";
import { X, ShoppingBag, Trash2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ShoppingCart = ({
  items,
  isOpen,
  onClose,
  onRemoveItem,
  onPurchase,
}) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handlePurchase = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    onPurchase();
    toast.success(`Successfully purchased ${items.length} NFT${items.length > 1 ? 's' : ''}!`, {
      description: `Total: $${total}`,
    });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-full max-w-md bg-card border-l border-border shadow-cart transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">Your Cart</h2>
                <p className="text-xs text-muted-foreground">{items.length} items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 transition-colors hover:bg-secondary border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                <div className="relative">
                  <ShoppingBag className="h-20 w-20 opacity-20" />
                  <Sparkles className="absolute -right-2 top-0 h-6 w-6 text-primary/50" />
                </div>
                <p className="mt-4 font-display text-lg">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Add some NFTs to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="animate-scale-in flex items-center gap-4 rounded-xl bg-secondary/50 p-3 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                        <Sparkles className="h-2 w-2 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg font-bold text-accent">
                        ${item.price}
                      </span>
                      <Button
                        variant="cartItem"
                        size="icon"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-6 bg-secondary/30">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-display text-3xl font-bold text-accent">${total}</span>
            </div>
            <Button
              variant="cart"
              size="lg"
              className="w-full"
              onClick={handlePurchase}
              disabled={items.length === 0}
            >
              <Sparkles className="h-4 w-4" />
              Complete Purchase
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
