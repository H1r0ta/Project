import styled from "styled-components";

const Input1 = () => {
  return (
    <InputBody>
      <button className="icon">
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
      </button>
      <input placeholder="search.." className="input" name="text" type="text" />
    </InputBody>
  );
};

const InputBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  width: fit-content;

  .input {
    border-style: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    background-color: transparent;
    box-shadow: 0px 0px 3px #f3f3f3;
    padding-right: 40px;
    color: #000;
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .input::placeholder {
    color: #8f8f8f;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 50px;
    position: absolute;
    right: 0;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #0800f7;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

export default Input1;
