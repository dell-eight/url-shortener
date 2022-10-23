import React from 'react'
import UrlShortener from '../widgets/urlShortener/UrlShortener';
import Card from '../widgets/cards/Cards';
import './statistics.scss'
import { Row } from 'react-bootstrap/';
import { cards } from '../constants';


const Statistics = () => {

  return (
    <div className='stats-container'>
      <UrlShortener />
      <div className='stats-title'>
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <Row xs={1} md={3} className='stats-cards'>
        {cards.map((card, idx) => {
          return <Card key={idx} logo={card.logo} title={card.title} text={card.text} align={card.align} />
        })}
      </Row>
    </div>
  )
}

export default Statistics