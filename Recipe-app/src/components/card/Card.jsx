import './Card.css';
import {useNavigate} from 'react-router-dom';

const Card = ({recipes}) => {
  const navigate = useNavigate();
  console.log(recipes);
  return (
    <div className="pageWrapper">
      {recipes.map(({recipe}, index)=>{
        const { label, image } = recipe;
        return(
          <div className="cardWrapper" key={index}>
            <h3>{label}</h3>
            <img src={image} alt="food" />
            <button onClick={()=>navigate("detail",{state:recipe})}>More Detail</button>
          </div>
        )
      })}
    </div>
  )
}

export default Card;