import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';
import './urlShort.scss'

const UrlShort = ({ url, shortUrl }) => {

  const [isCopied, setCopied] = useState(false);
  
  const copyText = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true)
  }
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setCopied(false), 5000);
    }
    
  }, [isCopied])
  
  return (
    <div className='shorturl-container'>
      <span id='url'>{url}</span>
      <div className='shorturl-result'>
        <span id='shortUrl'>{shortUrl}</span>
        <span id={isCopied ? 'copied' : 'btn-copy'} onClick={copyText}>{isCopied ? 'Copied!' : 'Copy'}</span>
        {isCopied && <Alert id='alert' variant='success'>URL is has been copied!</Alert>}
      </div>
    </div>
  )
}

export default UrlShort