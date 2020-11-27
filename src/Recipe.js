import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, ingredients, image }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Calory: {calories}</p>
      <ul aria-label="Ingredients:">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="'" />
    </div>
  );
};

export default Recipe;
