/**
 * @file LoginButton.js is a file that contains the LoginButton function component.
 */
// Defining the LoginButton function component
// It accepts an object as a parameter, which contains an onClick function
function LoginButton({ onClick }) {
  // Returning the JSX for the component
  return (
    // A button element with various CSS classes applied
    // The onClick function is called when the button is clicked
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
      onClick={onClick}
    >
      { /* The button displays the text "Log In" */ } 
      Log In
    </button>
  );
}

// Exporting the LoginButton component for use in other modules
export default LoginButton;