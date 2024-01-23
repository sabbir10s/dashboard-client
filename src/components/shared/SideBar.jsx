import { BiCategory } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";
import { RiLayoutGridFill } from "react-icons/ri";
import CustomLink from "../../components/shared/CustomLink";

const SideBar = ({ handleCloseSidebar }) => {
  return (
    <div className="fixed w-64 h-full bg-white">
      <div className=" mt-6 mb-14 pl-12">
        <picture>
          <img
            className="w-32 h-auto"
            src="https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
            alt="company logo"
          />
        </picture>
      </div>
      <div className="flex flex-col">
        <CustomLink onClick={handleCloseSidebar} to="/">
          {" "}
          <button className="flex items-center gap-2">
            <RiLayoutGridFill className="text-xl" /> <span>Dashboard</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/products">
          <button className="flex items-center gap-2">
            <HiShoppingBag className="text-xl" /> <span>Products</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/category">
          <button className="flex items-center gap-2">
            <BiCategory className="text-xl" /> <span>Category</span>
          </button>
        </CustomLink>
      </div>
    </div>
  );
};

export default SideBar;
