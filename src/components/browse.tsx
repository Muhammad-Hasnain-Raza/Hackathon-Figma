import Image from "next/image";

export default function Browse() {
    return (
      <div className=" min-h-screen flex justify-center items-center ">
       
        <div className="bg-gray-100 w-full max-w-[850px] h-[500px] rounded-lg shadow-lg p-4">
         
          <h1 className="text-center text-2xl font-extrabold mb-8">BROWSE BY DRESS STYLE</h1>
  
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-10 h-[calc(100%-50px)]">
         
            <div className="lg:col-span-3 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src={"/casual.png"} alt={"casual"} width={200} height={200} className="w-full h-full object-cover"/>
            </div>
  
            <div className="lg:col-span-7 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src={"/formal.png"} alt={"formal"} width={200} height={200} className="w-full h-full object-cover"/>
            </div>
  
            <div className="lg:col-span-7 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src={"/party.png"} alt={"party"} width={200} height={200} className="w-full h-full object-cover"/>
            </div>
  
            <div className="lg:col-span-3 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src={"/gym.png"} alt={"gym"} width={200} height={200} className="w-full h-full object-cover"/>
            </div>

          </div>
        </div>

      </div>
    );
  }
  