# Express Server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code updates during development.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-vxvuyevn.git
   cd express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloads, use the following command:

```
yarn start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

### Docker

To build and run the server using Docker, follow these steps:

1. Build the Docker image:

   ```
   docker build -t express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible on [http://localhost:8001](http://localhost:8001).

### License

This project is licensed under the MIT License. See the LICENSE file for details.