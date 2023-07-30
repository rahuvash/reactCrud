import React, {  useState } from "react";
import axios from "axios";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);


 

  const handleSearch = async() => {
    if (userInput.trim() !== "") {
      const apiUrl = `https://openlibrary.org/search.json?title=${userInput}`;
      axios
        .get(apiUrl)
        .then((res) => {
          const titles = res.data.docs.forEach((item) => item.title);
          console.log(titles)
          setSearchResults(titles);
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  };

  return (
    <>
    <h1
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    }}
  >
    4 Way Search
  </h1>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="text"
        value={userInput}
        onChange={(e)=>setUserInput(e.target.value)}
        style={{
          width: "400px",
          height: "40px",
          padding: "2px",
          fontSize: "16px",
          border: "none",
          background: "#f0f0f0",
          borderRadius: "5px",

        }}
        placeholder="Type Something to start searching..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.forEach((title, index) => (
              <ul key={index}>{title}</ul>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  );
};

export default Search;
