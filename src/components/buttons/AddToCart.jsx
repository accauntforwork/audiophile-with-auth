import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const AddToCart = ({
  product,
  cartItems,
  setCartItems,
  cartItemCount,
  setCartItemCount,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);

    // local storagedan elemntlarni olish
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // tanlangan maxsulot borligi tekshirish
    const existingCartItemIndex = existingCartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (existingCartItemIndex !== -1) {
      // bor bo'lsa maxsulot miqdorini o'zgartirish
      existingCartItems[existingCartItemIndex].quantity = newQuantity;

      // localStoragedagi ma'lumotni yangilash
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...product,
        quantity,
        cartImage: product.image.cart,
      })
    );

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingCartItemIndex = existingCartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (existingCartItemIndex !== -1) {
      existingCartItems[existingCartItemIndex].quantity += quantity;
    } else {
      existingCartItems.push({
        ...product,
        quantity,
        cartImage: product.image.cart,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    setCartItems(existingCartItems);
    setCartItemCount(
      existingCartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-between gap-4 max-w-[296px]">
      <div className="flex gap-[20px] place-items-center bg-paleSilver mx-auto px-6">
        <button
          type="button"
          className="opacity-25 py-4 focus:outline-none "
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="bg-paleSilver py-4 w-4 text-center focus:outline-none text-subtitle"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          type="button"
          className="opacity-25 py-4 focus:outline-none "
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className="bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
