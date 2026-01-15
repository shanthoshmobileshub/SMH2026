import React from 'react';
import { FiX, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function CartDropdown({ isOpen, onClose, items, onRemoveItem, onProceedToPay }) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      {/* Dropdown Content */}
      <div className="relative w-80 bg-white shadow-lg p-4 overflow-y-auto max-h-screen">
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <FiShoppingCart className="text-indigo-600" /> Your Cart
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">Your cart is empty.</div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                  <Link to={`/product/${item.id}`} onClick={onClose}>
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} onClick={onClose} className="text-sm font-medium hover:underline block leading-tight">
                      {item.title}
                    </Link>
                    <div className="text-xs text-gray-500">Qty: {item.qty || 1}</div>
                    <div className="text-sm font-bold mt-1">₹{item.price}</div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => { onProceedToPay(); onClose(); }}
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
