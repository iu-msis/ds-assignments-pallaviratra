FROM php:7.4-apache

LABEL maintainer="Pallavi Ratra"

#Copy public folder to working directory
COPY app /srv/app

#Set working directory in the image
WORKDIR /srv/app

#Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf