import { Camera, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/90 backdrop-blur-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-neon-glow animate-gradient shadow-glow">
              <Camera className="h-6 w-6 text-primary-foreground" />
              <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-glow">
                NFT Gallery
              </h1>
              <p className="text-xs text-muted-foreground">
                Exclusive Digital Collectibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
