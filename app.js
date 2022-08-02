const express = require('express');
const app = express();

const { proxy, scriptUrl } = require('rtsp-relay')(app);

const handler = proxy({
//   url: `rtsp://admin:888888@10.10.9.149:8554/profile0`,
  url: `rtsp://admin:888888@192.168.216.192:8554/profile0`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});

// the endpoint our RTSP uses
app.ws('/api/stream', handler);

// Declare Variable
const port = 3003
const content = 'content'

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render(
        content, {
            title: 'Inovasi Tanjung Demong',
            content: 'contents/homePage',
            scriptUrl,
        }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})