# Pixel Cart - NFT Photo Gallery & Shopping Cart

A modern, responsive web application for browsing and purchasing photo NFTs. Built with React, Vite, and Tailwind CSS with a beautiful UI powered by shadcn/ui components and Radix UI primitives.

## Features

- 🎨 **Beautiful Photo Gallery** - Display 10 high-quality photo NFTs with smooth animations
- 🛒 **Shopping Cart** - Add/remove items from cart with real-time total calculation
- 💳 **Purchase System** - Complete transactions with persistent data storage
- 💰 **Rupee Pricing** - All prices displayed in Indian Rupees (₹)
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Modern UI** - Dark mode with glassmorphism effects and smooth animations
- 💾 **Persistent Storage** - Purchased items remain removed even after page refresh
- 📲 **Toast Notifications** - Real-time feedback for user actions

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **State Management**: React Hooks with localStorage

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── dialog.jsx
│   │   ├── sheet.jsx
│   │   └── ... (40+ UI components)
│   ├── CartButton.jsx      # Floating cart button
│   ├── Header.jsx          # Navigation header
│   ├── PhotoCard.jsx       # Individual photo display
│   ├── PhotoGallery.jsx    # Gallery grid layout
│   └── ShoppingCart.jsx    # Shopping cart panel
├── pages/
│   ├── Index.jsx           # Main gallery page
│   └── NotFound.jsx        # 404 page
├── data/
│   └── photos.js           # Photo data with prices
├── hooks/
│   ├── use-mobile.js       # Mobile detection
│   └── use-toast.js        # Toast notifications
├── lib/
│   └── utils.js            # Utility functions (cn, classnames)
├── assets/
│   └── photos/             # Photo images (f1.jpg - f10.jpg)
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles with Tailwind
```

## Available Photos

The application comes with 10 photo NFTs:

- Photo 1 - ₹2
- Photo 2 - ₹3
- Photo 3 - ₹2
- Photo 4 - ₹4
- Photo 5 - ₹2
- Photo 6 - ₹3
- Photo 7 - ₹5
- Photo 8 - ₹2
- Photo 9 - ₹3
- Photo 10 - ₹4

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd pixel-cart-13-main
```

2. Install dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will start at `http://localhost:8080/`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Usage

### Adding Items to Cart

1. Browse the photo gallery
2. Click "Add to Cart" button on any photo card
3. A toast notification confirms the item was added

### Viewing Cart

1. Click the floating cart button in the bottom-right corner
2. View all items in the cart panel
3. See the total price calculated automatically

### Removing Items

1. Open the cart panel
2. Click the trash icon next to any item to remove it

### Completing a Purchase

1. Click the "Complete Purchase" button in the cart
2. A success toast will confirm the transaction
3. Purchased items are permanently removed from the gallery
4. Changes persist across page refreshes

## Key Features Explained

### Persistent Storage

- Uses browser's `localStorage` to save which photos have been purchased
- Prevents items from reappearing after page refresh
- Clear localStorage to reset the gallery

### Real-time Total Calculation

- Automatically sums the price of all items in the cart
- Extracts numeric values from rupee-formatted prices
- Updates instantly when items are added/removed

### Responsive Design

- Mobile-optimized shopping cart (slides in from right)
- Touch-friendly buttons and interactions
- Adaptive layout for all screen sizes

### Toast Notifications

- Action confirmations (added to cart, purchased)
- Error messages (empty cart, already in cart)
- Custom styling matching the application theme

## Configuration

### Adding New Photos

Edit `src/data/photos.js`:

```javascript
{
  id: "11",
  title: "Photo 11",
  price: "₹5",
  image: f11,
  category: "Nature",
}
```

Then import the image at the top of the file:

```javascript
import f11 from "@/assets/photos/f11.jpg";
```

### Changing Prices

Simply update the `price` field in `src/data/photos.js` with the desired rupee amount.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication
- Wishlist feature
- Multiple currency support
- Payment gateway integration
- Admin panel for managing photos
- Order history
- Customer reviews and ratings

## License

This project is open source and available under the MIT License.

## Author

Created as a modern e-commerce photo NFT gallery application.

---

**Happy shopping! 🎨🛒**
