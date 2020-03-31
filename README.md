# cat-feeder
Forgot to feed your cat? No problem, just press the 'feed' button.

Powered with 5V USB split between the servo and ESP8266. The microcontroller sends GET requests to the API to update the current state of the application. On every click the count of servo spins increases. Every 10 seconds the microcontroller gets current count and it clears the count on the server to zero. 
Some big updates are planned.

Here is the fully working wifi-controlled working prototype: https://photos.app.goo.gl/jqratSscjoXZCBn96
