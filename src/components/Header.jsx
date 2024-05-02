import logo from "../img/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const Header = () => {
  const li = "hover:text-blue-700 hover:scale-[1.1] transition";
  const hover_p = "hover:text-blue-800";
  const [isMenuOpen, setMenuOpen] = useState(false);
  const DoorData = [
    {
      id: 1,
      title: 'Damsel',
      link:''
},
    {
      id: 2,
      title: 'Orion and the Dark',
      link:''
},
    {
      id: 3,
      title: 'Lift',
      link:''
},
    {
      id: 4,
      title: 'Sixty Minutes',
      link:''
},
    {
      id: 5,
      title: 'Badland Hunters',
      link:''
},
    {
      id: 6,
      title: 'Code 8: Part II',
      link:''
},
    {
      id: 7,
      title: 'LightsOut',
      link:''
},
    {
      id: 8,
      title: 'Checkmate',
      link:''
},
    {
      id: 9,
      title: 'Bitconned',
      link:''
},
    {
      id: 10,
      title: 'Five Blind Dates',
      link:''
},
    {
      id: 11,
      title: 'This Is Me... Now',
      link:''
},
    {
      id: 12,
      title: 'Spider Man: Homecoming',
      link:''
},
    {
      id: 13,
      title: 'Spider Man: No Way Home',
      link:'/page/card/6'
},
    {
      id: 14,
      title: 'Amazing Spiderman',
      link:'/page/card/2'
},
    {
      id: 15,
      title: 'Spider Man(2002)',
      link:'/page/card/5'
},
    {
      id: 16,
      title: 'Spider Man 2',
      link:'/page/card/4'
},
    {
      id: 17,
      title: 'The Heartbreak Agency',
      link:'/page/card/3'
},
    {
      id: 18,
      title: 'My Name Is Loh Kiwan',
      link:'/page/card/1'
}
  ]

  return (
    <div >
      <header className="flex items-center justify-between py-4 px-8 w-full md:px-36 z-30">
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
          <Link to={"/"}>
            <img
              src={logo}
              alt=""
              className="hidden md:block w-[110px] h-[75px]"
            />
          </Link>
        </div>
        <div className="hidden md:block">
        <SearchBar placeholder={'Search Door...'} data={DoorData}/>
        </div>
        <ul className="flex items-center gap-4">
          <li className="z-50 border-b-2 border-blue-600 md:hidden flex">
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
          {/* <li className="z-50 hidden md:block">
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
          <li className="z-50 items-center flex flex-col ">
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
          <li className="z-50 items-center flex flex-col">
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
      <nav id="menu" className="bg-gray-100 text-gray-900 hidden lg:block z-5">
        <ul className="grid grid-cols-3 lg:grid-cols-9 py-2 px-12">
          <li className={`group ${li} z-50`}>
            <Link to={`/page/1`}>
              Interal Doors
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50  text-gray-900 w-[90vw] px-8 ml-[-34px]">
              <ul className="grid grid-cols-4 py-3">
                <li className="z-50 flex flex-col gap-2">
                  <p className={hover_p}>
                  Suitable for Trimming up to 32mm
                  </p>
                  <p className={hover_p}>Internal Oak Doors</p>
                  <p className={hover_p}>Internal Gray Doors</p>
                  <p className={hover_p}>Internal White Primed Doors</p>
                  <p className={hover_p}>Internal White Prefinished Doors</p>
                  <p className={hover_p}>Internal Laminate Doors</p>
                  <p className={hover_p}>Sales Deals</p>
                </li>
                <li className="z-50 flex flex-col gap-2">
                  <p className={hover_p}>LPD Doors</p>
                  <p className={hover_p}>Internal Walnut Doors</p>
                  <p className={hover_p}>Black Internal Doors</p>
                  <p className={hover_p}>Internal Doors Special Offers</p>
                  <p className={hover_p}>Acoustic Panel Pre finished</p>
                  <p className={hover_p}>Internal Industrial Desing Doors</p>
                  <p className={hover_p}>Internal Doors - Colors</p>
                </li>
                <li className="z-50 flex flex-col gap-2">
                  <p className={hover_p}>Cheap Internal Doors</p>
                  <p className={hover_p}>Solid Oak Internal Doors</p>
                  <p className={hover_p}>Internal Glazed Doors</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li className="z-50 flex flex-col gap-2">
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
              </ul>
            </div>
          </li>
          <li className={`group ${li} z-50 `}>
            <Link to={'/page/2'}>
            Fire Doors
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50 w-[30vw] text-gray-900">
              <ul className="z-50 flex flex-col gap-2 pl-4 py-2">
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
              </ul>
            </div>
          </li>
          <li className={`group ${li} z-50 `}>
            <Link to={'/page/3'}>
            Room Dividers
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50 w-[30vw] text-gray-900">
              <ul className="z-50 flex flex-col gap-2 pl-4 py-2" >
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
                <li className={hover_p}>text</li>
              </ul>
            </div>
          </li>
          <li className={`group ${li} z-50 `}>
            <Link to={'/page/4'}>
            Exteral Doors
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50  w-[90vw] ml-[-470px] text-gray-900">
              <ul className="grid grid-cols-4 px-12 py-2">
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
              </ul>
            </div>
          </li>
          <li className={`${li}`}>
            <Link to={'/page/5'}>
          Pocket Doors
          </Link>
          </li>
          <li className={`group ${li} z-50 `}>
            <Link to={'/page/6'}>
            Architraves
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50 w-full text-gray-900">
              <ul className="z-50 flex flex-col gap-2 pl-4 py-2">
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </li>
          <li className={`${li}`}>
            <Link to={'/page/7'}>
          French Doors
          </Link>
          </li>
          <li className={`group ${li} z-50 `}>
            <Link to={'/page/8'}>
            Ironmongery
            </Link>
            <div className="absolute bg-white hidden group-hover:block z-50  w-[90vw] ml-[-1050px] text-gray-900">
              <ul className="z-50 grid grid-cols-4 gap-2 px-12 py-2">
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
                <li>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                  <p className={hover_p}>text</p>
                </li>
              </ul>
            </div>
          </li>
          <Link to={'/spray-finishes'}>
          <li className={`${li}`}>
          Spray Finishing
          </li>
          </Link>
        </ul>
      </nav>
      {isMenuOpen && (
        <nav className="bg-gray-100 text-gray-900 z-5">
          <Link to={'/'}>
            <p className="text-[22px] w-fit px-5 hover:text-blue-700 hover:scale-[1.1] transition">Home</p>
            </Link>
          <ul className="grid grid-cols-3 py-2 px-5 ">
          <Link to={'/page/1'}>
            <li className={`group ${li} `}>Interal Doors</li>
            </Link>
            <Link to={'/page/2'}>
            <li className={`group ${li} `}>Fire Doors</li>
            </Link>
            <Link to={'/page/3'}>
            <li className={`group ${li} `}>Room Dividers</li>
            </Link>
            <Link to={'/page/4'}>
            <li className={`group ${li} `}>Exteral Doors</li>
            </Link>
            <Link to={'/page/5'}>
            <li className={`group ${li} `}>Pocket Doors</li>
            </Link>
            <Link to={'/page/6'}>
            <li className={`group ${li} `}>Architraves</li>
            </Link>
            <Link to={'/page/7'}>
            <li className={`group ${li} `}>French Doors</li>
            </Link>
            <Link to={'/page/8'}>
            <li className={`group ${li} `}>Ironmongery</li>
            </Link>
            <Link to={'/spray-finishes'}>
            <li className={`group ${li} `}>Spray Finishing</li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
