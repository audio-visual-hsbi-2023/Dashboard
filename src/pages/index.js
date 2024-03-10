/**
 * @fileoverview This is the main application file for the Next.js project.
 * It includes the main App component which renders the Header, Calm, HeartRateMonitor, and StatusMessage components.
 * The application state is shared between components using the SharedStateProvider, to provide the status message to the different components.
 */
import React, { useState } from 'react';
import Header from '../components/Header';
import Calm from '../components/Calm';
import HeartRateMonitor from "../components/HeartRate";
import { SharedStateProvider } from '../SharedStateContext';
import StatusMessage from '../components/StatusMessage';

// Main component of the application
export default function App() {
  // The application is wrapped with the SharedStateProvider to share the status message between components
  return (
    <SharedStateProvider>
      {/* Main container of the application */}
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        {/* Header component */}
        <Header />
        {/* Container for the Calm and HeartRateMonitor components */}
        <div className="flex space-x-10">
          {/* Calm component */}
          <Calm />
          {/* HeartRateMonitor component */}
          <HeartRateMonitor />
        </div>
        {/* StatusMessage component displays the current status message */}
        <StatusMessage />
      </div>  
    </SharedStateProvider>
  );
}