import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => {
  return (
    <div className="search-container">
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
