[![Build Status](https://travis-ci.com/JeffLabonte/mqtt_manager_client.svg?branch=master)](https://travis-ci.com/JeffLabonte/mqtt_manager_client)

# mqtt_manager_client

The client is configured using the the ...[UI Repo]... and the [mqtt_configuration_server](https://github.com/JeffLabonte/mqtt_microservice_conf_manager)
So depending on the configuration that were chosen, this client will log more or less date. The data
that are going to go through this client will be logged and stored in the MongoDB Database

## Requirements 

* MongoDB
* NodeJS 10.X
* Mosquitto