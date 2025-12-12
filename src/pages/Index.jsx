import { useState } from "react";
import { initialPhotos } from "@/data/photos";
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import ShoppingCartComponent from "@/components/ShoppingCart";
import CartButton from "@/components/CartButton";
import { toast } from "sonner";

const Index = () => {
  const [availablePhotos, setAvailablePhotos] = useState(initialPhotos);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (photo) => {
    if (cartItems.find((item) => item.id === photo.id)) {
      toast.info("Already in cart", {
        description: `${photo.title} is already in your cart`,
      });
      return;
    }
    setCartItems((prev) => [...prev, photo]);
    toast.success("Added to cart!", {
      description: `${photo.title} - ${photo.price}`,
    });
  };

  const handleRemoveFromCart = (photoId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== photoId));
  };

  const handlePurchase = () => {
    const purchasedIds = cartItems.map((item) => item.id);
    setAvailablePhotos((prev) =>
      prev.filter((photo) => !purchasedIds.includes(photo.id))
    );
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl text-glow">
            Curated Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and collect exclusive digital artworks from around the
            world
          </p>
        </div>

        <PhotoGallery
          photos={availablePhotos}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
        />
      </main>

      <CartButton
        itemCount={cartItems.length}
        onClick={() => setIsCartOpen(true)}
      />

      <ShoppingCartComponent
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onPurchase={handlePurchase}
      />
    </div>
  );
};

export default Index;
