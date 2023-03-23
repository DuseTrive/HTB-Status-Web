import fetch from 'node-fetch';

app.get('/HTB', async (request, response) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        authority: 'www.hackthebox.com',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        origin: 'https://app.hackthebox.com',
        referer: 'https://app.hackthebox.com/',
        'sec-ch-ua': '^\^Chromium^^;v=^\^110^^, ^\^Not',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '^\^Windows^^',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63'
      }
    };

    const fetchApi = await fetch('https://www.hackthebox.com/api/v4/profile/379163', options);
    const HTBresponse = await fetchApi.json();
    response.json(HTBresponse);
    console.log(HTBresponse);
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
