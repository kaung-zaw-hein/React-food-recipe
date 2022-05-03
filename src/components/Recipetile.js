import React from "react";
import classes from  "./Recipetile.module.css";

const Recipetile = ({recipe}) => {
  return (
    <div className={classes.card}  onClick={() => window.open(recipe["recipe"]["url"])}>
      <div className={classes.card__header}>
        <img src={recipe["recipe"]["image"]} alt="card__image" className={classes.card__image} width="600" />
      </div>
      <div className={classes.card__body}>
        <h4>{recipe["recipe"]["label"]}</h4>
      <h4>IngredientLines</h4>
        <p>{recipe["recipe"]["ingredientLines"]}</p>
      </div>
      <div className={classes.card__footer}>
        <div className={classes.user}>
         <h5>cautions: {recipe["recipe"]["cautions"]} </h5>
          <div className={classes.user__info}>
            <h5>Source: {recipe["recipe"]["source"]}</h5>
            <small>meal Type: {recipe["recipe"]["mealType"]}</small>
          </div>
        </div>
      </div>
      <ul className={classes.tagcontainer}>
            { recipe["recipe"]["healthLabels"].map((healthLabel,index) => {
            return <li className={`${classes.tag} ${classes.tag_blue}`}>{healthLabel}</li>;
          })}
        </ul>
    </div> 
    
  );
}

export default Recipetile;
