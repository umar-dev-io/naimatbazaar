'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function CartDrawer({ isOpen, setIsOpen, cart, updateQty }) {
  const [custName, setCustName] = useState('');
  const [custCity, setCustCity] = useState('Lahore');
  const [custAddress, setCustAddress] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  let deliveryFee = 0;
  if (subtotal > 0 && subtotal < 4000) {
    deliveryFee = custCity === 'Lahore' ? 250 : 350;
  }
  const total = subtotal + deliveryFee;

  const submitWhatsAppOrder = () => {
    // Error Alert: Empty Cart
    if (cart.length === 0) {
      MySwal.fire({
        icon: 'warning',
        title: 'Cart Khali Hai!',
        text: 'Barah-e-Karam pehle kisi product ko cart mein add karein.',
        confirmButtonColor: '#8B0000',
        background: '#fff',
        showClass: {
          popup: 'animate__animated animate__fadeInDown animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp animate__faster'
        }
      });
      return;
    }

    // Error Alert: Missing Fields
    if (!custName.trim() || !custAddress.trim() || !custPhone.trim()) {
      MySwal.fire({
        icon: 'error',
        title: 'Adhoori Maloomat!',
        text: 'Barah-e-Karam Form ke tamam zaroori khane pur karein.',
        confirmButtonColor: '#8B0000',
        showClass: {
          popup: 'animate__animated animate__shakeX animate__faster'
        }
      });
      return;
    }

    setIsSubmitting(true);

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

    // Success Toast Notification via SweetAlert Mixin
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'WhatsApp par redirect ho raha hai...'
    });

    setTimeout(() => {
      window.open(`https://wa.me/923258060699?text=${msg}`, '_blank');
      setIsSubmitting(false);
      setIsOpen(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Sliding Drawer Animation Container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-[420px] bg-white shadow-2xl flex flex-col relative z-10 overflow-hidden"
            >
              
              {/* Drawer Header */}
              <div className="bg-[#8B0000] text-white p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-300 animate-bounce" />
                  <h3 className="font-extrabold text-sm tracking-wide">Your Shopping Cart</h3>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)} 
                  className="text-white text-lg bg-white/10 hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {cart.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-3"
                  >
                    <div className="w-16 h-16 bg-red-50 text-[#8B0000] rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner">
                      🛒
                    </div>
                    <p className="text-gray-500 font-medium text-xs">Aapka cart khali hai.</p>
                  </motion.div>
                ) : (
                  <motion.ul layout className="space-y-3">
                    <AnimatePresence>
                      {cart.map((item, index) => (
                        <motion.li 
                          key={index}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 shadow-xs transition-all text-xs"
                        >
                          <div className="flex-1 pr-3">
                            <div className="font-bold text-gray-900 leading-tight">{item.title}</div>
                            <div className="text-gray-500 text-[11px] mt-0.5">Size: {item.grammage} | Rs. {item.price.toLocaleString()}</div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <motion.button 
                                whileTap={{ scale: 0.85 }}
                                onClick={() => updateQty(index, -1)} 
                                className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 w-6 h-6 rounded-md font-bold flex items-center justify-center cursor-pointer shadow-2xs"
                              >
                                <Minus className="w-3 h-3" />
                              </motion.button>
                              <span className="font-extrabold text-xs text-gray-800 w-4 text-center">{item.qty}</span>
                              <motion.button 
                                whileTap={{ scale: 0.85 }}
                                onClick={() => updateQty(index, 1)} 
                                className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 w-6 h-6 rounded-md font-bold flex items-center justify-center cursor-pointer shadow-2xs"
                              >
                                <Plus className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="font-black text-[#8B0000] text-xs">Rs. {(item.price * item.qty).toLocaleString()}</div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>
                )}

                {/* Subtotal & Totals Box */}
                {cart.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 bg-gray-50/50 p-3 rounded-xl text-xs space-y-1.5"
                  >
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal:</span>
                      <span className="font-semibold text-gray-800">Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee:</span>
                      <span className="font-semibold text-gray-800">{subtotal >= 4000 && subtotal > 0 ? 'FREE 🎉' : `Rs. ${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between font-black text-sm text-[#8B0000] pt-2 border-t border-dashed border-gray-300">
                      <span>Total Amount:</span>
                      <span>Rs. {total.toLocaleString()}</span>
                    </div>
                  </motion.div>
                )}

                {/* Customer Details Form */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-xs space-y-2.5"
                >
                  <h4 className="font-bold text-[#8B0000] text-xs pb-1 border-b border-gray-100 flex items-center justify-between">
                    <span>Delivery Details (COD)</span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">Secure Checkout</span>
                  </h4>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      value={custName} 
                      onChange={(e) => setCustName(e.target.value)} 
                      className="w-full p-2 border border-gray-200 focus:border-[#8B0000] rounded-xl text-xs outline-none bg-gray-50/50 transition-colors" 
                      placeholder="Aapka Poora Naam" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-1">City *</label>
                    <select 
                      value={custCity} 
                      onChange={(e) => setCustCity(e.target.value)} 
                      className="w-full p-2 border border-gray-200 focus:border-[#8B0000] rounded-xl text-xs outline-none bg-gray-50/50 transition-colors"
                    >
                      <option value="Lahore">Lahore (Rs. 250)</option>
                      <option value="Outside Lahore">Outside Lahore (Rs. 350)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-1">Complete Delivery Address *</label>
                    <input 
                      type="text" 
                      value={custAddress} 
                      onChange={(e) => setCustAddress(e.target.value)} 
                      className="w-full p-2 border border-gray-200 focus:border-[#8B0000] rounded-xl text-xs outline-none bg-gray-50/50 transition-colors" 
                      placeholder="Ghar/Shop No, Street, Area" 
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-1">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      value={custPhone} 
                      onChange={(e) => setCustPhone(e.target.value)} 
                      className="w-full p-2 border border-gray-200 focus:border-[#8B0000] rounded-xl text-xs outline-none bg-gray-50/50 transition-colors" 
                      placeholder="03XXXXXXXXX" 
                    />
                  </div>
                </motion.div>

              </div>

              {/* Drawer Footer Submission Button */}
              <div className="p-4 border-t border-gray-100 bg-white shadow-lg">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#22c55e" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={submitWhatsAppOrder} 
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-none py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all relative overflow-hidden"
                >
                  <motion.div
                    animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ repeat: isSubmitting ? Infinity : 0, duration: 1 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  <span>{isSubmitting ? 'Processing Order...' : '💬 Confirm Order via WhatsApp'}</span>
                </motion.button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}