/**
 * @fileoverview Calm component of the dashbaord. It handles all functions related to the calm state.
 * It displays a button to subscribe to the calm() function of the Neurosity instance and displays the probability of the calm state in a circle.
 * The probality is shows the calmness of the user between 0 and 1. A higher value indicates a higher probability of calmness.
 * A low value indicates a higher probability of stress.
 * It also logs the time and the probability to the console, and calculates the average probability over the last minute. 
 * If the average probability is less than 0.3 for more than one minute, it calls the PlayNextSong function to request the next song from the sound system.
 * It also sets a status message to 'Next song requested.' and clears it after 5 seconds.
 * The next song can be requested only once every minute.
 */
import React, { useState, useContext } from "react";
// Importing the PlayNextSong function from the 'functions' directory
import PlayNextSong from '../functions/playNextSong';
// Importing the Neurosity instance from the 'neurosity' module
import neurosity from '../neurosity';
// Importing the SharedStateContext for sharing the status message across components
import SharedStateContext from '../SharedStateContext';

// Defining the Calm component
function Calm() {
    // Using the useState hook to create a state variable for calm and a function to update it
    const [calm, setCalm] = useState(null);
    // Using the useContext hook to access the shared state and the function to update it
    const { statusMessage, setStatusMessage } = useContext(SharedStateContext);

    // Defining an async function to be called when the button is clicked to subscribe to the calm() function
    const onClick2 = async () => {
        // Logging a message to the console when connecting to calm
        console.log("connecting to calm...");
        // Subscribing to the calm() function of the Neurosity instance
        neurosity.calm().subscribe((calm) => {
          // Logging the probability of the calm state to the console
          console.log(calm.probability);
          // Updating the calm state with the new probability to be displayed in the circle
          setCalm(calm.probability);
          // logs the time to the console to see the frequency of updates of the calm state
          logTime();
          // Adding the current timestamp and the probability to the probabilities array
          probabilities.push([Date.now(), calm.probability]);
          // Calculating the average probability over the last minute
          const averageProbability = calculateAverage();
          // Logging the average probability to the console
          console.log(`Average probability over the last minute: ${averageProbability}`);
        
          // Removing data older than one minute from the probabilities array
          probabilities = probabilities.filter(([timestamp]) => timestamp > Date.now() - 60000);
        });
    };

    // Defining a function to log the current time to the console
    const logTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      console.log(`Current time: ${currentTime}`);
    };
  
    // Initializing an array to store probabilities
    let probabilities = [];
    
    // Defining a function to calculate the average probability over the last minute
    const calculateAverage = () => {
      const oneMinuteAgo = Date.now() - 60000; // 60000 milliseconds = 1 minute
      const lastMinuteData = probabilities.filter(([timestamp]) => timestamp > oneMinuteAgo);
      const sum = lastMinuteData.reduce((acc, [_, val]) => acc + val, 0);
      const average = sum / lastMinuteData.length;
      return average;
    };
  
    // Initializing a variable to store the interval ID
    let checkInterval;
  
    // Defining a function to check the average probability and take action if it's less than 0.3
    const checkAverageProbability = () => {
      const averageProbability = calculateAverage();
      if (averageProbability < 0.3) {
        logTime();
        console.log('The average probability over the last minute is less than 0.3');
  
        // Calling the PlayNextSong function and passing setStatusMessage as an argument
        PlayNextSong(setStatusMessage);
  
        // If an interval has been set, clear it
        if (checkInterval) {
          clearInterval(checkInterval); // Stop the current interval
        }
            
        // Setting a timeout to restart the interval after 1 minute to avoid requesting the next song every second until the average probability is greater than 0.3
        setTimeout(() => {
          checkInterval = setInterval(checkAverageProbability, 1000); // Restart the interval after 1 minute
        }, 59000); // Schedule the check for 1 minute (59000 milliseconds plus 1000 from the interval) from now
      }
    };
    
    // Setting a timeout to start the check every second after the first minute
    setTimeout(() => {
      checkInterval = setInterval(checkAverageProbability, 1000); // Schedule the check for every second after the first minute
    }, 59000); // Schedule the first check for 1 minute (59000 milliseconds plus 1000 from the interval) from now

    // Returning the JSX for the component
    return (
    <div className="flex flex-col items-center space-y-4">
        { /* The button to subscribe to calm and start the function of monitoring the patients stress level */ } 
        <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        onClick={onClick2}
        >
        Subscribe Calm
        </button>
        <div className="flex flex-col items-center space-y-2">
            <h2 className="text-center">Calm:</h2>
            { /* a cirle that displays the calm state */ } 
            <div
                className="flex items-center justify-center w-48 h-48 rounded-full border-2 border-gray-300 text-5xl shadow-lg bg-blue-200"
            >
                { /* If no device is connected the text 'Loading...' is displayed instead of the calm state */ }
                {calm !== null ? `${calm.toFixed(2)}` : "Loading..."}
            </div>
        </div>
    </div>
    );
}

// Exporting the Calm component for use in other modules
export default Calm;