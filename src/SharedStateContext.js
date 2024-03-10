/**
 * @file SharedStateContext.js is the file that contains the SharedStateProvider and SharedStateContext components.
 * The SharedStateProvider component is used to wrap the whole application to share status messages between components.
 */

import React, { useState, createContext } from 'react';

// Creating a new context for sharing state
const SharedStateContext = createContext();

// Defining a provider component for the shared state
export function SharedStateProvider({ children }) {
  // Using the useState hook to create a state variable and a function to update it, to be able to set the status message from everywhere
  const [statusMessage, setStatusMessage] = useState('');

  // Returning the provider component with the state and the update function as its value
  return (
    <SharedStateContext.Provider value={{ statusMessage, setStatusMessage }}>
      {/* Rendering the children inside the provider component, in this case this will be the whole page */}
      {children}
    </SharedStateContext.Provider>
  );
}

// Exporting the context for use in other components
export default SharedStateContext;