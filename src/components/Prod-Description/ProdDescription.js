import { StyledProductDescrip } from "../../styles/StyledProdDescrip";
import product from "../data.json";
import minus from "../../assets/icon-minus.svg";
import plus from "../../assets/icon-plus.svg";
import { useState } from "react";

const ProdDescription = ({ setNoOfItems }) => {
  const { brand, name, info, originalPrice, offerPrice, discount } = product;
  var [noOfProduct, setnoOfProduct] = useState(0);

  const addItem = () => setnoOfProduct((noOfProduct += 1));
  const reduceItem = () =>
    noOfProduct >= 1 ? setnoOfProduct((noOfProduct -= 1)) : null;

  const addToCart = () => {
    setNoOfItems(noOfProduct);
  }; //For using in no of  cart-tems....

  return (
    <>
      <StyledProductDescrip>
        <div className="text-sm uppercase font-bold tracking-widest text-orange">
          {brand}
        </div>
        <div className="text-4xl font-bold">{name}</div>
        <p className="text-darkGrayishBlue ">{info}</p>
        <div className="flex items-center">
          <span className="font-bold text-3xl pr-4">{offerPrice}</span>
          <span className="text-sm font-bold rounded-md text-orange border-[1px] border-white border-opacity-10 py-[1px] px-[6px] bg-paleOrange">
            {discount}
          </span>
          <span className="ml-auto font-bold text-darkGrayishBlue relative before:block before:absolute before:w-full before:h-1 before:border-b before:top-2 before:border-b-2">
            {originalPrice}
          </span>
        </div>
        <div className="flex justify-between items-center border-paleOrange border-[1px] bg-lightGrayishBlue rounded-md p-3">
          <span className="inline-block cursor-pointer" onClick={reduceItem}>
            <img src={minus} alt="reduce-item" />
          </span>
          <span className="font-bold font-400 text-lg">{noOfProduct}</span>
          <span
            className="inline-block cursor-pointer hover:bg-opacity-90"
            onClick={addItem}
          >
            <img src={plus} alt="add-item" />
          </span>
        </div>
        <button
          onClick={addToCart}
          className="flex justify-center bg-orange p-3 rounded-lg space-x-2 shadow-[0_2px_4px_gray] transition-[all_0.2s_ease] active:translate-y-[2px]  active:shadow-[0_0_2px_gray] hover:bg-opacity-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="block w-6 h-5">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          <span className="font-bold text-lg text-white">Add To Cart</span>
        </button>
      </StyledProductDescrip>
    </>
  );
};

export default ProdDescription;
