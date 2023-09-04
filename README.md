# Serianu Gaming App

This is a simple React-Express application that demonstrates how to build a full-stack web application.

## Frontend (React)

### Technologies Used
- React: A JavaScript library for building user interfaces.
- Vite: A tool to bootstrap and restart a React application quickly.
- Tailwind CSS: A utility-first CSS framework for rapidly building modern websites.
- Axios: A promise-based HTTP client for making requests to the backend.
- React Router: A library for routing in a React application.
- React-Hook-Form: A popular Library for managing and validating forms in React
- Framer-Motion: A simple and powerful Javascript animation library

### Getting Started (Frontend)

1. Navigate to the `client` directory:

``` cd frontend```

2. Install the required dependencies:

``` npm install```

3. Start the React development server:
 
``` npm run dev```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app in action.

## Backend (Express)

### Technologies Used
- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A minimal and flexible Node.js web application framework.
- PostgreSQL: A popular Open Source relational database for storing data.
- Joi: Backend data validation library

### Getting Started (Backend)

1. Navigate to the `api` directory:

``` cd api```

2. Install the required dependencies:

```npm install```

3. Set up your PostgreSQL database and configure the connection in `api/model/postgres.js`.

4. Set up your .env file at the base of the /api directory and declare the necessary variables.

5. Start the Express server:

```npm start```


## Directory Structure

- `client/`: Contains the React frontend application.
- `api/`: Contains the Express backend server.

## License

This project is licensed under the MIT License.
