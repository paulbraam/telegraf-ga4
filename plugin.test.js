import TelegrafGA4 from './src/esm/index.mjs';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  measurement_id: process.env.GA_MEASUREMENT_ID,
  api_secret: process.env.GA_API_SECRET,
  client_id: process.env.GA_CLIENT_ID,
}

const analytics = new TelegrafGA4(config);
const events = [
  {
    name: 'share',
    params: {
      method: 'Telegram'
    }
  },
  {
    name: 'sign_up',
    params: {
      method: 'Telegram'
    }
  }
];

test('sends a debug event and returns an empty array on success', (done) => {
  analytics.event('login', {
    method: 'login'
  }, true).then(result => {
    expect(result).toStrictEqual([]);
    done();
  });
});

test('sends debug events and returns an empty array on success', (done) => {
  
  analytics.events(events, true).then(result => {
    expect(result).toStrictEqual([]);
    done();
  });
});

afterAll(done => done());