import http from 'k6/http';
import { check, sleep } from 'k6';
import { generateTimer } from '../Utilities.js'

export function OpenFirstItem() {
  const url = 'https://www.demoblaze.com/prod.html?idp_=1';
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Referer': 'https://www.demoblaze.com/index.html',
    'Cookie': 'user=9d72765e-e465-7d9c-386d-a6d153c2756b; tokenp_=U1lWRTE2ODQ5OTQ=',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
  };

  sleep(generateTimer(500, 1000) / 1000);

  const response = http.get(url, { headers });
}
