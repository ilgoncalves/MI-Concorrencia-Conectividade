#include <ArduinoJson.h>

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>

#include <SocketIoClient.h>

#define USE_SERIAL Serial

StaticJsonBuffer<200> jsonBuffer;
SocketIoClient webSocket;
HTTPClient http;
using namespace std;

String BASE_URL = "http://192.168.43.206:3000/";
const char *socketServer = "192.168.43.206";
const int socketPort = 3000;
const char *ssid = "lichtgeschwindigkeit";
const char *password = "nichtVergessen";

void wifiUploadCode(){
   ArduinoOTA.setHostname("Goncalves-Esp");
  ArduinoOTA.onStart([]() {
    Serial.println("Inicio...");
  });
  ArduinoOTA.onEnd([]() {
    Serial.println("nFim!");
  });
  ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
    Serial.printf("Progresso: %d%%r", (progress / (total / 100)));
  });
  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("Erro [%u]: ", error);
    if (error == OTA_AUTH_ERROR) Serial.println("Autenticacao Falhou");
    else if (error == OTA_BEGIN_ERROR) Serial.println("Falha no Inicio");
    else if (error == OTA_CONNECT_ERROR) Serial.println("Falha na Conexao");
    else if (error == OTA_RECEIVE_ERROR) Serial.println("Falha na Recepcao");
    else if (error == OTA_END_ERROR) Serial.println("Falha no Fim");
  });
  ArduinoOTA.begin();
  Serial.println("Pronto");
  Serial.print("Endereco IP: ");
  Serial.println(WiFi.localIP());
}

void configWifi(){
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("Conexao falhou! Reiniciando...");
    delay(5000);
    ESP.restart();
  }
}

void callback(const char * payload, size_t length) {
    Serial.print("Mensagem: ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println(" ");
    if (payload[0] == '0'){
        Serial.println("Desligando luz");
        digitalWrite(LED_BUILTIN, HIGH);
    }
    if (payload[0] == '1'){
        Serial.println("Ligando luz");
        digitalWrite(LED_BUILTIN, LOW);
    }
}

void connection(const char * payload, size_t length) {
  Serial.println("JUST CONNECTION");
}

void setup() {
  USE_SERIAL.begin(115200);
  USE_SERIAL.setDebugOutput(true);

  USE_SERIAL.println();
  USE_SERIAL.println();
  USE_SERIAL.println();
  pinMode(LED_BUILTIN, OUTPUT);
  
  configWifi();
  String body = "topicName=test&description_device=esp8266";
//  String body = "topicName=test2&description_device=esp8266";
  String response = httpRequest("subscribe",body);
  
  JsonObject& root = jsonBuffer.parseObject(response.c_str());

  
  String id = root["_id"];
  Serial.println("Device Id: " + id);
  wifiUploadCode();
  
  webSocket.begin(socketServer, socketPort,strcat("/socket.io/?transport=websocket&device_id=",id.c_str()));
  webSocket.on("connection", connection);
  
  webSocket.on("a", callback);
}

String httpRequest(String endpoint,String body){
  String payload = makeRequest(endpoint,body);
  if (!payload) {
    return "";
  }
  return payload;
}

String makeRequest(String endpoint,String body){
  http.begin(BASE_URL + endpoint + "?" + body);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  int httpCode = http.POST("");
  if (httpCode < 0) {
    Serial.println("request error - " + httpCode);
    return "erro 1";
  }
  if (httpCode != HTTP_CODE_OK) {
    return "erro 2";
  }
  String response =  http.getString();
  http.end();

  return response;
}

void loop() {
  ArduinoOTA.handle();
  webSocket.loop();
}
