import React from 'react'
import './footer.scss'
import white_logo from '../../assets/white-logo.svg'
import { footerLinks } from '../constants'
import { Row, Col } from 'react-bootstrap'
import {FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa' 

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='get-started'>
        <h1>Boost your links today</h1>
        <span>Get Started</span>
      </div>
      <Row xs={1} md={6} className='footer-wrapper'>
        <Col>
          <img src={white_logo} alt="" />
        </Col>
        <Col></Col>
        <Col>
          <ul className='links'>
            {footerLinks.features.map((link, idx) => {
              return <li key={idx} >{link}</li>
            })}
          </ul>
        </Col>
        <Col>
          <ul className='links'>
            {footerLinks.resources.map((link, idx) => {
              return <li key={idx} >{link}</li>
            })}
          </ul>
        </Col>
        <Col>
          <ul className='links'>
            {footerLinks.company.map((link, idx) => {
              return <li key={idx} >{link}</li>
            })}
          </ul>
        </Col>
        <Col>
          <ul className='social-icons'>
            <li><FaFacebookSquare/></li>
            <li><FaTwitter/></li>
            <li><FaPinterest/></li>
            <li><FaInstagram/></li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Footer