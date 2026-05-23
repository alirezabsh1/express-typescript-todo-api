Here’s a clean `README.md` for your project:

````md
# Express TypeScript Todo API

A simple Todo CRUD API built with Express, TypeScript, TypeORM, and PostgreSQL.

## Features

- Express.js server
- TypeScript support
- PostgreSQL database
- TypeORM integration
- Todo CRUD operations
- Service/controller/route structure
- Environment variable configuration
- Centralized error middleware
- REST Client support for API testing

## Tech Stack

- Node.js
- Express.js
- TypeScript
- TypeORM
- PostgreSQL
- dotenv

## Project Structure

src/
  config/
    data-source.ts
  controllers/
    todo.controller.ts
  entities/
    todo.entity.ts
  middlewares/
    async.middleware.ts
    error.middleware.ts
  routes/
    todo.routes.ts
  services/
    todo.service.ts
  types/
    todo.types.ts
  app.ts
  server.ts
````

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/express-typescript-todo-api.git
cd express-typescript-todo-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=todo_db
```

You can use `.env.example` as a reference.

## Database Setup

Make sure PostgreSQL is running locally.

Create the database:

```sql
CREATE DATABASE todo_db;
```

The project currently uses TypeORM `synchronize: true`, so the `todos` table will be created automatically in development.

## Running the Project

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run the compiled project:

```bash
npm start
```

## API Endpoints

Base URL:

```txt
http://localhost:3000
```

### Root

```http
GET /
```

Response:

```json
{
  "message": "Todo API is running"
}
```

### Create Todo

```http
POST /api/todos
```

Body:

```json
{
  "title": "Learn Express with TypeScript",
  "completed": false
}
```

### Get All Todos

```http
GET /api/todos
```

### Get Todo By ID

```http
GET /api/todos/:id
```

### Update Todo

```http
PATCH /api/todos/:id
```

Body:

```json
{
  "completed": true
}
```

### Delete Todo

```http
DELETE /api/todos/:id
```

## Testing with VS Code REST Client

Create a `requests.http` file:

```http
### Root test
GET http://localhost:3000


### Create todo
POST http://localhost:3000/api/todos
Content-Type: application/json

{
  "title": "Learn Express with TypeScript",
  "completed": false
}


### Get all todos
GET http://localhost:3000/api/todos


### Get one todo
GET http://localhost:3000/api/todos/1


### Update todo
PATCH http://localhost:3000/api/todos/1
Content-Type: application/json

{
  "completed": true
}


### Delete todo
DELETE http://localhost:3000/api/todos/1
```

## Notes

This project is currently configured for development.

For production, consider replacing:

```ts
synchronize: true
```

with TypeORM migrations.

## License

ISC

```
```
