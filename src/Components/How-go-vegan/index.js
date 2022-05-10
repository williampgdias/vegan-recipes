import './style.css';

import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decorateOnClick = useAccordionButton(eventKey);

  return(
    <button type='button' onClick={decorateOnClick} className='button'>
      { children }
    </button>
  );
}

function HowGoVegan({ children, eventKey, btnTitle, cardBody }) {

  return (

    <section className="how-go-vegan">
      <div>
        { children }
      </div>
      <Accordion defaultActiveKey='0' className='accordion'>
        <Card className='card'>
          <Card.Header className='card-header'>
            <CustomToggle eventKey={ eventKey }>{ btnTitle }</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={ eventKey } className='accordion-collapse'>
            <Card.Body>
              { cardBody }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  );
}

export default HowGoVegan;