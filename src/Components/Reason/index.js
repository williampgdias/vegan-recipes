import React from 'react';
import './style.css';

import Card from 'react-bootstrap/Card';

const Reason = ({ image, cardTitle, text }) => {
  return (
    <div className='reason'>
      <Card className='card'>
        <img src={ image } alt='' className='img' />
        <Card.Body>
          <Card.Title className='card-title'>{ cardTitle }</Card.Title>
          <Card.Text>
            { text }  
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Reason;