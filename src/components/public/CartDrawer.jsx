'use client';
import { useState } from 'react';

export default function CartDrawer({ isOpen, setIsOpen, cart, updateQty }) {
  const [custName, setCustName] = useState('');
  const [custCity, setCustCity] = useState('Lahore');
  const [custAddress, setCustAddress] = useState('');
  const [custPhone, setCustPhone] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  let deliveryFee = 0;
  if (subtotal > 0 && subtotal < 4000) {
    deliveryFee = custCity === 'Lahore' ? 250 : 350;
  }
  const total = subtotal + deliveryFee;

  const submitWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('Barah-e-Karam pehle kisi product ko cart mein add karein.');
      return;
    }
    if (!custName.trim() || !custAddress.trim() || !custPhone.trim()) {
      alert('Barah-e-Karam Form ke tamam khane pur karein.');
      return;
    }

    let orderItemsText = '';
    cart.forEach((item, i) => {
      const lineTotal = item.price * item.qty;
      orderItemsText += `${i + 1}. *${item.title}* (${item.grammage}) x ${item.qty} = Rs. ${lineTotal}%0A`;
    });

    let deliveryText = (subtotal >= 4000) ? 'FREE Delivery' : `Rs. ${deliveryFee}`;
    let grandTotal = subtotal + deliveryFee;

    let msg = `*NEW ORDER - NAIMAT BAZAAR*%0A--------------------------------%0A` +
              `📋 *Order Items:*%0A${orderItemsText}%0A` +
              `💵 *Subtotal:* Rs. ${subtotal}%0A` +
              `🚚 *Delivery Fee:* ${deliveryText}%0A` +
              `💰 *Total Amount:* Rs. ${grandTotal}%0A--------------------------------%0A` +
              `👤 *Customer Name:* ${encodeURIComponent(custName)}%0A` +
              `🏙️ *City:* ${encodeURIComponent(custCity)}%0A` +
              `🏠 *Address:* ${encodeURIComponent(custAddress)}%0A` +
              `📱 *Phone:* ${encodeURIComponent(custPhone)}%0A--------------------------------%0A` +
              `Barah-e-Karam Mera Order Confirm Karein!`;

    window.open(`https://wa.me/923258060699?text=${msg}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-[400px] bg-white shadow-xl flex flex-col">
          
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-extrabold text-base">Your Cart 🛒</h3>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl bg-none border-none cursor-pointer">&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 py-5 text-xs">Aapka cart khali hai.</p>
            ) : (
              <ul className="space-y-3 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center pb-2.5 border-b border-gray-100 text-xs">
                    <div className="flex-1 pr-2">
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-[11px]">Size: {item.grammage} | Rs. {item.price.toLocaleString()}</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <button onClick={() => updateQty(index, -1)} className="bg-gray-200 border-none w-5 h-5 rounded font-bold cursor-pointer">-</button>
                        <span className="font-bold text-xs">{item.qty}</span>
                        <button onClick={() => updateQty(index, 1)} className="bg-gray-200 border-none w-5 h-5 rounded font-bold cursor-pointer">+</button>
                      </div>
                    </div>
                    <div className="font-extrabold text-primary text-xs">Rs. {(item.price * item.qty).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            )}

            <div className="border-t border-gray-200 pt-2.5 mt-2.5 text-xs">
              <div className="flex justify-between mb-1.5"><span>Subtotal:</span><span>Rs. {subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between mb-1.5"><span>Delivery Fee:</span><span>{subtotal >= 4000 && subtotal > 0 ? 'FREE 🎉' : `Rs. ${deliveryFee}`}</span></div>
              <div className="flex justify-between font-extrabold text-sm text-primary pt-1.5 border-t border-dashed border-gray-300">
                <span>Total Amount:</span><span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-4">
              <h4 className="font-bold text-primary text-xs mb-2 pb-1 border-b border-gray-200">Delivery Details (COD)</h4>
              <div className="mb-2">
                <label className="block text-[10px] font-bold text-gray-600 mb-1">Full Name *</label>
                <input type="text" value={custName} onChange={(e) => setCustName(e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-xs outline-none" placeholder="Aapka Poora Naam" />
              </div>
              <div className="mb-2">
                <label className="block text-[10px] font-bold text-gray-600 mb-1">City *</label>
                <select value={custCity} onChange={(e) => setCustCity(e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-xs outline-none bg-white">
                  <option value="Lahore">Lahore (Rs. 250)</option>
                  <option value="Outside Lahore">Outside Lahore (Rs. 350)</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-[10px] font-bold text-gray-600 mb-1">Complete Delivery Address *</label>
                <input type="text" value={custAddress} onChange={(e) => setCustAddress(e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-xs outline-none" placeholder="Ghar/Shop No, Street, Area" />
              </div>
              <div className="mb-2">
                <label className="block text-[10px] font-bold text-gray-600 mb-1">Phone / WhatsApp Number *</label>
                <input type="tel" value={custPhone} onChange={(e) => setCustPhone(e.target.value)} className="w-full p-1.5 border border-gray-300 rounded text-xs outline-none" placeholder="03XXXXXXXXX" />
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <button onClick={submitWhatsAppOrder} className="w-full bg-wa text-white border-none py-2.5 rounded-lg font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer">
              💬 Confirm Order via WhatsApp
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}