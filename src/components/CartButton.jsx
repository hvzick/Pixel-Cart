import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CartButton = ({ itemCount, onClick }) => {
  return (
    <Button
      variant="cartIcon"
      size="cartFloat"
      className={`fixed bottom-6 right-6 z-30 ${
        itemCount > 0 ? "animate-cart-bounce" : ""
      }`}
      onClick={onClick}
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
          {itemCount}
        </span>
      )}
    </Button>
  );
};

export default CartButton;
