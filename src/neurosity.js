/**
 * @fileoverview This module is used to create a new instance of the Neurosity object from the Neurosity SDK to use it in the application.
 */

// Importing the Neurosity object from the Neurosity SDK
const { Neurosity } = require("@neurosity/sdk");

// Defining the device ID for the Neurosity device
const deviceId = "e6b7a8c3be3ec48260af79e20f096e6f";

// Creating a new instance of the Neurosity object with the device ID
const neurosity = new Neurosity({deviceId});

// Exporting the Neurosity instance for use in other modules
export default neurosity;