#include <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <Servo.h>
#include "secret.h"


const int maxMealsAtOnce = 5;

Servo servo;


void runServo() {
  servo.write(90);
  delay(1000);

  servo.write(0);
  delay(1000);
}


void setup() {
  delay(1000);
  
  servo.attach(5);
  servo.write(0);
  
  delay(1000);
  
  Serial.begin(115200);
  WiFi.mode(WIFI_OFF);
  
  delay(1000);
  
  WiFi.mode(WIFI_STA);
  
  WiFi.begin(ssid, password);
  Serial.println("");
 
  Serial.print("Connecting");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
 
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}



void loop() {
  HTTPClient http; 
  
  http.begin(host, fingerprint);
  
  int httpCode = http.GET();

  if (httpCode == 200) {
    String json = http.getString();
    StaticJsonDocument<200> doc;
    DeserializationError error = deserializeJson(doc, json);

    if (error) {
      Serial.println("Json error occurred.");
      return;
    }
    
    String mealsJson = doc["meals"];
    int meals = mealsJson.toInt();
    int n = meals < maxMealsAtOnce ? meals : maxMealsAtOnce;

    for (int i = 0; i < n; i++) {
      runServo();
    }
  }

 
  http.end();
  delay(10000); 
}
