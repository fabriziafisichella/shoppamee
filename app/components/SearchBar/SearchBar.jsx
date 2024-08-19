import style from "./searchbar.module.scss";
import { globalContext } from "@/app/(context)/Context";
import { useContext, useState } from "react";
import { colors, clothes, electronics, styles } from "@/app/utils/searchList";
import { BiSearchAlt2 } from "react-icons/bi";


const SearchBar = () => {
  const { setSearch } = useContext(globalContext);
  const [inputValue, setInputValue] = useState("");
  const [chooseColor, setChooseColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue("");
  };

  const handleColor = (e) => {
    e.preventDefault();
    setChooseColor(e.target.value);
  };

  const handleSetColor = (e) => {
    e.preventDefault();
    setSearch(chooseColor);
  };

  return (
    <div className={style.productListWrapper}>
      <form
        className={style.search_container}
        type="submit"
        onSubmit={handleSubmit}
      >
        <input
          className={style.search_input}
          type="text"
          placeholder="Search product by"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <BiSearchAlt2
          className={style.search_button}
          type="submit"
          onClick={handleSubmit}
        />
      </form>

      <div className={style.filtersContainer}>
        <div>Or you can search by...</div>

        <div className={style.filters}>
          <div className={style.dropdown_menu}>
            <form type="submit">
              <select onChange={handleColor}>
                <option id="" hidden>
                  color
                </option>
                {colors.map((color, index) => {
                  return <option key={index}>{color}</option>;
                })}
              </select>
              <button className={style.dropdown_btn} onClick={handleSetColor}>
                Filter
              </button>
            </form>
          </div>

          <div className={style.dropdown_menu}>
            <form type="submit">
              <select onChange={handleColor}>
                <option id="" hidden>
                  style
                </option>
                {styles.map((style, index) => {
                  return <option key={index}>{style}</option>;
                })}
              </select>
              <button className={style.dropdown_btn} onClick={handleSetColor}>
                Filter
              </button>
            </form>
          </div>

          <div className={style.dropdown_menu}>
            <form type="submit">
              <select onChange={handleColor}>
                <option id="" hidden>
                  electronics
                </option>
                {electronics.map((electronic, index) => {
                  return <option key={index}>{electronic}</option>;
                })}
              </select>
              <button className={style.dropdown_btn} onClick={handleSetColor}>
                Filter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
