"use client";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useLanguage } from "@/app/lang/LanguageProvider"; 
import { CartItemData } from "./Index";

interface CartItemProps {
  cartItems: CartItemData[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemData[]>>;
}


const CartItem = ({cartItems,setCartItems}:CartItemProps) => {
  const { language } = useLanguage();
  const isEng = language === "ENG";
  const dir = isEng ? "ltr" : "rtl";
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
  console.log(cartItems)
  return (
    <div
      dir={dir}
      className="relative bg-white border border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-[22px] p-0 overflow-hidden flex flex-col min-h-screen"
    >
      <div className="border border-gray-200 border-t-0 rounded-b-[22px] px-6 py-4 hidden md:grid grid-cols-3 text-center gap-8 lg:gap-16 text-gray-600 font-semibold">
        <div className="text-center">{isEng ? "Name" : "الاسم"}</div>
        <div className="text-center">{isEng ? "Quantity" : "العدد"}</div>
        <div className="text-center">{isEng ? "Price" : "السعر"}</div>
      </div>

      <div className="divide-y-[2px] divide-[#D7D7D7] px-6 py-4 flex-grow overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 py-6"
          >
            <div className="flex items-center justify-between md:col-span-1 order-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => removeItem(item.id)}
                  className="flex items-center gap-1 text-xs cursor-pointer text-[#b1bbc6] hover:text-red-500 transition-colors"
                  aria-label={isEng ? "Remove item" : "حذف العنصر"}
                >
                  {isEng ? "Remove" : "حذف"}
                  <FiTrash2 className="w-4 h-4" />
                </button>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-semibold text-[#3d3d3d]">
                    {isEng ? "Month" : "شهر"}
                  </span>
                  <span className="font-extrabold text-[#3d3d3d] text-md">{isEng ? item?.name?.en : item?.name?.ar}</span>
                </div>
              </div>
              <span className="text-xl font-bold text-[#f98a35] md:hidden">
                ${item.price}
              </span>
            </div>

            <div className="flex justify-between items-center md:justify-center md:col-span-1 order-3 md:order-2">
              <span className="text-sm text-gray-500 md:hidden">
                {isEng ? "Quantity" : "العدد"}
              </span>
              <div className="flex items-center gap-2 bg-[#f7f9fc] rounded-lg px-5 py-1.5">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-[#f47d21] text-white hover:bg-orange-600 transition-colors"
                  aria-label={isEng ? "Increase quantity" : "زيادة العدد"}
                >
                  <FiPlus size={20} />
                </button>
                <span className="text-md font-normal w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                    item.quantity === 1
                      ? "bg-[#F0F0F0] text-gray-400 cursor-not-allowed"
                      : "bg-[#f47d21] text-white hover:bg-orange-600"
                  }`}
                  disabled={item.quantity === 1}
                  aria-label={isEng ? "Decrease quantity" : "إنقاص العدد"}
                >
                  <FiMinus size={20} />
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center md:col-span-1 order-3">
              <span className="text-2xl font-bold text-[#f98a35]">${item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 sticky bottom-0 bg-white border-t border-gray-200">
        <button className="cursor-pointer w-full py-3 rounded-[14px] text-[#165E84] font-bold flex items-center justify-center gap-2 transition">
          <div className="w-6 h-6 rounded-full bg-[#165E84] text-white flex items-center justify-center">
            <FaPlus size={18} />
          </div>
          {isEng ? "Add More" : "أضف المزيد"}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
