const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_PRIVATE_KEY
}, {debug: true});

const AUDIO_URL = 'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3';