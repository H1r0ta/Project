import Slider from "react-slick";
import { useState } from "react";
import Header from "../components/Header";
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider03.jpg";
import slider4 from "../img/slider04.jpg";
import leftTop from "../img/left-get_1.png";
import rightTop from "../img/right-top.jpg";
import leftBottom from "../img/left-bottom.png";
import rightBottom from "../img/right-bottom.png";
import centerBottom from "../img/center-bottom.png";
import centerTop from "../img/center-top.jpg";
import centerMiddle from "../img/center-middle.jpg";
import card1_1 from "../img/card-1.png";
import card1_2 from "../img/card-2.png";
import card1_3 from "../img/card-3.png";
import Arrow from "../components/Arrow";
import card2_1 from "../img/card2-1.jpg";
import card2_2 from "../img/card2-2.png";
import card2_3 from "../img/card2-3.png";
import card2_4 from "../img/card2-4.jpg";
import card2_5 from "../img/card2-5.jpg";
import img from "../img/about-img_1.png";
import card4_1 from "../img/card4_1.png";
import card4_2 from "../img/card4_2.jpg";
import card4_3 from "../img/card4_3.jpg";
import card4_4 from "../img/card4_4.jpg";
import card4_5 from "../img/card4_5.png";
import { Footer } from "../components/Footer";


let Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide1, setCurrentSlide1] = useState(0);

  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let grid = [
    {
      id: 1,
      img: leftTop,
      text: 'Interal Black Doors',
      col: 2,
      row: 2,
    },
    {
      id: 2,
      img: centerTop,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
    {
      id: 3,
      img: rightTop,
      text: 'Interal Black Doors',
      col: 2,
      row: 1,
    },
    {
      id: 4,
      img: centerMiddle,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
    {
      id: 5,
      img: rightBottom,
      text: 'Interal Black Doors',
      col: 2,
      row: 2,
    },
    {
      id: 6,
      img: leftBottom,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
    {
      id: 7,
      img: centerBottom,
      text: 'Interal Black Doors',
      col: 2,
      row: 1,
    },
  ];
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    appendDots: (dots) => (
      <div className="flex justify-center">
        <ul className="flex justify-between gap-2 w-[4%] ml-[40%]"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`h-4 rounded-full hover:bg-blue-600 ${
          i === currentSlide ? "bg-blue-600 w-8" : "bg-gray-400 w-4"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide1(index),
    appendDots: (dots) => (
      <div className="flex justify-center">
        <ul className="flex justify-between gap-2 w-[4%] ml-[40%]"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`h-4 rounded-full hover:bg-blue-600 ${
          i === currentSlide1 ? "bg-blue-600 w-8" : "bg-gray-400 w-4"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let grid1 = [
    {
      id: 1,
      img: leftTop,
      text: 'Interal Black Doors',
      col: 2,
      row: 2,
    },
    {
      id: 2,
      img: centerTop,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
    {
      id: 3,
      img: centerMiddle,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },

    {
      id: 4,
      img: leftBottom,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
    {
      id: 5,
      img: centerBottom,
      text: 'Interal Black Doors',
      col: 2,
      row: 1,
    },
    {
      id: 6,
      img: rightTop,
      text: 'Interal Black Doors',
      col: 2,
      row: 1,
    },
    {
      id: 7,
      img: rightBottom,
      text: 'Interal Black Doors',
      col: 1,
      row: 1,
    },
  ];
  const card = [
    {
      id: 1,
      img: card1_1,
      text: "What's new" ,
      text2: "See what has just arrived with us" ,
    },
    {
      id: 2,
      img: card1_2,
      text: "Spray Finishes" ,
      text2: "We Offer High Quality Spray Finishes" ,
    },
    {
      id: 3,
      img: card1_3,
      text: "Besboke Doors" ,
      text2: "Middle of the road prices",
    },
  ];
  const card2 = [
    {
      id: 1,
      img: card2_1,
      text: "Interal Door Oak Parlemo Prefinished" ,
      price: "144.00",
      salePrice: "120.00",
    },
    {
      id: 2,
      img: card2_2,
      text: "Interal Door Oak Suffolk Essential" ,
      price: "170.00",
      salePrice: "148.68",
    },
    {
      id: 3,
      img: card2_3,
      text:  "Interal Door Oak Suffolk Prefinished" ,
      price: "120.00",
      salePrice: "100.00",
    },
    {
      id: 4,
      img: card2_4,
      text: "Interal Door Oak Parlemo Essential" ,
      price: "95.00",
      salePrice: "75.17",
    },
    {
      id: 5,
      img: card2_5,
      text: "Ely Primed White Internal Door" ,
      price: "79.60",
      salePrice: "65.50",
    },
  ];
  const card3 = [
    {
      id: 1,
      text:  "Tom Hiddelson" ,
      text2:
        "Thank you for your hard work and support for the development of the application and all of the applications projects that depend on it...",
    },
    {
      id: 2,
      text:  "Mr Smith" ,
      text2:
        "Thank you for your hard work and support for the development of the application and all of the applications projects that depend on it...",
    },
    {
      id: 3,
      text:  "Mr Day" ,
      text2:
        "Thank you for your hard work and support for the development of the application and all of the applications projects that depend on it...",
    },
    {
      id: 4,
      text:  "John Doe" ,
      text2:
        "Thank you for your hard work and support for the development of the application and all of the applications projects that depend on it...",
    },
    {
      id: 5,
      text:  "Linda" ,
      text2:
        "Thank you for your hard work and support for the development of the application and all of the applications projects that depend on it...",
    },
  ];

  const card4 = [
    {
      id: 1,
      img: card4_1,
      text:  "Tom Hiddelson" ,
      text2: "Top 10 Interal Doors",
    },
    {
      id: 2,
      img: card4_2,
      text:   "Mr Smith" ,
      text2: "Cold Weather Home Renovation Tips",
    },
    {
      id: 3,
      img: card4_3,
      text:  "John Doe" ,
      text2: "Maximise Your Space in Time for Christmas",
    },
    {
      id: 4,
      img: card4_4,
      text:  "James Wood"  ,
    text2: "Sound Proofing on Budget",    },
    {
      id: 5,
      img: card4_5,
      text:  "Linda"   ,
    text2: "Measuring An Internal Door",    },
  ];
  return (
    <>
    <div className="col-span-1 row-span-2"></div>
    <div className="col-span-2 row-span-1"></div>
    <div className="col-span-3 row-span-3"></div>
      <Header />
      <div className="slider-container w-[95%]">
        <Slider {...settings}>
          <div>
            <img src={slider1} alt="" />
          </div>
          <div>
            <img src={slider2} alt="" />
          </div>
          <div>
            <img src={slider3} alt="" />
          </div>
          <div>
            <img src={slider4} alt="" />
          </div>
        </Slider>
      </div>
      <div>
        <h1 className="text-center my-10 text-blue-950 text-[32px] lg:text-[52px] font-bold">
          Get Inspired
        </h1>
        <div className="lg:grid hidden grid-cols-5 grid-rows-3 gap-14 px-14">
          {grid.map((el) => {
            return (
              <div
                key={el.id}
                className={`bg-gray-200 min-h-[100px] min-w-[100px] pb-4 hover:scale-105 hover:shadow-xl shadow-md duration-[400ms] col-span-${el.col} row-span-${el.row}`}
              >
                <img src={el.img} alt="" className={`h-[90%] w-[100%] pb-3`} />
                <p className="font-semibold h-[10%] ml-4">{el.text}</p>
              </div>
            );
          })}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-x-8 gap-y-4 px-20">
          {grid1.map((el) => {
            return (
              <div
                key={el.id}
                className={`bg-gray-200 min-h-[100px] min-w-[100px] pb-4 hover:scale-105 hover:shadow-xl shadow-md duration-[400ms] col-span-${el.col} row-span-${el.row}`}
              >
                <img src={el.img} alt="" className={`h-[90%] w-[100%] pb-3`} />
                <p className="font-semibold h-[10%] ml-4">{el.text}</p>
              </div>
            );
          })}
        </div>
        <div className="md:hidden grid grid-cols-1 grid-rows-7 gap-14 px-14">
          {grid.map((el) => {
            return (
              <div
                key={el.id}
                className={`bg-gray-200 pb-4 max-h-[300px] hover:scale-105 hover:shadow-xl shadow-md duration-[400ms]`}
              >
                <img src={el.img} alt="" className={`h-[90%] w-[100%] pb-3`} />
                <p className="font-semibold h-[10%] ml-4">{el.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 my-5 py-8 lg:px-44">
        <div className="grid md:grid-cols-3 gap-5 px-5">
          {card.map((el) => {
            return (
              <div
                key={el.id}
                className="px-6 py-4 bg-white hover:scale-105 hover:shadow-lg duration-300 flex flex-col text-center items-center mx-auto"
              >
                <img src={el.img} alt="" />
                <h1>{el.text}</h1>
                <p>{el.text2}</p>
                <Arrow text='Learn more'/>
              </div>
            );
          })}
        </div>
        <p className="font-bold lg:text-[72px] text-[52px] text-center text-blue-950">
          The Most Popular Doors
        </p>
        <div className="slider-container w-[90%] py-12 mx-auto">
          <Slider {...settings1}>
            {card2.map((el) => {
              return (
                <div
                  className="card bg-white ml-14 mb-4 pb-4 max-w-[65%] hover:shadow-2xl scale-[1.01] text-center"
                  key={el.id}
                >
                  <img src={el.img} alt="" />
                  <p className="mx-4 md:text-xl sm:text-sm font-bold text-blue-950 hover:text-blue-700">
                    {el.text}
                  </p>
                  <p className="flex flex-col text-xs md:text-base text-black font-semibold">
                    Incl. VAT: ${el.price}
                    <span className="text-gray-400">
                      Excl. VAT: ${el.salePrice}
                    </span>
                  </p>
                  <button className="flex items-center mx-auto mt-2 bg-blue-400 hover:bg-blue-800 text-white px-10 py-4">
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-blue-950 py-4">
        <div className="lg:w-[50%] px-16 lg:px-32 gap-8 flex flex-col">
          <h1 className="text-[45px] font-bold">
            About Oakwood Doors & Spray Finishes Ltd
          </h1>
          <p>
            Here at Oakwood Doors and Spray Finishes, we are driven by our
            mission to sell quality internal and external doors at competitive
            prices. We are a family run business with a straight forward
            customer care service and support; we treat our customers as we
            ourselves would wish to be treated.
          </p>
          <p>
            We have been based in Huddersfield, west Yorkshire, where our Sales
            Director, Mandie and Managing Director, Nicholas started up in May
            2006. Testimony to the above is our ever growing number of loyal
            customers that continue to use our services for all their door
            requirements time after time and actively recommend us to friends,
            family and industry associates.
          </p>
          <button className="flex items-center w-fit mt-2 bg-blue-400 hover:bg-blue-800 text-white px-10 py-4">
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className=" lg:w-[50%] px-16 lg:px-0 py-4 lg:py-0">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="h-52 w-full bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200"></div>
      <div className="slider-container w-[90%] py-12 mx-auto mt-[-90px]">
        <Slider {...settings2}>
          {card3.map((el) => {
            return (
              <div className="card max-w-fit md:ml-20 px-4 py-4 mb-8 flex flex-col text-center bg-white rounded-3xl hover:shadow-lg duration-700" key={el.id}>
                                <h1 className="text-lg">{el.text}</h1>
                <div className="stars text-yellow-400 my-4 flex mx-auto max-w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="mt-8">{el.text2}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      <h1 className="text-center font-bold lg:text-[72px] text-[52px] text-blue-950">Our blog</h1>
      <p className="text-center text-blue-950">Keep up to date with our latest blog and event</p>
      <div className="slider-container w-[90%] py-12 mx-auto">
      <Slider {...settings3}>
        {card4.map((el) => {
          return(
            <div className="card lg:max-w-[70%] lg:ml-28 px-8 py-4 mb-8 relative flex flex-col text-center bg-gray-200 hover:shadow-2xl duration-[400ms]" key={el.id}>
              <img src={el.img} className="h-[200px] w-[200px] mx-auto z-0" alt="" />
              <div className="w-12 text-white z-50 mt-[-40px] bg-blue-500 relative">14 Mar</div>
              <h1 className="text-start my-4">{el.text}</h1>
              <h1 className="text-[24px] font-semibold">{el.text2}</h1>
              <Arrow text='Learn more'/>
            </div>
          )
        })}
      </Slider>
      </div>
      <Footer/>
    </> 
  );
};

export default Home;
