import menu from "../../assets/icon-menu.svg";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import close from "../../assets/icon-close.svg";
import { useState } from "react";
import { Navlinks, StyledNavbar } from "../../styles/StyledNavbar";
import Cart from "../cart/Cart";

const Navbar = ({ noOfItems, setNoOfItems }) => {
  const [isNavMenuopen, setIsNavMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const clickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <StyledNavbar>
      <div className="flex items-center w-[80%]">
        <img
          onClick={() => setIsNavMenuOpen(!isNavMenuopen)}
          src={menu}
          alt="menu-icon"
        />
        <h1>sneakers</h1>
        <Navlinks isOpen={isNavMenuopen}>
          <ul>
            <li onClick={() => setIsNavMenuOpen(!isNavMenuopen)}>
              <img src={close} alt="close-button" />
            </li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Navlinks>
      </div>
      <div>
        <article className="block relative cursor-pointer">
          <img
            className="w-6 h-6"
            src={cart}
            alt="cart-icon"
            onClick={clickHandler}
          />
          <span
            className={
              noOfItems
                ? "absolute top-[-8px] right-[-10px] text-center w-5 h-4 rounded-[50%] text-white bg-orange text-[12px] font-bold"
                : "hidden"
            }
          >
            {noOfItems}
          </span>
        </article>
        <img
          className="w-7 md:w-10 cursor-pointer border-white border-2 rounded-full transition ease-out delay-150 duration-500 hover:border-orange"
          src={avatar}
          alt="cart-icon"
        />
      </div>
      {isCartOpen && (
        <Cart
          noOfItems={noOfItems}
          setNoOfItems={setNoOfItems}
          isCartOpen={isCartOpen}
        />
      )}
    </StyledNavbar>
  );
};

export default Navbar;
