import  React, {useEffect,useState} from 'react';
import Axios from "axios";
import Input from './components/Input';
import Recipetile from './components/Recipetile';
import './App.css';

function App() {
  const APP_ID = "f21b3098";
  const APP_KEY = "602bf1d7cb79a7fb3e023a0e04b32d4c";
  const [recipes, setRecipes] = useState([]);
  const [recipesdata, setRecipesdata] = useState([]);

  const recipesData = (data) => {
    setRecipes(data);
    const url = `https://api.edamam.com/search?q=${recipes.ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${recipes.label}`;
    getRecipeInfo(url);
  }

  const getRecipeInfo = async (url) => {
    const result = await Axios.get(url);
    const data = result.data.hits
    setRecipesdata(data);
  };

  const recipesdataa = (
    <div className="app__recipes">
     { recipesdata.map((recipe,index) => {
        return <Recipetile recipe={recipe} key={index} />;
      })}
    </div>
  );

  return (
   <main>
     <Input inputData={recipesData}></Input>
     {recipesdataa}
   </main>
  );
}

export default App;
