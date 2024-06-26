﻿# Popular Topics Web Application

This is a web application that displays popular topics and allows users to switch between light mode and dark mode. The data is fetched from a MongoDB database and displayed on the page.

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/popular-topics.git
    cd popular-topics
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root directory of the project with the following variables:

    ```plaintext
    MONGO_URI=<your_mongo_uri>
    MONGO_DB_NAME=<your_mongo_db_name>
    MONGO_COLLECTION_NAME=<your_mongo_collection_name>
    EMAIL=<your_email>
    YOUR_USERNAME=<your_twitter_username>
    PASSWORD=<your_password>
    ```

## Running the Application

1. **Start the server**:
    ```bash
    node index
    ```

2. **Navigate to the application**:
    Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

- `index.html`: The main HTML file for the application.
- `styles.css`: The CSS file containing the styles for the application.
- `script.js`: The JavaScript file containing the client-side logic.
- `index.js`: The main server file (assumed to be present) for handling backend logic.
- `.env`: The file containing environment variables (not included in the repository for security reasons).

## Additional Notes

- Ensure that your MongoDB instance is running and accessible with the provided `MONGO_URI`.
- Replace placeholder values in the `.env` file with your actual credentials and database details.
![Screenshot (229)](https://github.com/akshatmishra25/assignment-selenium/assets/106366272/e226137a-9495-46b0-97f1-6f96377dfa54)
