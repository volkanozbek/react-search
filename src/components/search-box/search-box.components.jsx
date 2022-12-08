import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        className={props.className}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
