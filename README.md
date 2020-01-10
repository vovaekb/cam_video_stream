# cam_video_stream
Simple web application with video streaming and displaying rectange over it.

## Implementation details
[hls.js](https://github.com/video-dev/hls.js/) library is used for streaming video from remote host.

## Run application
To run the application simply open the index.html file in a browser. You need to allow Cross-origin resource sharing (CORS) in your browser. To run Chrome with enabled CORS on Windows use command: 
```bash
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```
