/**
 * @fileoverview This file defines the handleLogOut async function, which logs out of the Neurosity device.
 */
import neurosity from '../neurosity';

// Defining the handleLogOut async function
// It takes the neurosity object as a parameter defined in the neurosity.js module
const handleLogOut = async () => {
    // Attempting to log out of neurosity
    // If an error occurs, it is logged to the console and thrown
    await neurosity.logout().catch((error) => {
      console.log(error);
      throw new Error(error);
    });

    // Logging "Logged out" to the console
    console.log("Logged out");
};

// Exporting the handleLogOut function for use in other modules
export default handleLogOut;