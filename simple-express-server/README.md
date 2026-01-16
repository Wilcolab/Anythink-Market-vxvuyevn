# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js         # Entry point of the application
├── .dockerignore          # Files to ignore when building the Docker image
├── Dockerfile             # Instructions to build the Docker image
├── package.json           # Project metadata and dependencies
├── .gitignore             # Files to ignore in Git
└── README.md              # Project documentation
```



### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-vxvuyevn.git
   cd Anythink-Market-vxvuyevn/express-server
   ```

2. Install dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:

   ```
   docker build -t express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License. See the LICENSE file for details.