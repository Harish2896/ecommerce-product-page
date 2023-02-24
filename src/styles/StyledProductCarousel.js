import tw, { styled } from "twin.macro";

export const StyledProductCarousel = styled.div`
  ${tw`flex flex-col md:flex-row md:justify-center md:items-center md:mx-6 md:mt-6 lg:place-content-evenly`}
  .carousel {
    .slider-wrapper {
      ${tw`md:rounded-3xl xl:w-96`}
    }
    .right-arrow {
      ${tw`visible absolute top-[40%] bottom-0 right-10 z-30 p-2 md:invisible`}
    }
    .left-arrow {
      ${tw`visible absolute top-[40%] bottom-0 left-10 p-2 z-30 md:invisible`}
    }
    .control-dots {
      ${tw`invisible`}
    }
    .carousel-status {
      ${tw`invisible`}
    }
    .thumbs {
      ${tw`hidden md:flex justify-center`}
    }
    .thumb {
      border: 3px solid transparent;
      border-radius: 18px;
      img {
        ${tw`w-full rounded-xl`}
      }
      &:hover,
      :focus {
        ${tw`border-none`}
      }
      &.selected {
        ${tw`border-2 border-solid border-orange rounded-2xl p-0 bg-white`}
        img {
          ${tw`opacity-40`}
        }
      }
    }
  }

  .light-box {
    ${tw`hidden md:fixed md:flex flex-col justify-center items-center top-0 left-0 w-full h-screen z-50 bg-[rgba(0,0,0,0.6)]`}
    .carousel-root {
      ${tw`w-96`}
    }
    .carousel.carousel-slider {
      ${tw`overflow-visible`}
    }
    .carousel {
      ${tw`overflow-visible`}
      .right-arrow {
        ${tw`visible top-[40%] bottom-0 right-0 p-3 z-50`}
      }
      .left-arrow {
        ${tw`visible top-[40%] bottom-0 left-0 p-3 z-50`}
      }
    }
  }
`;
