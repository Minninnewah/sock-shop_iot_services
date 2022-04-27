# sock-shop_iot_services

GitHub repository for the temperature sensor simulation sensor as well as the iot-handler and a evil iot-handler service. This services are used in combination with the adapted sock-shop environment (https://github.com/Minninnewah/microservices-demo).

Thge docker container can be built with the following commands from the base directory:
- ```docker build ./temperature_sensor/ -t minninnewah/temperature_sensor```
- ```docker build ./IoT_handler/ -t minninnewah/iot_handler```
- ```docker build ./IoT_handler_evil/ -t minninnewah/iot_handler_evil```

Afterwards, thexy have to been push to the DockerHub.
