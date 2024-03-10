/**
 * @fileoverview This file is an API route that sends an OSC message to the sound system server with this specified IP address and port
 */
import { Client as OscClient } from 'node-osc';

// It takes a request and response as parameters
export default (req, res) => {
  // Creating a new OSC client with the specified IP address and port of the sound system server
  const client = new OscClient('172.20.10.4', 8999);
  
  // Sending a command to the OSC server to request a new song
  // The command is '/command' and the argument is "NEXT_SONG;_;0$"
  client.send('/command', "NEXT_SONG;_;0$", () => {
    // Logging 'Next song requested' to the console
    console.log('Next song requested');
    
    // Closing the client connection
    client.close();
    
    // Sending a response with a status of 200 and a JSON object with a status of 'Message sent'
    res.status(200).json({ status: 'Message sent' });
  });
};