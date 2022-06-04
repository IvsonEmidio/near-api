![]()
<p align="center">
  <img src="https://i.imgur.com/QuKSeyu.png" alt="Sublime's custom image"/>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">An application that help you to understand the consciousness.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<!-- <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a> -->

## Technologies
- NestJS + Typescript
- TypeORM + PostgreeSQL
- Docker + Docker-compose

## Requirements
- NodeJS
- Docker

## How to install
- Clone this repo
- Open your terminal and type
```
npm install
```

After a while, all dependencies for run this project will be installed and you can follow next steps.

- Now, let's configure environments variables, type on your terminal the following command
```
cp .env.example .env
```
Open .env file inside project root folder and configure the environments variables

- Now start database server with docker command
```
docker-compose up -d
```
You can check whether everything are done looking at Docker client interface

- Now, you can connect to postgree database inside docker container and create the database.

Note: i've configured the docker-compose to arrive with `adminer`, to open adminer dashboard just open
```
http://localhost:8080/
```
with `adminer` dashboard you can create database that you configured on .env file

- Finally, you can start the server with this command
```
npm run start:dev
```

## Testing
- We use Jest in our tests and you can test the applicaton just typing 
```
npm run test:cov
```
on your terminal

## How to contribute?
- You can find bugs or dangerous code 
- You can open an issue ticket on 'issues' tab
- You can feel free to make this project better in any aspects
```
After contribute, you just need to submit an pull request.
```
