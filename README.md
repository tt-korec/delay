# Delay Server

This project is a simple delay server built with Node.js and Express. It allows users to request a delayed response based on the specified number of seconds.

## Features

- Responds to HTTP GET requests with a delay specified by the user.
- Maximum delay time is capped at 600 seconds (10 minutes).
- Provides a simple HTML interface for usage instructions.

## Installation

To get started with the delay server, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd delay-server
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Usage

Start the server by running:

```
npm start
```

The server will be available at `http://localhost:3000`.

### Endpoints

- **GET /**: Displays the main page with usage instructions.
- **GET /delay/:seconds**: Returns a delayed response. Replace `:seconds` with the desired delay time (in seconds). For example, to request a 10-second delay, use:

  ```
  /delay/10
  ```

### Example

To test the delay functionality, you can use the following URL:

```
http://localhost:3000/delay/10
```

This will return a response after a 10-second delay.

## Deployment

This project can be deployed on Vercel. Ensure you have a `vercel.json` configuration file set up for routing and build settings.

## License

This project is licensed under the MIT License.