import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import card1_1 from "../img/card-1.png";
import img from '../img/sprayfinish.png';
import img1 from '../img/img2.jpg';

const pages = [
  {
    id: 1,
    title: "Interal Doors",
    bg: "blue",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
    ],
    text: 'Discover the huge selection of internal doors here at Oakwood Doors & Spray Finishes in West Yorkshire. Our internal door range features a variety of choices, from moulded panel doors to hardwood doors and the highest quality walnut or oak. Individual collections of internal glazed doors, Bifold doors and internal fire doors are also available. We have styles to suit both modern and traditional homes and a wide price range to accommodate all budgets.',
    text2: 'At Oakwood Doors, we are certain that you will find the right interior door for your home. Oakwood Doors can deliver any of our internal doors within mainland UK. Our sales team will be delighted to offer you help and advice based on your internal door requirements.',
  },
  {
    id: 2,
    title: "Fire Doors",
    bg: "green",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
    ],
    text: '',
    text2: '',
  },
  {
    id: 3,
    title: "Room Dividers",
    bg: "yellow",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
    ],
    text: 'Transform your home or office with one of Oakwood Doors internal french doors or room dividers. Any of our french doors or room dividers give you the option of enlarging or enclosing any individual space. Our french doors are available in a wide range of colours, materials and styles and can be provided treated or prefinished.',
    text2: 'At Oakwood Doors, we are certain that you will find the right french doors or room divider for your home. Oakwood Doors can deliver any of our doors within mainland UK. Our sales team will be happy to offer you help and advice based on any of your door requirements.',
  },
  {
    id: 4,
    title: "Extral Doors",
    bg: "red",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
    ],
    text: 'Browse our huge selection of external doors and sidelights at Oakwood Doors. We have a fantastic range of external doors, including hardwood panelled doors, double glazed and triple glazed oak doors . Add sidelights to your external door with our clear bevelled glass or double glazed zinc options to brighten up your home. We have external doors and sidelights to suit any home, all available at affordable prices.',
    text2: 'At Oakwood Doors, we are certain that you will find the right external door for your home. Oakwood Doors can deliver any of our external doors within mainland UK. Our sales team will be delighted to offer you help and advice based on your requirements.',
  },
  {
    id: 5,
    title: "Pocket Doors",
    bg: "orange",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
    ],
    text: '',
    text2: '',
  },
  {
    id: 6,
    title: "Architraves & Skirting",
    bg: "blue",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
    ],
    text: 'Oakwood Doors range of architraves and skirting options can enhance the overall appearance of any door. Our architraves and skirting can be available untreated, treated on site prior to installation, or can be sent for a professional spray finishing service in satin or matt. Our external engineered timber door frames combine the visual features of oak and the strength and stability of an engineered product. Our door frame packs are supplied to suit any door size or style and are provided untreated, ready for treatment application on site.',
    text2: 'At Oakwood Doors, we are certain that you will find the right door for your home. Oakwood Doors can deliver and install any of your chosen architraves and skirting within mainland UK. Our sales team will be delighted to offer you help and advice based on any of your architrave or skirting requirements.',
  },
  {
    id: 7,
    title: "French Doors",
    bg: "green",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "120.00",
        salePrice: "100.00",
      },
    ],
    text: '',
    text2: '',
  },
  {
    id: 8,
    title: "Ironmongery",
    bg: "red",
    cards: [
      {
        id: 1,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 2,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 3,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 4,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 5,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 6,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 7,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 8,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 9,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
      {
        id: 10,
        img: card1_1,
        text: "Interal Door Oak Suffolk Prefinished",
        price: "",
        salePrice: "",
      },
    ],
    text: 'Door Handles for interior doors and exterior doors.',
    text2: '',
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
      <main>
        <div
          className={`bg-gradient-to-l from-${page.bg}-400 to-${page.bg}-200 md:h-80 h-40 px-8 flex items-center`}
        >
          <h1 className="text-[22px] md:text-[40px] font-bold">{page.title}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
          {page.cards.map((el) => {
            return (
              <div
                className="card bg-white md:ml-14 mb-4 pb-4 md:max-w-[65%] hover:shadow-2xl scale-[1.01] text-center"
                key={el.id}
              >
                <img src={el.img} alt="" />
                <p className="mx-4 text-xl font-bold text-blue-950 hover:text-blue-700">
                  {el.text}
                </p>
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
        </div>
      </main>
      <div className="py-4 px-8">
      <p className="mb-2">{page.text}</p>
      <p>{page.text2}</p>
      {page.id === 1 ? (
        <>
        <h1 className="my-4">COLOURS</h1>
        <p>Now offering spray finishing Colours on selected Internal Oak Untreated Doors & Internal white primed doors.  With the colours range the skilled craftsmen handle the hard work for you.  Spraying and finishing to achieve the kind of finish that will make a room shine.  Choose any of the White Primed Doors from XL Joinery range and choose from 10 different colours for the smooth finishes.   Choose one of the XL Joinery Unfinished Oak Doors & add a stain.  5 Colours to choose from from the Oak Unfinished doors in any stains Blanco, Crema, Latte, Cappuccino & Americano.  Lead time approx 4 weeks.</p>
        <h1 className="my-4">BESPOKE INTERNAL DOORS</h1>
        <p>We're excited to introduce Bespoke on a range of our Internal Doors.  If you need a width or length you can't see in our collection then let us know.  Contact us and let us know what Interior Doors you are planning.  We'll produce a CAD drawing for you to sign off.  Delivery is approx 14 - 16 weeks after sign off.  Bespoke Interior Doors  is available on the Grey Interior Doors.  All internal oak doors (pre finished - and Untreated).   All Internal Walnut Doors. All Internal White doors (pre finished and white primed).  </p>
        <h1 className="my-4">INTERNAL FIRE DOOR 60 MINUTE RANGE</h1>
        <p>Here at Oakwood Doors we have introduced 60 Minute Internal Fire Doors on the most popular range in the Oak Collection of Internal Doors.  Internal FIRE Door Oak Palermo FD60 & the Internal Fire Door Oak Suffolk Original both 54 mm thick.</p>
        </>
                  ) : null}
      </div>
      <img className="mx-auto my-8" src={img} alt="" />
      {page.text === "" ? (
                    <div className="flex flex-col items-end text-start py-4 px-12">
                    <img src={img1} className="md:w-[60%]" alt="" />
                    <h1 className="md:w-[60%] text-[34px] text-blue-950 font-bold">{page.title}</h1>
                    </div>
                  ) : null}
      <Footer />
    </>
  );
};

export default Page1;
