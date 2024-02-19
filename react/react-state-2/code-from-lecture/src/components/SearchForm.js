export default function SearchForm({ onSearch, searchTerm }) {
  // const searchTerm = "";

  function handleSubmit(event) {
    event.preventDefault();
    // get the value from the form
    const formElements = event.target.elements
    console.log(formElements.searchTerm.value)
    onSearch(formElements.searchTerm.value)
    // console.log("submit");

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
