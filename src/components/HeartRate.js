/**
 * @fileoverview This file contains the HeartRateMonitor function component, which connects to a heart rate monitor and displays the heart rate.
 * It uses the navigator.bluetooth API to open a window to select a Bluetooth device and connect to it. Only devices with the "heart_rate" service are shown.
 * This only works in the Chrome browser and on devices with Bluetooth capabilities.
 */
import React, { useState } from "react";

// Defining the HeartRateMonitor function component
function HeartRateMonitor({ }) {

    // Using the useState hook to create a state variable for heart rate and a function to update it
    const [heartRate, setheartRate] = useState(null);

    // Defining an async function to connect to the heart rate monitor
    const connectToHeartRateMonitor = async () => {
        try {
        // Requesting the device with the "heart_rate" service
        // Opens a window to select a Bluetooth device
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ["heart_rate"] }]
        });

        // Connecting to the GATT Server
        const server = await device.gatt.connect();
        // Getting the primary "heart_rate" service
        const service = await server.getPrimaryService("heart_rate");
        // Getting the "heart_rate_measurement" characteristic
        const characteristic = await service.getCharacteristic(
            "heart_rate_measurement"
        );

        // Starting notifications for the characteristic
        characteristic.startNotifications();
        // Adding an event listener for when the characteristic value changes
        characteristic.addEventListener(
            "characteristicvaluechanged",
            handleHeartRateMeasurement
        );
        } catch (error) {
            // Logging any errors to the console
            console.error("Failed to connect to heart rate monitor:", error);
        }
    };

    // Defining a function to handle heart rate measurements
    const handleHeartRateMeasurement = (event) => {
        // Getting the value from the event
        const value = event.target.value;
        // Getting the heart rate value from the value
        const heartRateValue = value.getUint8(1);
        // Logging the heart rate to the console
        console.log("Heart rate:", heartRateValue);
        // Updating the heartRate state variable
        setheartRate(heartRate);
    };

    // Returning the JSX for the component
    return (
        <div className="flex flex-col items-center space-y-4">
          { /* The button to connect to the heart rate monitor */ } 
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={connectToHeartRateMonitor}
          >
            Connect Heart Rate
          </button>
          { /* a cirle that displays the heart rate */ } 
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-center">Heart Rate:</h2>
            <div
                className="flex items-center justify-center w-48 h-48 rounded-full border-2 border-gray-300 text-5xl shadow-lg bg-red-200"
            >
                { /* If no device is connected the text 'Loading...' is displayed instead of the heart rate */ } 
                {heartRate !== null ? `Heart Rate: ${heartRate}` : "Loading..."}
            </div>
            </div>
        </div>
      );
    }
  
  // Exporting the HeartRateMonitor component for use in other modules
  export default HeartRateMonitor;