import http from 'k6/http';
import { check, sleep } from 'k6';
import {generateTimer} from '../Utilities.js'

export function NavigateToLaptopsCategory () {
  const url = 'https://api.demoblaze.com/bycat';
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json",
    "Origin": "https://www.demoblaze.com",
    "Connection": "keep-alive",
    "Referer": "https://www.demoblaze.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "TE": "trailers"
  };

  const payload = {
    cat: "notebook",
  };

  sleep(generateTimer(500,1000)/1000);

  const response = http.post(url, JSON.stringify(payload), { headers });

  check(response, { 'status was 200': (r) => r.status == 200 });
}