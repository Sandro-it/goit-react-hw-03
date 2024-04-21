import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Find by name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
