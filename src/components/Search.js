import React, {useState} from "react";

function Search({listings, setListings}) {
  const [searchTerm, setSearchTerm] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    const searchTerm = e.target[0].value.toLowerCase();
    setListings(listings.filter((listing) => {
      return listing.description.includes(searchTerm)
    }))
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
