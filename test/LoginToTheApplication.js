import http from 'k6/http';
import { check, sleep } from 'k6';
import { generateTimer } from '../Utilities.js'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";

const csvData = new SharedArray("another data name", function () {
  return papaparse.parse(open('../credentials.csv'), { header: true }).data;
});

let username;
let authToken;

export function LoginToTheApplication(vu) {

  const url = 'https://api.demoblaze.com/login';
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Origin': 'https://www.demoblaze.com',
    'Referer': 'https://www.demoblaze.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'TE': 'trailers',
  };

  username = csvData[vu - 1].Username;

  const payload = {
    username: username,
    password: 'U1lWRTEyMzQ=',
  };

  sleep(generateTimer(2000, 5000) / 1000);

  const response = http.post(url, JSON.stringify(payload), { headers });

  check(response, {
    'status was 200': (r) => r.status == 200
  });

  check(response, 
    {
      'auth token received:' : (r) => r.body.includes('"Auth_token:')
    });

  authToken = response.body.substring(13, 29);
}

export function GetUsername() {
  return username;
}

export function GetToken() {
  return authToken;
}