import PhotoCard from "./PhotoCard";

const PhotoGallery = ({ photos, cartItems, onAddToCart }) => {
  const cartIds = cartItems.map((item) => item.id);

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="font-display text-4xl font-semibold text-muted-foreground">
          No Photos Available
        </div>
        <p className="mt-2 text-muted-foreground">
          All photos have been purchased. Thank you!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <PhotoCard
            photo={photo}
            isInCart={cartIds.includes(photo.id)}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
