import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";

class Recipe extends Component {
  render() {
    return (
      <>
        <Search />
        <RecipeList />
      </>
    );
  }
}
export default Recipe;
