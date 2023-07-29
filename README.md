### Step 1: Install Node.js
- Download the Node.js installer from the official website: [Node.js v18.17.0 (64-bit)](https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi).
- Run the installer and follow the installation instructions.

### Step 2: Clone the "wilcar-pm-app" Repository
Open a terminal or command prompt and execute the following command to clone the repository:
`git clone https://github.com/farildev/wilcar-pm-app/`

### Step 3: Install Project Dependencies
Change into the "wilcar-pm-app" directory and run the following command to install the required dependencies listed in `package.json`:
`cd wilcar-pm-app`
`npm install`

### Step 4: Set Up the JSON Server
- Make sure you have installed the `json-server` globally by running `npm install -g json-server`.
- Start the JSON server to serve the project's mock data from `db.json` file on port 3001:
`json-server --watch db.json --port 3001`

### Step 5: Run the React App
Open a new terminal or command prompt in the "wilcar-pm-app" directory (if you haven't already) and run the following command:
`npm start`

### Step 6: Access the Application
Once the React app is running, you can access it by visiting `http://localhost:3000` in your web browser. The application will interact with the JSON server running at `http://localhost:3001` to fetch and manipulate data.

Make sure to keep the JSON server running in one terminal and the React app running in another terminal to use the application effectively.
