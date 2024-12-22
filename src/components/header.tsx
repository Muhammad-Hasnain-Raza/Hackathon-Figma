import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { SheetSide } from "./sheet";



export default function header() {
  return (
    <div className="h-[55px] w-[full] bg-white flex justify-between items-center  md:mt-8 md:mb-8 md:ml-12 md:mr-8" >

      <div className="flex justify-start items-center">
        <SheetSide/>
        <h1 className='text-xl sm:text-3xl pl-2 font-bold '>SHOP.CO</h1>
      </div>

      <div>
        <ul className="hidden md:block">
          <li className="space-x-6">
            <Link href={""}>Shop</Link>
            <Link href={""}>On Sales</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <div className=' h-[48px] w-[577px] flex justify-start items-center rounded-[62px] bg-[#e4e2e2]'>
          <GoSearch className="text-xl ml-2"/>
          <input placeholder="Search for products" className="h-full w-full mr-3 outline-none rounded-full bg-[#e4e2e2]"/>
        </div>
      </div>

      <div className='flex items-center gap-[19px] mr-7'>
        <GoSearch className="text-xl ml-2 md:hidden "/>
        <FiShoppingCart className="text-2xl"/>
        <CgProfile className="text-2xl"/>
      </div>

    </div>
  )
}
