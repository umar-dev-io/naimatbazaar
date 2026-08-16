export default function Header({ cartCount, setIsCartOpen }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1100px] mx-auto px-4 py-2.5 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-decoration-none"
        >
          <img
            src="/images/nblogo.svg"
            alt="Logo"
            className="h-11 w-auto rounded-full object-contain"
          />{" "}
          <span className="text-xl font-extrabold text-primary">
            Naimat Bazaar
          </span>
        </a>

        <ul className="hidden md:flex list-none gap-5 font-semibold text-sm text-gray-700">
          <li>
            <a href="#home" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#deals" className="hover:text-primary">
              Deals
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-primary">
              Products
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-primary">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-primary text-white border-none px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1.5 cursor-pointer hover:bg-primary-dark transition-colors"
        >
          🛒 Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}
