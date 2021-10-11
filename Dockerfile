FROM php:7.4-apache

LABEL maintainer="Pallavi Ratra"

RUN docker-php-ext-install pdo_mysql

#Copy public folder to working directory
COPY app /srv/app

#Set working directory in the image
WORKDIR /srv/app

#Apache configuration
COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

#PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/php.ini