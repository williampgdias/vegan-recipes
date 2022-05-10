import 'bootstrap/dist/css/bootstrap.min.css';

import animalsImg from './images/animals.png';
import environmentImg from './images/environment.png';
import healthImg from './images/health.png';

import Intro from './Components/Intro';
import Title from './Components/Title';
import Cards from './Components/Cards';
import Reason from './Components/Reason';
import HowGoVegan from './Components/How-go-vegan';

function App() {
  return (
    <>
      <Intro />
      <Title title='Why Go Vegan?' />
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
      
      <HowGoVegan>
        <Title title='Why Go Vegan?' />
      </HowGoVegan>
    </>
  );
}

export default App;
