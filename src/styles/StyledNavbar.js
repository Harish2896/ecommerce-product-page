import tw, { styled } from "twin.macro";

export const StyledNavbar = styled.div`
  ${tw`w-full px-2 py-4 relative flex justify-between items-center md:py-2 md:border-b-[1px] md:border-grayishBlue`}

  div:nth-child(1) {
    img {
      ${tw`w-5 pt-2 md:hidden`}
    }
  }

  h1 {
    ${tw`px-2 text-4xl font-bold items-center tracking-tighter md:text-5xl md:pr-5 lg:pr-20`}
  }

  div:nth-child(2) {
    ${tw`flex space-x-2 items-center md:space-x-8`}
    img:nth-child(1) {
      ${tw`w-6 h-6`}
    }
    img:nth-child(2) {
      ${tw`w-7 md:w-10 cursor-pointer border-white border-2 rounded-full transition ease-out delay-150 duration-500 hover:border-orange`}
    }
  }
`;
//Navlinks....
export const Navlinks = styled.div`
  ${({ isOpen }) =>
    !isOpen
      ? tw`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 transition-transform translate-x-0 md:relative md:w-full md:bg-white`
      : tw`fixed translate-x-[-200%]`}

  ul {
    ${tw`h-full w-8/12 bg-white space-y-5 md:flex md:justify-evenly md:w-full md:space-y-0 md:pt-2 md:text-darkGrayishBlue`}
    li:nth-child(1) {
      ${tw`p-4 md:hidden md:pl-0`}
    }
    li:nth-child(2) {
      ${tw`pl-4 text-xl font-bold md:font-normal md:pl-0`}
    }
    li:not(:nth-child(1), :nth-child(2)) {
      ${tw`pl-4 text-xl font-bold md:font-normal md:pl-0`}
    }
    li {
      ${tw`md:py-7 cursor-pointer md:border-b-[3px] md:border-lightGrayishBlue hover:border-orange`}
    }
  }
`;
