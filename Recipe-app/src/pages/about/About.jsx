import './About.css';
const About = () => {
  return (
    <div className="aboutWrapper">
      <h2>WELCOME TO RECIPE APP!</h2>
      <h5>Your go-to destination for discovering, saving, and sharing delicious recipes. Whether you’re a beginner or a seasoned chef, we bring you easy-to-follow recipes tailored to your taste.</h5>
      <div className="offerWrapper">
        <h3>What we Offer!</h3>
        <ul>
          <li>✅A vast collection of recipes for every meal</li>
          <li>✅Easy search based on ingredients and meal type</li>
          <li>✅Find recipes based on what's in your fridge</li>
        </ul>
      </div>
    </div>
  )
}

export default About;