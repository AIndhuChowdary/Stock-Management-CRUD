# Stock Management CRUD

Stock Management CRUD is a web application built with React and Firebase that allows efficient tracking, updating, and maintenance of stock-related information.

## Features

- User Authentication: Secure login and registration system with role-based access control for admins and staff members.
- Inventory Management: Add, view, update, and delete products with details such as name, category, description, price, and quantity.
- Realtime Updates: Changes made to the inventory are reflected in real-time for all users.
- User-friendly Interface: Intuitive and responsive user interface for smooth navigation and seamless user experience.

## Tech Stack

- React: JavaScript library for building user interfaces.
- Firebase: Backend-as-a-Service (BaaS) platform for authentication and real-time data storage.

## Installation

1. Clone the repository:
   
   git clone https://github.com/AIndhuChowdary/stock-management-crud.git

2. Usage
    npm start
Access the application in your web browser at http://localhost:3000.
Register an admin account or use the provided admin credentials to log in.
Add, view, update, or delete products in the inventory through the user-friendly interface.

##Setup with your firebase firestore
1. Change to the project directory:
        cd stock-management-crud
2. Install dependencies
        npm install
3. Set up Firebase:

Create a Firebase project on the Firebase console (https://console.firebase.google.com).
Enable Firebase Authentication and choose the authentication method you prefer (e.g., Email/Password).
Set up Firebase Realtime Database or Cloud Firestore for data storage.

4. Configure Firebase credentials:

Create a .env file in the root directory of the project.
Add your Firebase configuration details in the .env file:


    REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
    REACT_APP_FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID

5. Start the development server:

      npm start
6. Usage
Access the application in your web browser at http://localhost:3000.
Register an admin account or use the provided admin credentials to log in.
Add, view, update, or delete products in the inventory through the user-friendly interface.


  
