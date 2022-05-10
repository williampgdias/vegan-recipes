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

function HowGoVegan({ children }) {

  return (

    <section className="how-go-vegan">
      <div>
        { children }
      </div>
      <Accordion defaultActiveKey='0' className='accordion'>
        {/* CARD 1 */}
        <Card className='card'>
          <Card.Header className='card-header'>
            <CustomToggle eventKey='0'>Take it Slow</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0' className='accordion-collapse'>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        {/* CARD 2 */}
        <Card>
          <Card.Header>
            <CustomToggle eventKey='1'>Try new things</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        {/* CARD 3 */}
        <Card>
          <Card.Header>
            <CustomToggle eventKey='2'>Do it right</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='2'>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        {/* CARD 4 */}
        <Card>
          <Card.Header>
            <CustomToggle eventKey='3'>Do not give up</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='3'>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        {/* CARD 5 */}
        <Card>
          <Card.Header>
            <CustomToggle eventKey='4'>Keep it learning</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='4'>
            <Card.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  );
}

export default HowGoVegan;