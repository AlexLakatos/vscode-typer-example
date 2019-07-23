const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_PRIVATE_KEY
}, {debug: true});

const AUDIO_URL = 'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3';

nexmo.calls.stream.start(CALL_UUID, { stream_url: [AUDIO_URL], loop: 0 }, (err, res) => {
    if(err) { console.error(err); }
    else {
        console.log(res);
    }
  });

function stop_stream (){
    nexmo.calls.stream.stop(CALL_UUID, (err, res) => {
        if(err) { console.error(err); }
        else {
            console.log(res);
        }
    });
}

setTimeout(stop_stream, 5000); // delay 5 seconds
