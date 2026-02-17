# Anythink Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart on code changes using Nodemon.

## Project Structure

```
anythink-express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # Configuration file for npm
├── yarn.lock           # Locks the versions of dependencies
├── nodemon.json        # Configuration for Nodemon
├── Dockerfile          # Instructions to build the Docker image
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore by Git
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-i8yo3ux9.git
   cd anythink-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic restarts on code changes, run:

```
yarn start
```

The server will be accessible at `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t anythink-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 anythink-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.