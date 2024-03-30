import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import page2_1 from "../img/page2-1.jpg";
import page2_2 from "../img/page2-2.jpg";
import page2_3 from "../img/page2-3.jpg";
import page2_4 from "../img/page2-4.png";
import page2_5 from "../img/page2-5.jpg";
import page2_6 from "../img/page2-6.jpg";
import page2_7 from "../img/page2-7.jpg";
import page2_8 from "../img/page2-8.jpg";
import page2_9 from "../img/page2-9.png";
import page2_10 from "../img/page2-10.jpg";

const cards = [
  {
    id: 1,
    img: page2_1,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 2,
    img: page2_2,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 3,
    img: page2_3,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 4,
    img: page2_4,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 5,
    img: page2_5,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 6,
    img: page2_6,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 7,
    img: page2_7,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 8,
    img: page2_8,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 9,
    img: page2_9,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
  {
    id: 10,
    img: page2_10,
    text: "Interal Door Oak Suffolk Prefinished",
    price: "120.00",
    salePrice: "100.00",
  },
];

const Page2 = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [rating, setRating] = useState(0);

  const handleMouseOver = (index) => {
    setRating(index + 1);
  };

  // const handleMouseLeave = () => {
  //   setRating(0);
  // };
  const handleClick = (index) => {
    if (rating === index + 1) {
      setRating(0);
    } else {
      setRating(index + 1);
    }
  };
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));

  return (
    <>
      <Header />
      <main>
        <div className="flex">
          <div className="flex justify-center pt-16">
            <img src={card.img} className="h-[70%]" alt="" />
          </div>
          <div className="flex flex-col pt-16">
            <h1 className="text-[32px] w-[60%] mb-4 font-bold text-blue-950">
              {card.text}
            </h1>
            <p className="text-[20px] font-[400px]">Incl: ${card.price}</p>
            <p className="text-[20px] font-[400px] text-gray-500">
              Excl: ${card.salePrice}
            </p>
            <p className="mb-4">
              {card.id % 2 === 0 ? "In Stock" : "Out Stock"}
            </p>
            <p className="text-[20px] w-[60%] mb-4">
              External / Internal Fire Door Hardwood Lipped Door Blank FD30
              (44mm){" "}
            </p>
            <label className="text-[20px] font-semibold">*Size:</label>
            <select className="w-[60%] outline-none border-2 py-2 focus:border-blue-400 mb-4">
              <option>--Please Select--</option>
              <option>1981 x 686 x 44mm (27")</option>
              <option>1981 x 762 x 44mm (30")</option>
              <option>2032 x 813 x 44mm (32")</option>
              <option>1981 x 838 x 44mm (33")</option>
            </select>
            <div className="w-[60%] border-2 flex justify-between px-1 py-2 focus-within:border-blue-400">
              <p>Qty</p>
              <input type="number" className="outline-none w-[80%]" />
            </div>

            <button className="w-[60%] bg-gray-300 text-[18px] py-4 my-4">
              Add to Wish list
            </button>
            <button className="w-[60%] bg-blue-600 text-[18px] py-4 text-white ">
              Add to Card
            </button>
          </div>
        </div>
        <div className="flex px-24">
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab1"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab2"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            Specification
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab3"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            Delivery
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab4"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab4")}
          >
            Returns
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab5"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab5")}
          >
            Size Quide
          </button>
          <button
            className={`px-4 py-2 focus:outline-none ${
              activeTab === "tab6"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick("tab6")}
          >
            Reviews
          </button>
        </div>
        <div className="mt-4 mb-12 px-28">
          <div className={`${activeTab === "tab1" ? "block" : "hidden"}`}>
            <div>
              <p className="mb-2 font-[400px]">
                External / Internal Fire Door Hardwood Lipped Door Blank FD30
                (44mm) - Call for Pallet Prices
              </p>
              <p className="mb-2 font-[400px]">
                Door supplied with 4 x lippings on all edges to protect against
                humidity{" "}
              </p>
              <p className="mb-2 font-[400px]">
                To be hung with 3 hinges, all edges to be protected using a
                suitable microporous external finish.
              </p>
              <p className="mb-2 font-[400px]">
                Protect from direct rain and humidity.{" "}
              </p>
              <p className="mb-2 font-[400px]">
                Hang on the interior part of the door frame only.
              </p>
              <p className="mb-2 font-[400px]">
                Requires 1 coat of primer and atleast 2 coats of top coat. - All
                4 edges must be fully sealed
              </p>
              <p className="m-2 text-[14px] font-thin">Hardwood</p>
              <p className="m-2 text-[14px] font-thin">Solid Core</p>
              <p className="m-2 text-[14px] font-thin">44mm</p>
              <p className="m-2 text-[14px] font-thin">Unfinished</p>
              <p className="m-2 text-[14px] font-thin">
                30 minutes fire protection (FD30 rating)
              </p>
            </div>
          </div>
          <div className={`${activeTab === "tab2" ? "block" : "hidden"}`}>
            <ul>
              <li className="flex justify-between w-[20%] py-2">
                <p className="font-bold text-blue-950">Manufacturer</p>
                <p> LPD Ltd</p>
              </li>
              <li className="flex justify-between w-[20%] py-2 bg-gray-100">
                <p className="font-bold text-blue-950">Wood Type</p>
                <p>Hardwood</p>
              </li>
              <li className="flex justify-between w-[20%] py-2">
                <p className="font-bold text-blue-950">Finish</p>
                <p>Untreated</p>
              </li>
              <li className="flex justify-between w-[20%] py-2 bg-gray-100">
                <p className="font-bold text-blue-950">Door Height</p>
                <p> 1981, 2040</p>
              </li>
            </ul>
          </div>
          <div className={`${activeTab === "tab3" ? "block" : "hidden"}`}>
            <div>
              <h1>DOORS</h1>
              <ul className="list-disc">
                <li>
                  <span className="font-bold text-blue-950">
                    Green & Yellow Zone Areas of the Delivery Map{" "}
                  </span>{" "}
                  - Delivery is £49 inc vat
                </li>
                <li>
                  Huddersfield Area Delivery will be Flat Rate £25.00 inc vat{" "}
                </li>
                <li>
                  <span className="font-bold text-blue-950">Orange Areas</span>{" "}
                  - postcodes WF / BD / LS & HX Flat Rate Delivery will be
                  £35.00
                </li>
                <li>
                  <span className="font-bold text-blue-950">
                    Blue areas on the map
                  </span>{" "}
                  - On a weight basis, £50 for the 1st item & £5 per additional
                  item. Maximum carriage £150.00
                </li>
                <li>
                  All product Description Codes with "XL" or "LPD" ordered and
                  paid for, before Monday 4 pm within the Green Area of the
                  Delivery Map (stock allowing) will be delivered the same week,
                  unless we have stated otherwise.
                </li>
              </ul>
              <ul className="list-disc list-inside list-lower-alpha">
                <li>
                  <span className="font-bold text-blue-950">
                    SPRAY FINISHING
                  </span>{" "}
                  For items that do not come pre finished and you have added pre
                  finishing to your order please add additional lead time of 15
                  working days. Any queries please contact Sales on Tel : 01484
                  643394.
                </li>
                <li>
                  <span className="font-bold text-blue-950">
                    Pre Hung Door sets
                  </span>{" "}
                  & High Performance Door sets lead time 14 working days approx.
                </li>
                <li>
                  <span className="font-bold text-blue-950">
                    Handles & Ironmongery orders (UK)
                  </span>
                  : Orders processed and paid for before 2pm are Standard next
                  day delivery. Orders over £150.00 FREE Standard UK delivery
                  next day.
                </li>
                <li>
                  Orders less than £150.00 carriage charge of £10 applies.
                </li>
              </ul>
            </div>
          </div>
          <div className={`${activeTab === "tab4" ? "block" : "hidden"}`}>
            <div className="">
              <p className="mt-2 text-gray-700">
                If you are not completely satisfied with your purchase, simply
                return the items to us in their original condition and packaging
                within 14 days of receipt and we will issue a full refund
                (excluding original delivery & Collection charge).
              </p>
              <p className="mt-2 text-gray-700">
                Doors cannot be returned under the 14 day rule once unpacked
                unless the product is faulty. Cancellation must be in writing or
                by e-mail.
              </p>
              <p className="mt-2 text-gray-700">
                If you have ordered a spray finish for your doors and this work
                is in process or finished we are unable to offer a refund.
              </p>
              <p className="mt-2 text-gray-700">
                If you have ordered a Pre Hung Door Set to your specification we
                are unable to offer a refund.
              </p>
            </div>
          </div>
          <div className={`${activeTab === "tab5" ? "block" : "hidden"}`}>
            <h1 className="text-[28px] text-blue-950">
              Internal Door Size Guide
            </h1>
            <ul>
              <li className="flex justify-between py-2 px-1 bg-blue-400 text-white font-bold ">
                <p className="w-[30%]">INCHES</p>
                <p className="w-[30%]">METRIC MM</p>
                <p className="w-[30%]">FEET & INCHES</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">(H)&(W)</p>
                <p className="w-[30%]">(H)&(W)</p>
                <p className="w-[30%]">(H)&(W)</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
            </ul>
            <h1 className="text-[28px] text-blue-950 mt-4">
              External Door Size Guide
            </h1>
            <ul>
              <li className="flex justify-between py-2 px-1 bg-blue-400 text-white">
                <p className="w-[30%]">INCHES</p>
                <p className="w-[30%]">METRIC MM</p>
                <p className="w-[30%]">FEET & INCHES</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">(H)&(W)</p>
                <p className="w-[30%]">(H)&(W)</p>
                <p className="w-[30%]">(H)&(W)</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[30%]">78 x 18</p>
                <p className="w-[30%]">1981 x 457 x 35mm</p>
                <p className="w-[30%]">6'6 x 1'6</p>
              </li>
            </ul>
            <h1 className="text-[28px] text-blue-950 mt-4">
              External La Porte French Doors
            </h1>
            <ul>
              <li className="flex justify-between py-2 px-1 bg-blue-400 text-white">
                <p className="w-[50%]">Extral Frame Size</p>
                <p className="w-[50%]">Brickwork Dimensions</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[50%]">4ft = 2074 x 1190 x 54mm</p>
                <p className="w-[50%]"> 2079 x 1195mm</p>
              </li>
              <li className="flex justify-between py-2 px-1 bg-gray-100">
                <p className="w-[50%]">5ft = 2074 x 1490 x 54mm</p>
                <p className="w-[50%]">2079 x 1495mm</p>
              </li>
              <li className="flex justify-between py-2 px-1">
                <p className="w-[50%]">6ft = 2074 x 1790 x 54mm</p>
                <p className="w-[50%]">2079 x 1795mm</p>
              </li>
            </ul>
          </div>
          <div className={`${activeTab === "tab6" ? "block" : "hidden"}`}>
            <div className="flex flex-col">
              <p className="font-bold text-blue-950 text-[18px] mt-4">
                You're Reviewing:
              </p>
              <p className="font-bold text-blue-950 text-[18px]">{card.text}</p>
              <p>Your Rating</p>
              <div className="flex">
                <p>Rating</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      key={index}
                      className={`h-4 w-4 cursor-pointer ${
                        index < rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onMouseOver={() => handleMouseOver(index)}
                      // onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(index)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <label>NickName</label>
              <input type="text" className="w-[40%] border-2" />
              <label>Summary</label>
              <input type="text" className="w-[40%] border-2" />
              <label>Review</label>
              <textarea rows="5" className="w-[40%] border-2"></textarea>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page2;
