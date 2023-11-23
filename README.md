## Installation

```bash
$ git clone https://github.com/vjr2817/nest-movies-api.git
$ cd nest-movies-api
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 

- Movies Post,GetAll, Put, Delete, Search
- Set header user-role:'admin' for Post,Put,Delete 

```bash

# Movie Create request

$  curl --location 'http://localhost:300/movies/' \
    --header 'user-role: admin' \
    --header 'Content-Type: application/json' \
    --data '{
        "title":"Movie Title",
        "streamLink":"https://www.abcd.com",
        "rating":5,
        "genre":"Drama"
    }'

```

```bash

# Get All Movies

$  curl --location 'https://localhost:3000/movies/' 

```

```bash

# Get  Movies by search on title, genre

$  curl --location 'https://localhost:3000/movies?query=<search>' 

```

```bash

# Update movie

$ curl --location --request PUT 'https://localhost:3000/movies/<movie-mongodb-id>' \
--header 'user-role: admin' \
--header 'Content-Type: application/json' \
--data '{
    "streamLink":"https://www.abcd.com",
}'

```

```bash

# Delete movie

$ curl --location --request DELETE 'http://localhost:3000/<movie-mongodb-id>' \
--header 'user-role: admin'

```

## Stay in touch

- Author - [Jayanth](https://www.linkedin.com/in/vjayanthreddy/)


## License

Nest is [MIT licensed](LICENSE).
