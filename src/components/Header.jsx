import logo from "../img/logo.jpg";
import { useState } from "react";



const Header = () => {
  const li = "hover:text-blue-700 hover:scale-[1.1] transition";
  const hover_p = "hover:text-blue-800";
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-4 px-8 w-full md:px-36">
        <div className="flex gap-3 h-[100%] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 md:hidden"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <img
            src={logo}
            alt=""
            className="hidden md:block w-[110px] h-[75px]"
          />
        </div>
        <div className="hidden md:block">
                    <div className="flex border-b-2 border-b-blue-600 w-[400px] px-2 justify-between">
            <input type="text" placeholder="Search..." className="outline-none w-full"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            </div>
            </div>
        <ul className="flex items-center gap-4">
          <li className="border-b-2 border-blue-600 md:hidden flex">
            <input
              type="text"
              className="outline-none "
              placeholder="search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </li>
          {/* <li className="hidden md:block">
            <div className="flex">
            <input type="text" placeholder="Search..."/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            </div>
          </li> */}
          <li className="items-center flex flex-col ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="hidden md:block">Account</span>
          </li>
          <li className="items-center flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="hidden md:block">My Cart</span>
          </li>
        </ul>
      </header>
      <nav id="menu" className="bg-gray-100 text-gray-900 hidden lg:block">
        <ul className="grid grid-cols-3 lg:grid-cols-9 py-2 px-12">
          <li className={`group ${li}`}>
            Interal Doors
            <div className="absolute bg-white hidden group-hover:block text-gray-900 w-[91vw] px-8 ml-[-34px]">
              <ul className="grid grid-cols-4 pt-3">
                <li className="flex flex-col gap-5">
                <p className={hover_p}>Suitable for Trimming up to 32mm</p>
                <p className={hover_p}>Internal Oak Doors</p>
                <p className={hover_p}>Internal Gray Doors</p>
                <p className={hover_p}>Internal White Primed Doors</p>
                <p className={hover_p}>Internal White Prefinished Doors</p>
                <p className={hover_p}>Internal Laminate Doors</p>
                <p className={hover_p}>Sales Deals</p>
                </li>
                <li className="flex flex-col gap-5">
                <p className={hover_p}>LPD Doors</p>
                <p className={hover_p}>Internal Walnut Doors</p>
                <p className={hover_p}>Black Internal Doors</p>
                <p className={hover_p}>Internal Doors Special Offers</p>
                <p className={hover_p}>Acoustic Panel Pre finished</p>
                <p className={hover_p}>Internal Industrial Desing Doors</p>
                <p className={hover_p}>Internal Doors - Colors</p>
                </li>
                <li className="flex flex-col gap-5">
                <p className={hover_p}>Cheap Internal Doors</p>
                <p className={hover_p}>Solid Oak Internal Doors</p>
                <p className={hover_p}>Internal Glazed Doors</p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li className="flex flex-col gap-5">
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
              </ul>
            </div>
          </li>
          <li className={`group ${li}`}>
            Fire Doors
            <div className="absolute bg-white hidden group-hover:block text-gray-900">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </li>
          <li className={`group ${li}`}>
            Room Dividers
            <div className="absolute bg-white hidden group-hover:block text-gray-900">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </li>
          <li className={`group ${li}`}>
            Exteral Doors
            <div className="absolute bg-white hidden group-hover:block text-gray-900">
              <ul>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
              </ul>
            </div>
          </li>
          <li className={`${li}`}>Pocket Doors</li>
          <li className={`group ${li}`}>
            Architraves
            <div className="absolute bg-white hidden group-hover:block text-gray-900">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </li>
          <li className={`${li}`}>French Doors</li>
          <li className={`group ${li}`}>
            Ironmongery
            <div className="absolute bg-white hidden group-hover:block text-gray-900">
              <ul>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
                <li>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                <p className={hover_p}></p>
                </li>
              </ul>
            </div>
          </li>
          <li className={`${li}`}>Spray Finishing</li>
        </ul>
      </nav>
      {isMenuOpen && (
        <nav className="bg-gray-100 text-gray-900">
          <ul className="grid grid-cols-3 py-2 px-5 ">
            <li className={`group ${li} `}>
              Interal Doors
            </li>
            <li className={`group ${li} `}>
              Fire Doors
            </li>
            <li className={`group ${li} `}>
              Room Dividers
            </li>
            <li className={`group ${li} `}>
              Exteral Doors
            </li>
            <li className={`group ${li} `}>
              Pocket Doors
            </li>
            <li className={`group ${li} `}>
              Architraves
            </li>
            <li className={`group ${li} `}>
              French Doors
            </li>
            <li className={`group ${li} `}>
              Ironmongery
            </li>
            <li className={`group ${li} `}>
              Spray Finishing
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
