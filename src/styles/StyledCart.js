import tw, { styled } from "twin.macro";

export const StyledCart = styled.div`
  ${tw`absolute z-[45] top-20 flex flex-col space-y-4 w-[96%] h-64 sm:w-[26rem] sm:right-14 rounded-lg bg-white shadow-2xl shadow-black transition-shadow `}
`;

export const CartHead = styled.div`
  ${tw`mt-3 pl-5 pt-6 pb-4 text-lg font-bold border-b border-b-grayishBlue`}
`;

export const CartContent = styled.div`
  ${tw`mt-5 px-4 flex w-full space-x-1 justify-evenly`}
`;

export const CartButton = styled.div`
  ${tw`flex justify-center bg-orange mx-5 mt-5 p-3 text-white font-bold rounded-lg space-x-2 shadow-[0_2px_4px_gray] transition-[all_0.2s_ease] active:translate-y-[2px]  active:shadow-[0_0_2px_gray]`}
`;
