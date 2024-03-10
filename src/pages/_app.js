/**
 * @fileoverview This file defines the MyApp component, which is the root component for the application.
 */

// Importing the global styles to make them available to all components
import '../styles/globals.css'

// Defining the MyApp function component
// It takes a Component and pageProps as props
function MyApp({ Component, pageProps }) {
  // Returning the Component with its pageProps spread onto it
  return <Component {...pageProps} />
}

// Exporting the MyApp component for use in other modules
export default MyApp