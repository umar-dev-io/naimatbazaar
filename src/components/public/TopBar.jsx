export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white py-2 px-4 text-xs flex justify-between items-center flex-wrap gap-2">
      <div className="flex items-center gap-3">
        <span>🚚 Fast Cash On Delivery Across Pakistan</span>
        <span>📞 WhatsApp: 03258060699</span>
      </div>
      <div className="space-x-1">
        <a href="https://www.facebook.com/share/16hGh1KoLD/" target="_blank" className="hover:underline">Facebook</a> |
        <a href="https://www.instagram.com/naimat.bazaar" target="_blank" className="hover:underline">Instagram</a>
      </div>
    </div>
  );
}