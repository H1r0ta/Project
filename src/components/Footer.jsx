export const Footer = () => {
  return (
    <>
      <div className="bg-blue-900 text-white md:flex px-4 md:px-32 py-14">
        <div className="md:w-[50%]">
          <h1 className="md:text-[42px] text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            NEWSLETTER
          </h1>
          <p>Subscribe to our newsletter for product updates and offers.</p>
        </div>
        <div className="md:w-[50%]">
          <div className="w-[80%] pl-4 bg-white bg-opacity-40 flex justify-between">
            <input
              type="text"
              placeholder="Enter Your Email Here"
              className="outline-none bg-transparent placeholder-gray-200"
            />
            <button className="bg-blue-600 py-6 px-8 hover:bg-white hover:text-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 pl-4 md:pl-24  pr-4 py-6 gap-16">
        <ul>
          <li className="text-lg font-bold">CUSTOMER SERVICE</li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Product Symbol Explanations
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Spray Finishes - Wood Coating
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Delivery Information
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Secure Online Payments
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">FAQs</li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Terms and Conditions
          </li>
          <li className="text-lg font-bold">POPULAR DOORS</li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Internal Oak Doors
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Internal Fire Doors
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            LPD Doors
          </li>
        </ul>
        <ul>
          <li className="text-lg font-bold">COMPANY INFORMATION</li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            About Us
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Privacy & Cookie
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Contact Us
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Size Guide
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Testimonials
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">
            Delivery
          </li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">Blog</li>
          <li className="hover:pl-2 hover:text-blue-950 duration-500 mt-1">Sale</li>
        </ul>
        <ul>
          <li className="text-lg font-bold">OPENING TIMES</li>
          <li>
            <span className="text-lg font-bold">Monday to Thursday: </span> 9am
            - 5pm
          </li>
          <li>
            <span className="text-lg font-bold">Friday:</span>C 9am - 4pm
          </li>
          <li>
            <span className="text-lg font-bold">Saturday: </span>CClosed
          </li>
          <li>
            <span className="text-lg font-bold">Sunday: </span>CClosed
          </li>
          <li>
            <span className="text-lg font-bold">Bank Holiday: </span>Closed
          </li>
          <li>Visit Our Showroom</li>
        </ul>
        <ul>
          <li className="text-lg font-bold mb-2">CONTACT US</li>
          <li className="flex items-start mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-8 text-blue-950"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            Oakwood Doors & Spray Finishes LTD 581 - 585 Wakefield Road Tandem,
            Huddersfield, HD5 9XP
          </li>
          <li className="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-950"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            Phone: 01484 643 394
          </li>
          <li className="flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-950"
            >
              <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
              <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
            </svg>
            Email: sales@oakwooddoors.co.uk
          </li>
          <li className="flex mt-4">
            <div className="w-10 h-10 ml-3 bg-blue-600 rounded-full flex justify-center items-center text-white  transition-transform duration-300 transform-gpu animate-spin-reverse hover:bg-blue-900">
              <svg
                enableBackground="new 0 0 56.693 56.693"
                className="w-6 h-6"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
              </svg>
            </div>
            <div className="w-10 h-10 ml-3 bg-blue-600 rounded-full flex justify-center items-center text-white  transition-transform duration-300 transform-gpu animate-spin-reverse hover:bg-blue-900">
              <svg
                enableBackground="new 0 0 56.693 56.693"
                className="w-6 h-6"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
              </svg>
            </div>
            <div className="w-10 h-10 ml-3 bg-blue-600 rounded-full flex justify-center items-center text-white  transition-transform duration-300 transform-gpu animate-spin-reverse hover:bg-blue-900">
              <svg
                version="1.1"
                viewBox="0 0 50 36"
                className="w-6 h-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="currentColor"
                fill="currentColor"
              >
                <title />
                <desc />
                <defs />
                <g
                  fillOpacity="0.3"
                  fillRule="evenodd"
                  id="Icons"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                >
                  <g
                    fill="currentColor"
                    id="Color-"
                    stroke="currentColor"
                    transform="translate(-199.000000, -367.000000)"
                  >
                    <path
                      d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
                      id="Youtube"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-10 h-10 ml-3 bg-blue-600 rounded-full flex justify-center items-center text-white  transition-transform duration-300 transform-gpu animate-spin-reverse hover:bg-blue-900">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 56.7 56.7"
                enableBackground="new 0 0 56.7 56.7"
                xmlSpace="preserve"
                stroke="currentColor"
                fill="currentColor"
              >
                <g>
                  <path
                    d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                  />
                  <circle cx="41.5" cy="16.4" r="2.9" />
                  <path
                    d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                  />
                </g>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
