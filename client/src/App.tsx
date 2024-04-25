import "./App.css";
import React from "react";
import { SwapCard } from "./components/Card";

const App: React.FC = () => {
  const recipeAuthor = "G";
  const recipeItem = {
    title: "Cat in a hokkaido",
    date: new Date("2024-04-24"),
    description:
      "A hokkaido pumpkin is not just a good potato replacement but also the perfect cat hideout for Haloween season.",
  };

  const likeCount = Math.floor(Math.random() * 101) + 1;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <SwapCard
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={likeCount}
        />
      </header>
    </div>
  );
};

export default App;
