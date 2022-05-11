import 'bootstrap/dist/css/bootstrap.min.css';

// ANIMALS IMG
import animalsImg from './images/animals.png';
import environmentImg from './images/environment.png';
import healthImg from './images/health.png';

// RECIPES IMG
import breakfastImg from './images/breakfast.png';
import lunchImg from './images/lunch.png';
import dinnerImg from './images/dinner.png';
import dessertImg from './images/dessert.png';

// COMPONENTS
import Intro from './Components/Intro';
import Title from './Components/Title';
import Cards from './Components/Cards';
import Reason from './Components/Reason';
import HowGoVegan from './Components/How-go-vegan';
import AllRecipes from './Components/AllRecipes';
import Recipes from './Components/Recipes';

function App() {
  return (
    <>
      {/******************** INTRO ********************/}
      <Intro />

      {/******************** WHY GO VEGAN ********************/}
      <Title title='Why go Vegan?' />
      <Cards>
        <Reason
          image={ animalsImg }
          cardTitle="Animals"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Reason
          image={ environmentImg }
          cardTitle="Environment"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Reason
          image={ healthImg }
          cardTitle="Health"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
      </Cards>

      {/******************** HOW TO GO VEGAN ********************/}
      <HowGoVegan
        eventKey="0"
        btnTitle="Take it slow"
        cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      >
        <Title title='How to go Vegan' />
      </HowGoVegan>
      <HowGoVegan
        eventKey="1"
        btnTitle="Try new things"
        cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      >
      </HowGoVegan>
      <HowGoVegan
        eventKey="2"
        btnTitle="Do it right"
        cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      >
      </HowGoVegan>
      <HowGoVegan
        eventKey="3"
        btnTitle="Do not give up"
        cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      >
      </HowGoVegan>
      <HowGoVegan
        eventKey="4"
        btnTitle="Keep it learning"
        cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      >
      </HowGoVegan>

      {/******************** RECIPES ********************/}
      <Title title='Check out our recipes' />

      <AllRecipes>
        <Recipes
          subtitle='Breakfast'
          image={ breakfastImg }
        >
        </Recipes>
        <Recipes
          subtitle='Lunch'
          image={ lunchImg }
        >
        </Recipes>
        <Recipes
          subtitle='Dinner'
          image={ dinnerImg }
        >
        </Recipes>
        <Recipes
          subtitle='Dessert'
          image={ dessertImg }
        >
        </Recipes>
      </AllRecipes>
    </>
  );
}

export default App;
