import React from 'react'
import './cards.scss'
import { Col, Card } from 'react-bootstrap'

const Cards = ({logo, title, text}) => {
    return (
      <Col className='card card-container '>
        <div className='card-img-wrapper'>
          <Card.Img variant="top" src={logo} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Col>
  )
}

export default Cards