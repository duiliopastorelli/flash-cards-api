# flash-cards-api
API service for flash-card project

```$ DEBUG=flash-cards-api:* npm start```

## Project setup
Create a nodemon.json file with the following properties:

```json
{
  "env": {
    "MONGO_URI": "[THE DB ADDRESS]",
    "MONGO_USER": "[THE DB USERNAME]",
    "MONGO_PW": "[THE DB PASSWORD]"
  }
}
```

## Endpoints

- /user/register/
    - POST - {nick:String (required)} - adds a new user