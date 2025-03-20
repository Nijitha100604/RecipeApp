import { useState} from 'react';
import './Home.css';
import axios from 'axios';
import Header from '../../components/header/Header.jsx';
import Card from '../../components/card/Card.jsx'
import home from '../../assets/home.webp';
const Home = () => {

    const [query, setQuery] = useState("");
    const [selectedMeal, setSelectedMeal] = useState("");
    const [recipes, setRecipes] = useState(null); 

    const mealTypes=["Breakfast", "Dinner", "Snack", "Lunch", "TeaTime"];

    const appId = import.meta.env.VITE_API_ID;
    const appKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

    const getData = async () =>{
       try{
          const { data } = await axios(url);
          setRecipes(data.hits);
       } catch(error){
          console.log(error);
       }
    };

    console.log(recipes);

   //  useEffect(()=>{
   //    getData();
   //  },[])

    return (
      <div>
         <Header query={query} setQuery={setQuery} selectedMeal = {selectedMeal} setSelectedMeal = {setSelectedMeal} mealTypes = {mealTypes} getData={getData}/>
         {!recipes && <img className="homeImg" src={home} alt="home" />}
         {recipes?.length==0 && <h1>Sorry, Try Another Food Name</h1>}
         {recipes?.length>0 && 
         <Card recipes={recipes}/>}
      </div>
    )
}

export default Home;