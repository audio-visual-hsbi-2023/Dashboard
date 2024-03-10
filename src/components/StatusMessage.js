/**
 * @file StatusMessage.js is a file that contains the StatusMessage function component.
 * It displays the status message shared across components using the SharedStateContext.
 */
import React, { useContext } from 'react';
// Importing the SharedStateContext for sharing state across components
import SharedStateContext from '../SharedStateContext';

// Defining the StatusMessage function component
function StatusMessage() {
  // Using the useContext hook to access the shared state
  const { statusMessage } = useContext(SharedStateContext);

  // Returning the JSX for the component
  // A paragraph element with a CSS class changing text color to red and the statusMessage displayed as its content
  return <p className="text-red-500">{statusMessage}</p>;
}

// Exporting the StatusMessage component for use in other modules
export default StatusMessage;