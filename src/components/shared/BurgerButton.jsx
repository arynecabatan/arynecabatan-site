export const BurgerButton = ({ mobileMenu }) => {
  return (
    <div className="flex flex-col gap-[5px] h-6 justify-center">
      <div
        className={`burger-menu ${
          mobileMenu
            ? "translate-x-0 translate-y-[8px] -rotate-45"
            : "translate-x-0 translate-y-0"
        }`}
      />
      <div
        className={`burger-menu ${mobileMenu ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`burger-menu ${
          mobileMenu
            ? "translate-x-0 translate-y-[-6px] -rotate-[-45deg]"
            : "translate-x-0 translate-y-0"
        }`}
      />
    </div>
  );
};

// <div className="flex flex-col gap-1 ml-4 justify-center content-center items-center mobile:hidden">
//   <div
//     className={`${
//       mNavOpen
//         ? `translate-x-0 translate-y-[8px] -rotate-45`
//         : `translate-x-0 translate-y-0`
//     } w-6 h-1 bg-spacecadet dark:bg-culturedwhite ease-linear duration-300`}
//   />
//   <div
//     className={`${
//       mNavOpen ? `opacity-0` : `opacity-100`
//     } w-6 h-1 bg-spacecadet dark:bg-culturedwhite ease-linear duration-300`}
//   />
//   <div
//     className={`${
//       mNavOpen
//         ? `translate-x-0 translate-y-[-8px] -rotate-[-45deg]`
//         : `translate-x-0 translate-y-0`
//     } w-6 h-1 bg-spacecadet dark:bg-culturedwhite ease-linear duration-300`}
//   />
// </div>;
