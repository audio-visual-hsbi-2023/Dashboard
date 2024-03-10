/**
 * @file Sidebar.js is a component for the sidebar of the application. 
 * It contains a button to open the sidebar that is displayed on the left side of the header bar and hidden when the sidebar is open.
 * If the sidebar is open it contains a button to close it, a Log in and Log out Button for Neurosity, and a button to request the next song.
 */

// Importing necessary hooks from 'react' and 'framer-motion' for react functions and animations
import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
// Importing necessary components and functions used in the Sidebar component
import handleLogin from '../functions/handleLogin';
import handleLogOut from '../functions/handleLogout';
import LoginButton from '../components/LoginButton';
import LogOutButton from '../components/LogOutButton';
import PlayNextSong from '../functions/playNextSong'; 
// Importing the SharedStateContext for sharing the status message across components
import SharedStateContext from '../SharedStateContext';

// Defining the animation variants for the sidebar
const sidebarVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: "-100%",
  },
};

// Defining the Sidebar function component
function Sidebar() {
  // Using the useContext hook to access the shared state
  const { statusMessage, setStatusMessage } = useContext(SharedStateContext);
  // Using the useState hook to create a state variable for whether the sidebar is open and a function to update it
  const [isOpen, setIsOpen] = useState(false);
  // Using the useRef hook to create a reference to the sidebar
  const sidebarRef = useRef();

  // Defining a function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    // If the click was outside the sidebar, close the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Using the useEffect hook to add an event listener for mousedown events when the component mounts
  // and remove it when the component unmounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Returning the JSX for the component
  return (
    <>
      { /* A button to open the sidebar that is hidden when the sidebar is open */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Schließen' : 'Öffnen'}
      </button>
      { /* The sidebar, which is a motion.div from 'framer-motion' */}
      { /* It has various CSS classes applied and uses the sidebarVariants for its animation */}
      { /* It initially renders as "closed" and animates to "open" when isOpen is true */}
      <motion.div
        ref={sidebarRef}
        className="fixed top-0 left-0 bottom-0 w-64 bg-gray-800 text-white p-4"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
      >
        { /* If the sidebar is open, it contains a button to close it */}
        {isOpen && (
        <button onClick={() => setIsOpen(!isOpen)}>
          Schließen
        </button>
      )}
        { /* The sidebar contains a h1 element with the text "Seitenleiste" */}
        <h1>Seitenleiste</h1>
        { /* The sidebar contains a LoginButton and a LogOutButton to Log in and out at Neurosity*/}
        <LoginButton onClick={handleLogin} />
        <LogOutButton onClick={handleLogOut} />

        { /* The sidebar contains a button to request the next song from the sound system*/}
        <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        onClick={() => PlayNextSong(setStatusMessage)}
        >
          Request Next Song
        </button>
      </motion.div>
    </>
  );
}

// Exporting the Sidebar component for use in other modules
export default Sidebar;