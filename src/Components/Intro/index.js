import './style.css';

import Carousel from 'react-bootstrap/Carousel';

import Logo from '../images/logo.png';

const Intro = () => {
  return (
    <section className="intro">
      <div className="logo">
        <a href="index.html">
          <img src={ Logo } alt='' />
          <p>Easy vegan recipes,<br/>cause we <span>love</span> food</p>
        </a>
      </div>

      <div>
        <Carousel className='carousel'>
          <Carousel.Item>
            <blockquote className="quote-externo d-block w-100">
              <p>
                “We are all animals on this planet. We are all creatures. Like us, first of all, they are earthlings."
              </p>
              <cite>JOAQUIM PHOENIX</cite>
            </blockquote>
          </Carousel.Item>

          <Carousel.Item>
            <blockquote className="quote-externo d-block w-100">
              <p>
                "We have a responsibility to act now to minimize our impact on this planet for our children and future generations."
              </p>
              <cite>PAUL MCCARTNEY</cite>
            </blockquote>
          </Carousel.Item>

          <Carousel.Item>
            <blockquote className="quote-externo d-block w-100">
              <p>
                "We don't need to eat anyone who would run, swim, or fly away if he could."
              </p>
              <cite>JAMES CROMWELL</cite>
            </blockquote>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default Intro;