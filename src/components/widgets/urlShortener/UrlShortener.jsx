import React, { useState } from 'react'
import './urlShortener.scss'
import UrlShort from '../urlShort/UrlShort'
import {fetchShortUrl} from '../../../api/fetchData'

const UrlShortener = () => {

  const [empty, setEmpty] = useState(false);
  const [shortLinks, setShortLinks] = useState([])

  const addShorlinks = (url, shortUrl) => {
    const newShorlink = {
      url: url,
      shortUrl: shortUrl
    }
    const updateShortLinks = [...shortLinks, newShorlink]
    setShortLinks(updateShortLinks)
  }

  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value !== '') { 
      setEmpty(false);
      if (isValidUrl(value)) {
        const shortUrl = await fetchShortUrl(value);
        addShorlinks(value, shortUrl);
      } else alert('Please enter a valid url!');
    } else setEmpty(true); 
    e.target.reset();
  }



  return (
    <>
      <form noValidate  className='shortener-container' onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input className={empty ? 'input-invalid' : ''} type="text" placeholder='Shorten a link here...' required />
          <i style={{ visibility: empty ? 'visible': 'hidden'}}>Please add a link</i>
        </div>
        <button type='submit' className='btn-shortener'>Shorten it!</button>
      </form>

      {shortLinks.map((shortLink, idx) => {
        return <UrlShort key={idx} url={shortLink.url} shortUrl={shortLink.shortUrl} />
      })}
    </>
  )
}

export default UrlShortener