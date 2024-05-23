import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import img from "../img/sprayfinish.png";
import img1 from "../img/img2.jpg";
import { Link } from "react-router-dom";
import page1_1_1 from "../img/page1-1-2.png";
import page1_1_2 from "../img/page1-1-4.png";
import page1_1_3 from "../img/page1-1-6.png";
import page1_1_4 from "../img/page1-1-7.png";
import page1_1_5 from "../img/page1-1-8.png";
import page1_1_6 from "../img/page1-1-9.jpg";
import page1_1_7 from "../img/page1-1-10.jpg";
import page1_2_1 from "../img/page1-2-1.jpg";
import page1_2_2 from "../img/page1-2-2.jpg";
import page1_2_3 from "../img/page1-2-3.jpg";
import page1_2_4 from "../img/page1-2-4.jpg";
import page1_2_5 from "../img/page1-2-5.jpg";
import page1_2_6 from "../img/page1-2-6.jpg";
import page1_2_7 from "../img/page1-2-7.jpg";
import page1_2_8 from "../img/page1-2-8.jpg";
import page1_2_9 from "../img/page1-2-9.jpg";
import page1_2_10 from "../img/page1-2-10.jpg";
import page1_3_1 from "../img/page1-3-1.jpg";
import page1_3_2 from "../img/page1-3-2.jpg";
import page1_3_3 from "../img/page1-3-3.jpg";
import page1_4_1 from "../img/page1-4-1.png";
import page1_4_2 from "../img/page1-4-2.jpg";
import page1_4_3 from "../img/page1-4-3.png";
import page1_4_4 from "../img/page1-4-4.png";
import page1_4_5 from "../img/page1-4-5.png";
import page1_4_6 from "../img/page1-4-6.png";
import page1_4_7 from "../img/page1-4-7.jpg";
import page1_4_8 from "../img/page1-4-8.png";
import page1_4_9 from "../img/page1-4-9.png";
import page1_4_10 from "../img/page1-4-10.png";
import page1_5_1 from "../img/page1-5-1.jpg";
import page1_5_2 from "../img/page1-5-2.jpg";
import page1_5_3 from "../img/page1-5-3.jpeg";
import page1_5_4 from "../img/page1-5-4.jpg";
import page1_5_5 from "../img/page1-5-5.jpg";
import page1_5_6 from "../img/page1-5-6.jpeg";
import page1_6_1 from "../img/page1-6-1.jpg";
import page1_6_2 from "../img/page1-6-2.jpg";
import page1_6_3 from "../img/page1-6-3.jpg";
import page1_6_4 from "../img/page1-6-4.jpg";
import page1_6_5 from "../img/page1-6-5.jpg";
import page1_6_6 from "../img/page1-6-6.jpg";
import page1_6_7 from "../img/page1-6-7.jpg";
import page1_6_8 from "../img/page1-6-8.jpg";
import page1_6_9 from "../img/page1-6-9.jpeg";
import page1_6_10 from "../img/page1-6-10.jpg";
import page1_7_1 from "../img/page1-7-1.png";
import page1_7_2 from "../img/page1-7-2.jpg";
import page1_7_3 from "../img/page1-7-3.jpg";
import page1_7_4 from "../img/page1-7-4.jpg";
import page1_7_5 from "../img/page1-7-5.jpg";
import page1_7_6 from "../img/page1-7-6.jpg";
import page1_7_7 from "../img/page1-7-7.jpg";
import page1_7_8 from "../img/page1-7-8.jpg";
import page1_7_9 from "../img/page1-7-9.jpg";
import page1_7_10 from "../img/page1-7-10.jpg";
import page1_8_1 from "../img/page1-8-1.png";
import page1_8_2 from "../img/page1-8-2.jpg";
import page1_8_3 from "../img/page1-8-3.jpg";
import page1_8_4 from "../img/page1-8-6.jpg";
import page1_8_5 from "../img/page1-8-7.jpg";
import page1_8_6 from "../img/page1-8-8.jpg";
import page1_8_7 from "../img/page1-8-9.png";

const pages = [
  {
    id: 1,
    title: "Interal Doors",
    bg: "blue",
    cards: [
      {
        id: 1,
        img: page1_1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 2,
        img: page1_1_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "/page/card/1",
        salePrice: "",
      },
      {
        id: 3,
        img: page1_1_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 4,
        img: page1_1_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 5,
        img: page1_1_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 6,
        img: page1_1_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 7,
        img: page1_1_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 8,
        img: page1_1_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
    ],
    text: "Discover the huge selection of internal doors here at Oakwood Doors & Spray Finishes in West Yorkshire. Our internal door range features a variety of choices, from moulded panel doors to hardwood doors and the highest quality walnut or oak. Individual collections of internal glazed doors, Bifold doors and internal fire doors are also available. We have styles to suit both modern and traditional homes and a wide price range to accommodate all budgets.",
    text2:
      "At Oakwood Doors, we are certain that you will find the right interior door for your home. Oakwood Doors can deliver any of our internal doors within mainland UK. Our sales team will be delighted to offer you help and advice based on your internal door requirements.",
  },
  {
    id: 2,
    title: "Fire Doors",
    bg: "green",
    cards: [
      {
        id: 1,
        img: page1_2_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: page1_2_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "/page/card/2",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: page1_2_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "/page/card/3",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: page1_2_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: page1_2_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: page1_2_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: page1_2_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: page1_2_8,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: page1_2_9,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: page1_2_10,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
    ],
    text: "",
    text2: "",
  },
  {
    id: 3,
    title: "Room Dividers",
    bg: "yellow",
    cards: [
      {
        id: 1,
        img: page1_3_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "/page/card/4",
        salePrice: "",
      },
      {
        id: 2,
        img: page1_3_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 3,
        img: page1_3_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
    ],
    text: "Transform your home or office with one of Oakwood Doors internal french doors or room dividers. Any of our french doors or room dividers give you the option of enlarging or enclosing any individual space. Our french doors are available in a wide range of colours, materials and styles and can be provided treated or prefinished.",
    text2:
      "At Oakwood Doors, we are certain that you will find the right french doors or room divider for your home. Oakwood Doors can deliver any of our doors within mainland UK. Our sales team will be happy to offer you help and advice based on any of your door requirements.",
  },
  {
    id: 4,
    title: "Extral Doors",
    bg: "red",
    cards: [
      {
        id: 1,
        img: page1_4_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "/page/card/5",
        salePrice: "",
      },
      {
        id: 2,
        img: page1_4_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 3,
        img: page1_4_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 4,
        img: page1_4_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 5,
        img: page1_4_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 6,
        img: page1_4_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 7,
        img: page1_4_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 8,
        img: page1_4_8,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 9,
        img: page1_4_9,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 10,
        img: page1_4_10,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
    ],
    text: "Browse our huge selection of external doors and sidelights at Oakwood Doors. We have a fantastic range of external doors, including hardwood panelled doors, double glazed and triple glazed oak doors . Add sidelights to your external door with our clear bevelled glass or double glazed zinc options to brighten up your home. We have external doors and sidelights to suit any home, all available at affordable prices.",
    text2:
      "At Oakwood Doors, we are certain that you will find the right external door for your home. Oakwood Doors can deliver any of our external doors within mainland UK. Our sales team will be delighted to offer you help and advice based on your requirements.",
  },
  {
    id: 5,
    title: "Pocket Doors",
    bg: "orange",
    cards: [
      {
        id: 1,
        img: page1_5_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: page1_5_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "/page/card/6",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: page1_5_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: page1_5_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: page1_5_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: page1_5_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
    ],
    text: "",
    text2: "",
  },
  {
    id: 6,
    title: "Architraves & Skirting",
    bg: "blue",
    cards: [
      {
        id: 1,
        img: page1_6_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: page1_6_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: page1_6_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "/page/card/7",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: page1_6_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: page1_6_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: page1_6_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: page1_6_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: page1_6_8,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: page1_6_9,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: page1_6_10,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
    ],
    text: "Oakwood Doors range of architraves and skirting options can enhance the overall appearance of any door. Our architraves and skirting can be available untreated, treated on site prior to installation, or can be sent for a professional spray finishing service in satin or matt. Our external engineered timber door frames combine the visual features of oak and the strength and stability of an engineered product. Our door frame packs are supplied to suit any door size or style and are provided untreated, ready for treatment application on site.",
    text2:
      "At Oakwood Doors, we are certain that you will find the right door for your home. Oakwood Doors can deliver and install any of your chosen architraves and skirting within mainland UK. Our sales team will be delighted to offer you help and advice based on any of your architrave or skirting requirements.",
  },
  {
    id: 7,
    title: "French Doors",
    bg: "green",
    cards: [
      {
        id: 1,
        img: page1_7_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: page1_7_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "/page/card/8",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: page1_7_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: page1_7_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: page1_7_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: page1_7_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: page1_7_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: page1_7_8,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: page1_7_9,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: page1_7_10,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        path: "",
        salePrice: "100.00",
      },
    ],
    text: "",
    text2: "",
  },
  {
    id: 8,
    title: "Ironmongery",
    bg: "red",
    cards: [
      {
        id: 1,
        img: page1_8_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "/page/card/9",
        salePrice: "",
      },
      {
        id: 2,
        img: page1_8_2,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 3,
        img: page1_8_3,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 4,
        img: page1_8_4,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "/page/card/10",
        salePrice: "",
      },
      {
        id: 5,
        img: page1_8_5,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 6,
        img: page1_8_6,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
      {
        id: 7,
        img: page1_8_7,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        path: "",
        salePrice: "",
      },
    ],
    text: "Door Handles for interior doors and exterior doors.",
    text2: "",
  },
];

const Page1 = () => {
  const { id } = useParams();
  const page = pages.find((page) => page.id === parseInt(id));

  return (
    <>
      <div className="bg-gradient-to-l from-red-400 to-red-200"></div>
      <div className="bg-gradient-to-l from-orange-400 to-orange-200"></div>
      <div className="bg-gradient-to-l from-yellow-400 to-yellow-200"></div>
      <div className="bg-gradient-to-l from-green-400 to-green-200"></div>
      <div className="bg-gradient-to-l from-blue-400 to-blue-200"></div>
      <Header />
      <div
        className={`bg-gradient-to-l from-${page.bg}-400 to-${page.bg}-200 md:h-80 h-40 px-8 flex items-center`}
      >
        <h1 className="text-[22px] md:text-[40px] font-bold">{page.title}</h1>
      </div>
      <main className="md:px-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
          {page.cards.map((el) => {
            return (
              <div
                className="card bg-white md:ml-14 mb-8 md:mb-4 pb-4 md:max-w-[65%] flex flex-col hover:shadow-2xl scale-[1.01] text-center"
                key={el.id}
              >
                <div className="h-[80%] flex items-center justify-center">
                  <img src={el.img} alt="" />
                </div>
                <div>
                  <Link to={el.path}>
                    <p className="mx-4 text-xl font-bold text-blue-950 hover:text-blue-700">
                      {el.text}
                    </p>
                  </Link>
                  <p className="flex flex-col text-black font-semibold">
                    {el.price === "" ? null : (
                      <>
                        Incl. VAT: ${el.price}
                        <span className="text-gray-400">
                          Excl. VAT: ${el.salePrice}
                        </span>
                      </>
                    )}
                  </p>
                  <Link to={el.path}>
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
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <div className="py-4 px-4 md:px-20">
        <p className="mb-2 text-[12px]">{page.text}</p>
        <p className="text-[12px]">{page.text2}</p>
        {page.id === 1 ? (
          <>
            <h1 className="my-4">COLOURS</h1>
            <p className="text-[12px]">
              Now offering spray finishing Colours on selected Internal Oak
              Untreated Doors & Internal white primed doors. With the colours
              range the skilled craftsmen handle the hard work for you. Spraying
              and finishing to achieve the kind of finish that will make a room
              shine. Choose any of the White Primed Doors from XL Joinery range
              and choose from 10 different colours for the smooth finishes.
              Choose one of the XL Joinery Unfinished Oak Doors & add a stain. 5
              Colours to choose from from the Oak Unfinished doors in any stains
              Blanco, Crema, Latte, Cappuccino & Americano. Lead time approx 4
              weeks.
            </p>
            <h1 className="my-4">BESPOKE INTERNAL DOORS</h1>
            <p className="text-[12px]">
              We're excited to introduce Bespoke on a range of our Internal
              Doors. If you need a width or length you can't see in our
              collection then let us know. Contact us and let us know what
              Interior Doors you are planning. We'll produce a CAD drawing for
              you to sign off. Delivery is approx 14 - 16 weeks after sign off.
              Bespoke Interior Doors is available on the Grey Interior Doors.
              All internal oak doors (pre finished - and Untreated). All
              Internal Walnut Doors. All Internal White doors (pre finished and
              white primed).{" "}
            </p>
            <h1 className="my-4">INTERNAL FIRE DOOR 60 MINUTE RANGE</h1>
            <p className="text-[12px]">
              Here at Oakwood Doors we have introduced 60 Minute Internal Fire
              Doors on the most popular range in the Oak Collection of Internal
              Doors. Internal FIRE Door Oak Palermo FD60 & the Internal Fire
              Door Oak Suffolk Original both 54 mm thick.
            </p>
          </>
        ) : null}
      </div>
      <img className="mx-auto my-8" src={img} alt="" />
      {page.text === "" ? (
        <div className="flex flex-col items-end text-start py-4 px-12">
          <img src={img1} className="md:w-[60%]" alt="" />
          <h1 className="md:w-[60%] text-[34px] text-blue-950 font-bold">
            {page.title}
          </h1>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default Page1;
