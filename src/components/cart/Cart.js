import deleteIcon from "../../assets/icon-delete.svg";
import { CartButton, CartContent, StyledCart } from "../../styles/StyledCart";
import { CartHead } from "../../styles/StyledCart";
import productThumbnail from "../../assets/image-product-1-thumbnail.jpg";

const Cart = ({ noOfItems, setNoOfItems, isCartOpen }) => {
  const clearCart = () => {
    setNoOfItems(0);
  };
  return (
    <StyledCart>
      <CartHead>Cart</CartHead>
      {noOfItems ? (
        <>
          <CartContent>
            <article>
              <img
                src={productThumbnail}
                alt="cart-img"
                className="w-12 h-12 rounded-md"
              />
            </article>
            <article className="text-[1.14rem] text-darkGrayishBlue">
              <span className="block">Fall Limited Edition Sneakers</span>
              <span>$125.00 x{noOfItems}</span>
              <span className="text-black font-bold pl-4">
                ${125.0 * noOfItems}.00
              </span>
            </article>
            <article className="cursor-pointer" onClick={clearCart}>
              <img
                src={deleteIcon}
                alt="delete-icon"
                className="min-w-[20px] min-h-[18px]"
              />
            </article>
          </CartContent>
          <CartButton>Checkout</CartButton>
        </>
      ) : (
        <div className="text-lg text-darkGrayishBlue mx-auto pt-16">
          Your cart is empty
        </div>
      )}
    </StyledCart>
  );
};

export default Cart;
