#!/bin/bash
apt-get update -q && apt-get install -qy  ruby 
erb /app/servers.conf.erb > /etc/nginx/conf.d/default.conf
