# qacoders-nodejs-backend

API developed using Node JS, Express and MongoDB.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (this project was built with version 20.12.0)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/tadeu-dutra/qacoders-nodejs-backend.git

   npm install
```
2. Navigate to the project directory:

```bash
   cd qacoders-nodejs-backend
```

3. Install the dependencies:

```bash
npm install
```

## Running the MongoDB Container

Run the following command to start a new MongoDB container named `mongodb`. It maps the MongoDB port (27017) to the same port on the host, allowing you to connect to the MongoDB instance from your local machine.

```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

## Accessing MongoDB

Once the container is running, you can access MongoDB through the following command:

```bash
docker run -it --network container:mongodb mongo mongosh
```

## Running the Project

To start the application in development mode, use the following command:

```bash
npm run dev
```

Your application will be running on `http://localhost:3003` (or the port specified in your project).


## Endpoints to explore:

```bash
/api/users
/api/users/register
/api/users/login
/api/students
```

## MongoDB commands to explore:

```bash
db.version()
show dbs
use qacoders_database
show collections
db.students.find()
db.users.find()
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/MyFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/MyFeature).
5. Open a pull request.