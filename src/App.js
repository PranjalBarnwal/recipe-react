import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "0f2dc369";
  const APP_KEY = "1b04b61d17fe8e483d9fafbbe9be4816";
  //  const exampleReq= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("banana");
  const [query, setQuery] = useState("banana");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
      // {recipes&&recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
