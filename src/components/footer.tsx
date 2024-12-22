import { FiFacebook, FiInstagram, FiTwitter, } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="font-sans">

<section className="my-10">

  <h2 className="text-2xl font-bold mb-6 px-4 lg:px-0 lg:leading-tight lg:whitespace-nowrap lg:text-left text-center lg:m-20"><span className="block lg:inline">OUR HAPPY CUSTOMERS</span></h2>
  <div className="flex flex-wrap justify-around gap-6 px-4">
    {[
      {
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co...",
      },
      {
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge...",
      },
      {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces...",
      },
    ].map((review, index) => (
      <div
        key={index}
        className="w-full max-w-sm bg-gray-100 p-5 rounded-lg shadow-md"
      >
        <span className="text-yellow-400 text-xl">★★★★★</span>
        <h3 className="font-semibold mt-2">{review.name} ✅ </h3>
        <p className="text-sm mt-3">{review.text}</p>
      </div>
    ))}
  </div>
  
</section>


<div className="bg-black text-white p-4 rounded-lg mx-8 my-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">

    <h2 className="text-lg font-bold text-center md:text-left mb-4 md:mb-0 leading-tight">
      STAY UPTO DATE <br /> ABOUT OUR LATEST OFFERS
    </h2>

    <div className="flex flex-col items-center md:items-start w-full md:w-3/4">
      <input
        type="email"
        placeholder="Enter your email address"
        className="p-2 rounded-full w-full text-black mb-4"
      />
      <button className="bg-white text-black font-bold px-6 py-2 rounded-full w-full">
        Subscribe to Newsletter
      </button>
    </div>
  </div>
</div>


<footer className="bg-gray-100 p-6">
  <div className="w-full flex flex-wrap sm:flex-nowrap justify-around gap-6 text-sm">

    <div className="w-full sm:w-auto space-y-4">
      <h3 className="font-[700] text-[33px]">SHOP.CO</h3>
      <p className="font-[400] text-[16px] text-gray-500 w-[180px]">
        We have clothes that suit your style and which you're proud to wear.
      </p>
      <div className="flex justify-start gap-4 text-xl mt-2">
        <FiFacebook />
        <FiInstagram />
        <FiTwitter />
        <FaGithub />
      </div>
    </div>

    <div className="w-full grid grid-cols-2 gap-y-6 gap-x-6 sm:flex sm:justify-around sm:gap-x-12 sm:gap-y-0">
      <div className="space-y-4">
        <h4 className="font-[500] text-[16px] mb-2">COMPANY</h4>
        <ul className="text-gray-500 font-[400] text-[16px] space-y-2">
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-[500] text-[16px] mb-2">HELP</h4>
        <ul className="text-gray-500 font-[400] text-[16px] space-y-2">
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-[500] text-[16px] mb-2">FAQ</h4>
        <ul className="text-gray-500 font-[400] text-[16px] space-y-2">
          <li>Account</li>
          <li>Manage Deliveries</li>
          <li>Orders</li>
          <li>Payments</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-[500] text-[16px] mb-2">RESOURCES</h4>
        <ul className="text-gray-500 font-[400] text-[16px] space-y-2">
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li>How to - Blog</li>
          <li>YouTube Playlist</li>
        </ul>
      </div>
    </div>
  </div>
  <hr className="w-full mt-6" />
  <p className="mt-4 text-xs ">Shop.co © 2000-2023, All Rights Reserved</p>
</footer>

    </div>
  );
}
