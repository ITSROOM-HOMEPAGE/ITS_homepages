import { Link } from "react-router-dom";
export default function PageHeader() {
  // ```
  // {
  //     'border-[#4E43ED] border-b-2 text-[#4E43ED]':
  //         routePath === '/about',
  // },
  // ```;
  console.log("qwe");
  console.log("qweqwewq");
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-[1300px] flex items-center h-20 text-[20px] font-PretendSemiBold justify-between">
          <div>
            <img src="./logo192.png" className="w-[80px]" />
          </div>
          <div className="ml-auto flex h-full">
            <Link
              className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
              to="/about"
            >
              About
            </Link>
            <Link
              className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
              to="/solution"
            >
              Solution
            </Link>
            <Link
              className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
              to="/team"
            >
              Team
            </Link>
            <Link
              className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
              to="/recruit"
            >
              Recruit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
