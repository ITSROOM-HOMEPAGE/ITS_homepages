import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <header className="w-full text-gray-600 body-font flex fixed border-b-2 bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between ">
        <img src="./logo.png" className="w-[150px]" alt="Logo" />

        <nav className="md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-between w-[60%]">
          <Link
            to="/about"
            className="mr-5 cursor-pointer hover:text-[#4E43ED]"
          >
            ABOUT
          </Link>
          <Link
            to="/product"
            className="mr-5 cursor-pointer hover:text-[#4E43ED]"
          >
            PRODUCT
          </Link>
          <Link
            to="/contents"
            className="mr-5 cursor-pointer hover:text-[#4E43ED]"
          >
            CONTENTS
          </Link>
          <Link
            to="/contact"
            className="mr-5 cursor-pointer hover:text-[#4E43ED]"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
