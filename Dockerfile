FROM node:11.15.0-alpine

ENV LANG C.UTF-8 \
    EDITOR vim \
    TZ Asia/Tokyo

WORKDIR /var/www
ADD ./ /var/www/
RUN npm i
