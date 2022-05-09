import './style.css';

import animalsImg from '../images/animals.png';
import environmentImg from '../images/environment.png';
import healthImg from '../images/health.png';

import Card from 'react-bootstrap/Card';

const Reason = () => {
  return (
    <section className="reason">
      <h2 className="subtitle">Why go vegan?</h2>

      <div className='cards'>
        <Card className='card'>
          <Card.Img className='img'  variant="top" src={ animalsImg } />
          <Card.Body>
            <Card.Title className='card-title'>Animals</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    

        <Card className='card'>
          <Card.Img className='img' variant="top" src={ environmentImg } />
          <Card.Body>
            <Card.Title>Environment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='img'  variant="top" src={ healthImg } />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  )
}

export default Reason;