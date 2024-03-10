/**
 * @fileoverview This file contains the handleLogin function, which logs in to neurosity 
 * with the email and password from the environment variables.
 */
import neurosity from '../neurosity';

// Getting the email and password from the environment variables
const email = process.env.NEXT_PUBLIC_EMAIL;
const password = process.env.NEXT_PUBLIC_PASSWORD;

// Defining the handleLogin async function
const handleLogin = async () => {
    // Attempting to log out of neurosity to ensure the user is logged out
    // Without logging out first, the log in request fails
    // If an error occurs, it is logged to the console and thrown
    await neurosity.logout().catch((error) => {
      console.log(error);
      throw new Error(error);
    });

    // Attempting to log in to neurosity with the email and password
    // If an error occurs, it is logged to the console and thrown
    await neurosity
      .login({
        email,
        password
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });

    // Logging "Logged in" to the console
    console.log("Logged in");
};

// Exporting the handleLogin function for use in other modules
export default handleLogin;