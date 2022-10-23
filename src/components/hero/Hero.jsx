import React from 'react'
import './hero.scss'
import { Container } from 'react-bootstrap';
import illus_img from '../../assets/illustration-working.svg'
import { Col, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container className='hero-container'>
      <Row className='hero-wrapper '>
        <Col className='col-lg-7 col-md-9'> 
          <div className='hero-text'>
            <h1>{`More than just\nshorten links`}</h1>
            <p>{`Build your brand's recognition and get detailed\ninsights on how your links are performing.`}</p>
            <span>Get Started</span>
          </div>
        </Col>
        <Col className='col-lg-5 col-md-9 col-sm-12'>
          <div className='hero-img'>
            <img src={illus_img} alt=""  />
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default Hero

