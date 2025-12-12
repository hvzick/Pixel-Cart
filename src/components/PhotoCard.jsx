import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Sparkles } from "lucide-react";

const PhotoCard = ({ photo, isInCart, onAddToCart }) => {
  return (
    <div className="group relative animate-fade-in overflow-hidden rounded-xl bg-card border border-border shadow-soft transition-all duration-500 hover:shadow-hover hover:border-primary/30 hover:-translate-y-1">
      {/* NFT Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2 py-1 text-xs font-medium text-primary border border-primary/30">
        <Sparkles className="h-3 w-3" />
        NFT
      </div>
      
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      
      {/* Hover overlay with glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="p-4 relative">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {photo.category}
            </span>
            <h3 className="font-display text-lg font-bold text-card-foreground group-hover:text-glow transition-all">
              {photo.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Price</span>
            <p className="font-display text-xl font-bold text-accent">
              ${photo.price}
            </p>
          </div>
        </div>
        
        <Button
          variant="gallery"
          className="w-full"
          onClick={() => onAddToCart(photo)}
          disabled={isInCart}
        >
          {isInCart ? (
            <>
              <Check className="h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PhotoCard;
