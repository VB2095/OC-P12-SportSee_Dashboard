# SportSee Dashboard

SportSee is a dashboard application that allows users to track their sports activities. This project was created using React and Vite for the front-end and Node.js for the back-end. The back-end can be launched using either Docker or npm/node.

## Installation

### Prerequisites

- Node.js (version 12.18)
- Yarn or npm

If you are working with multiple versions of Node.js, we recommend you install nvm, a tool that allows you to manage Node.js versions easily.

### General Instructions

1. Fork the repository
2. Clone the repository on your computer.

### Front-end

1. Open a terminal and go to the `client` directory. (cd client)
2. In the `client` directory, run `yarn` or `npm install` command to install dependencies.
3. Run `yarn dev` or `npm run dev` command to start the front-end.

### Back-end

#### Without Docker

1. In the project root directory, run `yarn` or `npm install` command to install dependencies.
2. Run `yarn dev` or `npm run dev` command to start the back-end. The backend should be running on port localhost/3000. If you want to change the port, you can do so by editing the `PORT` variable in the `.env` file.

#### With Docker

1. Make sure you have Docker Desktop installed.
2. In the project root directory, run the following command to build your Docker image: `docker image build --no-cache -t micro-api .`
3. Run the following command to create your Docker container and run your image on port 3000: `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` or `docker container run --name micro-api -p 3000:3000 -dt micro-api npm run dev`
4. To stop the container, run `docker container stop micro-api`.
5. To delete the container, run `docker container rm micro-api`.

### VS Code and Container Remotes

If you have VS Code installed, you can easily launch your project in a Docker environment. Here's how:

1. Install the Remote Development extension in VS Code.
2. Click on the "Reopen in Container" button.
3. Once in the container, run the `yarn dev` or `npm run dev` command.

For more information about the backend you can check this repository: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Usage

Once the application is running, open a web browser and go to http://127.0.0.1:5173/ (or whatever adress is on your client terminal) to view the website. Choes a user to view the dasbhoard. The dashboard allows users to view their activity data and statistics.

## Contributing

We welcome contributions to the SportSee Dashboard project. Please submit a pull request with your changes.
