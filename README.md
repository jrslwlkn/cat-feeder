# cat-feeder
Forgot to feed your cat? No problem, just press the 'feed' button.

Powered with 5V USB split between the servo and ESP8266. The microcontroller sends GET requests to the API to update the current state of the application. On every click the count of servo spins increases. Every 10 seconds the microcontroller gets current count and it clears the count on the server to zero. 
Some big updates are planned.

# Demo
[![Demo Video](https://img.youtube.com/vi/vq4g5Casx2k/0.jpg)](https://www.youtube.com/watch?v=vq4g5Casx2k){:target="_blank"}
