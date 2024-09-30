function SearchInput() {
  return (
    <div
      id="searchInputBox"
      className="text-sm sm:text-lg flex items-center rounded-2xl px-4 shadow-[0_8px_24px_rgba(149,157,165,0.2)] group has-[:focus]:border-2 has-[:focus]:border-primary"
    >
      <input
        id="searchInput"
        placeholder="چی میخوای یاد بگیری ؟"
        className="h-14 outline-none w-[90%]"
      />
      <span className="w-[10%] flex justify-center">
        <img src="/src/assets/images/search/search-normal.png" />
      </span>
    </div>
  );
}

export default SearchInput;
