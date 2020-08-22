# seller-reviews-proxy
The proxy for the seller reviews component.

## Related Projects

- https://github.com/HRR47-FEC-Burke/seller-reviews
- https://github.com/HRR47-FEC-Burke/main-photo
- https://github.com/HRR47-FEC-Burke/similar-listings-and-news
- https://github.com/HRR47-FEC-Burke/sidebar

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Deployment)
4. [Deployment](#Deployment)

## Usage

> Example URL: http://localhost:3000/item/23

## Requirements

- Node.js v12.x
-- https://nodejs.org/

## Development

### Installing Dependencies
```sh
npm install
```

### Running Node Express Server

```sh
npm start
```

## Deployment

### Hosting Proxy On Docker
> Requirements:
> [Docker v19.03.12] (https://docs.docker.com/engine/install/)
> [Docker Compose v1.26.2] (https://docs.docker.com/compose/install/)

- Run ```docker-compose build``` to build a Docker image
- Run ```docker-compose up -d``` to start running the service on port 80
- Run ```docker-compose down``` to stop the service

> Running ```docker-compose up -d``` the first time will automatically build an image.
> However, if you want to make any changes afterwards, you need to run ```build```,
> take down the image with ```down```, and then put up the new image with ```up -d```.

> If you host the service in a shell, Docker and Nodejs will not work out of the box.
> You need to install them on your shell before you can make use of the Dockerfile and ```package.json```.
