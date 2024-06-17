import { Link } from "react-router-dom";

export default function PageHeader() {
  const HeaderStyled =
    "mr-5 cursor-pointer hover:text-[#4E43ED] text-[0.9em] md:text-base";

  return (
    <header className="w-full text-gray-600 body-font flex fixed border-b-2 bg-white z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between ">
        <img src="./logo.png" className="w-[150px]" alt="Logo" />

        <nav className="md:ml-auto hidden sm:flex flex-wrap text-base justify-between w-[60%]">
          <Link to="/about" className={`${HeaderStyled}`}>
            ABOUT
          </Link>
          <Link to="/product" className={`${HeaderStyled}`}>
            PRODUCT
          </Link>
          <Link to="/contents" className={`${HeaderStyled}`}>
            CONTENTS
          </Link>
          <Link to="/contact" className={`${HeaderStyled}`}>
            CONTACT
          </Link>
        </nav>
      </div>
      <Link className="hidden sm:block cursor-pointer hover:text-[#4E43ED] p-5">
        🌐
      </Link>
    </header>
  );
}
