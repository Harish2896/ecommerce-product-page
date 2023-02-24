import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StyledProductCarousel } from "../../styles/StyledProductCarousel";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import product from "../data.json";
import ProdDescription from "../Prod-Description/ProdDescription";

const ProductCarousel = ({ setNoOfItems }) => {
  const [isLightboxOn, setIsLightboxOn] = useState(false);
  const { images } = product;

  const onProductClickHandler = () => {
    setIsLightboxOn(!isLightboxOn);
  };

  const renderArrowNext = (onClickHandler, hasPrev) => {
    return (
      <div className="right-arrow" onClick={onClickHandler}>
        <MdOutlineKeyboardArrowRight className="w-10 h-10 bg-white p-1 rounded-3xl left-[5px] absolute hover:cursor-pointer" />
      </div>
    );
  };
  const renderArrowPrev = (onClickHandler, hasPrev) => {
    return (
      <div className="left-arrow" onClick={onClickHandler}>
        <MdOutlineKeyboardArrowLeft className="w-10 h-10 p-1 right-[5px] rounded-3xl bg-white absolute hover:cursor-pointer" />
      </div>
    );
  };

  return (
    <StyledProductCarousel>
      <div className="md:basis-3/6 lg:basis-5/12 xl:basis-5/12">
        <Carousel
          renderArrowNext={renderArrowNext}
          renderArrowPrev={renderArrowPrev}
        >
          {images.map((product, index) => (
            <div
              onClick={onProductClickHandler}
              key={index}
              className="md:cursor-pointer"
            >
              <img
                src={require(`../../assets/image-${product}.jpg`)}
                alt={product}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="md:basis-3/6 lg:basis-5/12 xl:basis-5/12">
        <ProdDescription setNoOfItems={setNoOfItems} />
      </div>

      {/*below code for light-box*/}

      <div className={isLightboxOn ? "light-box" : "hidden"}>
        <div
          className="pb-3 pl-96 cursor-pointer"
          onClick={onProductClickHandler}
        >
          <svg
            width="14"
            height="15"
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <Carousel
          renderArrowNext={renderArrowNext}
          renderArrowPrev={renderArrowPrev}
        >
          {images.map((product, index) => (
            <div key={index}>
              <img
                src={require(`../../assets/image-${product}.jpg`)}
                alt={product}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </StyledProductCarousel>
  );
};

export default ProductCarousel;
