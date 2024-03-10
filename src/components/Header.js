/**
 * @file Header.js is the component for the header of the dashboard.
 * It contains the Sidebar component with the button to open the Sidebar and the title of the dashboard.
 */
import Sidebar from '../components/Sidebar';

// Defining the Header function component
function Header() {
    // Returning the JSX for the component
    return (
        // A header element with various CSS classes and styles applied
        <header className="fixed top-0 w-full p-4 bg-blue-500 text-white flex justify-between items-center">
            
            { /* A div element with a right margin applied */}
            <div style={{ marginRight: 'auto' }}>
                { /* Rendering the Sidebar component inside the div */}
                <Sidebar />
            </div>
            { /* A h1 element containing the title of the dashboard */}
            <h1>Audio Visual Computing Dashboard</h1>
        </header>
    );
}
  
// Exporting the Header component for use in other modules
export default Header;