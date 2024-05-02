import { useState } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <>
      <div className="">
        {/* input */}
        <div className="flex border-b-2 border-b-blue-600 w-[400px] px-2 justify-between">
            <input
              type="text"
              placeholder={placeholder}
              className="outline-none w-full"
              onChange={handleFilter}
              value={wordEntered}
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
          </div>

        {/* data */}
        {filteredData.length != 0 && (
          <div className="overflow-hidden overflow-y-auto w-[300px] h-[200px] bg-white flex flex-col gap-2 absolute z-[60]">
            {filteredData.slice(0, 15).map((value) => {
              return (
                <a className="w-full h-10" key={value.id} href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
