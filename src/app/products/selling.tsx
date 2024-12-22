import { FaStar } from "react-icons/fa";
import Image from "next/image";

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
}

let product:Iproducts[]=[
    {
        title:"VERTICAL STRIPED SHIRT",
        id:1,
        price:"$212",
        img_url:"/productA.png",
        old_price:"$232"
    },
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:1,
        price:"$145",
        img_url:"/productB.png"
    },
    {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:1,
        price:"$80",
        img_url:"/productC.png"
    },
    {
        title:"FADED SKINNY JEANS",
        id:1,
        price:"$210",
        img_url:"/productD.png"
    }
]

let star = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />]




export default function Products() {
  return (
    <div className="w-[full] h-[500px] mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
        <div className="mt-10">
            
            {/* Mobile View: Horizontal Scroll */}
            <div className="flex lg:hidden overflow-x-auto space-x-4 px-4 scrollbar-hide">
                {product.map((data, index) => (
                    <div key={index} className="flex-shrink-0 w-[230px] h-auto bg-[#F0EEED] rounded-[20px]">
                        <div className="w-full h-[230px] bg-[#F0EEED] rounded-[20px]">
                            <Image src={data.img_url} alt={data.title} width={230} height={230} className="w-full h-full rounded-[20px] object-cover"/>
                        </div>
                        <div>
                            <p className="text-lg mt-2 font-bold">{data.title}</p>
                            <p className="flex text-yellow-400">{star}</p>
                            <p className="font-bold mt-1">{data.price}{" "} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                        </div>
                    </div>
                 ))}
            </div>

            {/* Laptop View: Grid */}
            <div className="hidden lg:flex justify-between px-8">
                {product.map((data, index) => (
                    <div key={index}>
                        <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                            <Image src={data.img_url} alt={data.title} width={230} height={230} className="w-full h-full rounded-[20px] object-cover"/>
                        </div>
                        <div>
                            <p className="text-lg mt-2 font-bold">{data.title}</p>
                            <p className="flex text-yellow-400">{star}</p>
                            <p className="font-bold mt-1">{data.price}{" "} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-6">
                <button className="border rounded-[16px] w-[218px] h-[42px] border-gray-500">View All</button>
            </div>

        </div>
    </div>
  )
}
