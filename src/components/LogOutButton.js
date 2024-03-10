/**
 * @file LogOutButton.js is a file that contains the LogOutButton function component.
 */

// Defining the LogOutButton function component
// It accepts an object as a parameter, which contains an onClick function
function LogOutButton({ onClick }) {
  // Returning the JSX for the component
  return (
    // A button element with various CSS classes applied
    // The onClick function is called when the button is clicked
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
      onClick={onClick}
    >
      {/* The button displays the text "Logout" */ }
      Logout
    </button>
  );
}

// Exporting the LogOutButton component for use in other modules
export default LogOutButton;