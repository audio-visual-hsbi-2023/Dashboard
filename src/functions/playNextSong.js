/**
 * @fileoverview This file defines the PlayNextSong function, which makes a POST request to the '/api/sendOscMessage' endpoint to request the next song to be played.
 */

// Defining the PlayNextSong function
// It takes a setStatusMessage function as a parameter from the SharedStateContext to set the status message
const PlayNextSong = (setStatusMessage) => {
    // Making a POST request to the '/api/sendOscMessage' endpoint
    fetch('/api/sendOscMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // Converting the response to JSON
    .then((response) => response.json())
    // Logging the data to the console
    .then((data) => console.log(data))
    // Catching any errors and logging them to the console
    .catch((error) => console.error('Error:', error));

    // Setting the status message to 'Next song requested.'
    setStatusMessage('Next song requested.');
    // Setting the status message to an empty string after 5 seconds
    setTimeout(() => {
      setStatusMessage('');
    }, 5000);
}
  
// Exporting the PlayNextSong function for use in other modules
export default PlayNextSong;