import Slider from "react-slick";
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

export default function SimpleSlider() {
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
      text: "Interal Black Doors",
      collg: "2",
      rowlg: "2",
    },
    {
      id: 2,
      img: centerTop,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },
    {
      id: 3,
      img: rightTop,
      text: "Interal Black Doors",
      col: "2",
      row: "1",
    },
    {
      id: 4,
      img: centerMiddle,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },
    {
      id: 5,
      img: rightBottom,
      text: "Interal Black Doors",
      col: "2",
      row: "2",
    },
    {
      id: 6,
      img: leftBottom,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },
    {
      id: 7,
      img: centerBottom,
      text: "Interal Black Doors",
      col: "2",
      row: "1",
    },
  ];

  let grid1 = [
    {
      id: 1,
      img: leftTop,
      text: "Interal Black Doors",
      col: "2",
      row: "2",
    },
    {
      id: 2,
      img: centerTop,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },
    {
      id: 3,
      img: centerMiddle,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },

    {
      id: 4,
      img: leftBottom,
      text: "Interal Black Doors",
      col: "1",
      row: "1",
    },
    {
      id: 5,
      img: centerBottom,
      text: "Interal Black Doors",
      col: "2",
      row: "1",
    },
    {
      id: 6,
      img: rightTop,
      text: "Interal Black Doors",
      col: "3",
      row: "1",
    },
    {
      id: 7,
      img: rightBottom,
      text: "Interal Black Doors",
      col: "3",
      row: "1",
    },
  ];
  const card = [
    {
      id: 1,
      img: card1_1,
      text: "What's new",
      text2: "See what has just arrived with us",
    },
    {
      id: 2,
      img: card1_2,
      text: "Spray Finishes",
      text2: "We Offer High Quality Spray Finishes",
    },
    {
      id: 3,
      img: card1_3,
      text: "BESPOKE DOORS",
      text2: "Middle of the road prices",
    },
  ];

  return (
    <>
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
        <div className="lg:grid hidden grid-cols-5 grid-rows-3 gap-x-8 gap-y-8 px-32">
        {grid.map((element) => {
            return (
              <div
                key={element.id}
                className={`row-span-${element.row} col-span-${element.col} bg-gray-200 pb-4 hover:scale-105 duration-200 hover:shadow-lg`}
              >
                <img
                  src={element.img}
                  alt=""
                  className={`h-[90%] w-[100%] pb-3`}
                />
                <p className="font-semibold h-[10%] ml-4">{element.text}</p>
              </div>
            );
          })}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-x-8 gap-y-4 px-20">
          {grid1.map((el) => {
            return (
              <div
                key={el.id}
                className={`row-span-${el.row} col-span-${el.col} bg-gray-200 pb-4 hover:scale-105 duration-200 hover:shadow-lg`}
              >
                <img src={el.img} alt="" className={`h-[90%] w-[100%] pb-3`} />
                <p className="font-semibold h-[10%] ml-4">{el.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 my-5 py-8 lg:px-44">
        <div className="grid md:grid-cols-3 gap-5">
          {card.map((el) => {
            return (
              <div
                key={el.id}
                className="px-6 py-4 bg-white hover:scale-105 hover:shadow-lg duration-300"
              >
                <img src={el.img} alt="" />
                <h1>{el.text}</h1>
                <p>{el.text2}</p>
                <Arrow />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
