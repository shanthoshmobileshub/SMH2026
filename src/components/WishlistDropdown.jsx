import React from 'react';
import { FiX, FiHeart, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function WishlistDropdown({ isOpen, onClose, items, onRemoveItem }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      {/* Dropdown Content */}
      <div className="relative w-80 bg-white shadow-lg p-4 overflow-y-auto max-h-screen">
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <FiHeart className="text-red-500" /> Your Wishlist
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">Your wishlist is empty.</div>
        ) : (
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
                  <div className="text-xs text-gray-500">{item.brand}</div>
                  <div className="text-sm font-bold mt-1">₹{item.price}</div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                  aria-label={`Remove ${item.title} from wishlist`}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
