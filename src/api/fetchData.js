export const fetchShortUrl = async url => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('url', url);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '373962ac3fmsh4679a588ff55ac4p1d7890jsn88de4fc1f6c4',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
    },
    body: encodedParams,
  };

  return fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
    .then(response => response.json())
    .then(response => {
      return response.result_url;
    })
    .catch(err => {
      alert('Enter a valid url please!');
      console.error(err);
    });
};
