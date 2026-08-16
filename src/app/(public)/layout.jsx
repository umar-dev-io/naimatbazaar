'use client';
import { ShopProvider, useShop } from '@/context/ShopContext';
import TopBar from '@/components/public/TopBar';
import Header from '@/components/public/Header';
import CartDrawer from '@/components/public/CartDrawer';
import BlogModal from '@/components/public/BlogModal';
import Footer from '@/components/public/Footer';

function PublicLayoutContent({ children }) {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQty, 
    totalCartCount, 
    activeBlogProduct, 
    closeBlog, 
    addToCart 
  } = useShop();

  return (
    <>
      <TopBar />
      <Header cartCount={totalCartCount} setIsCartOpen={setIsCartOpen} />
      
      <main className="flex-1">
        {children}
      </main>

      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} cart={cart} updateQty={updateQty} />
      <BlogModal product={activeBlogProduct} onClose={closeBlog} onAddToCart={addToCart} />
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923258060699?text=Assalam-o-Alaikum%20Naimat%20Bazaar,%20mujhe%20products%20ke%20baare%20mein%20poochna%20hai." 
        className="fixed bottom-5 right-5 bg-wa text-white w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl shadow-lg z-40" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}

export default function PublicLayout({ children }) {
  return (
    <ShopProvider>
      <PublicLayoutContent>{children}</PublicLayoutContent>
    </ShopProvider>
  );
}