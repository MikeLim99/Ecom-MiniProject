import React from "react";
import TextHeader from "../../../component/basics/TextHeader";
import CartBox from "../../../component/basics/CartBox";
import Button from "../../../component/basics/Button";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useBuyProduct } from "../../../hooks/products/useBuyProduct";


function CartPage() {
  const { cartItems, dispatch } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const { buyProduct } = useBuyProduct();

  const handleIncrease = (id) => {
    const selectedItem = cartItems.find((item) => item._id === id);
    if (!selectedItem) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: selectedItem.quantity + 1 }
    });
  };

  const handleDecrease = (id) => {
    const selectedItem = cartItems.find((item) => item._id === id);
    if (!selectedItem) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: selectedItem.quantity - 1 }
    });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  
  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10">
        <TextHeader Title={"My Cart"} />
        <div className="my-20 h-[500px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <h1 className="text-2xl">Your cart is empty</h1>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartBox
                key={item._id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>
        {cartItems.length > 0 && ( 
          <div className="fixed bottom-0 w-[80%] h-[120px] bg-blue-300 shadow-lg flex items-center justify-around rounded-t-lg">
          <h1 className="text-[30px] font-bold basis-1/4 text-center"><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
          <div className="flex gap-5">
            <div>
            <p>Items</p>
            <p>Discounts</p>
            <p>Total</p>
            </div>
            <div>
            <p>: {itemCount}</p>
            <p>: $0.00</p>
            <p>: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <Button Title={"Checkout"} OnClick={buyProduct} />
        </div>
        )}
        
      </div>
    </div>
  );
}

export default CartPage;
