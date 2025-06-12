// Define an asynchronous function to fetch and display user data.
// Using 'async' keyword allows us to use 'await' inside this function,
// making asynchronous code look and behave more like synchronous code.
async function fetchUserData() {
    // Define the URL of the API endpoint.
    // This API provides a list of placeholder users.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Get a reference to the HTML element where we will display the data.
    // This element has the ID 'api-data' in our HTML.
    const dataContainer = document.getElementById('api-data');

    // Use a try-catch block to handle potential errors during the fetch operation.
    // 'try' block contains the code that might throw an error.
    try {
        // Fetch data from the specified API URL.
        // 'await' pauses the execution of this function until the fetch request
        // completes and a response is received.
        const response = await fetch(apiUrl);

        // Check if the network request was successful.
        // If response.ok is false, it means there was an HTTP error (e.g., 404, 500).
        if (!response.ok) {
            // If the response is not OK, throw an error to be caught by the 'catch' block.
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response body as JSON.
        // 'await' pauses execution until the JSON parsing is complete.
        const users = await response.json();

        // Clear the initial "Loading user data..." message from the container.
        dataContainer.innerHTML = '';

        // Create a new unordered list (<ul>) element.
        const userList = document.createElement('ul');

        // Loop through each user in the 'users' array.
        // For each user, we will create a list item and append it to our userList.
        users.forEach(user => {
            // Create a new list item (<li>) element for the current user.
            const listItem = document.createElement('li');
            
            // Set the text content of the list item to the user's name.
            // Each user object has a 'name' property.
            listItem.textContent = user.name;
            
            // Append the newly created list item to the unordered list.
            userList.appendChild(listItem);
        });

        // After all users have been added to the userList, append the entire list
        // to the dataContainer div on the webpage.
        dataContainer.appendChild(userList);

    } catch (error) {
        // If any error occurs in the 'try' block (e.g., network error, JSON parsing error),
        // this 'catch' block will execute.
        
        // Clear any previous content in the data container.
        dataContainer.innerHTML = '';
        
        // Display an error message to the user.
        dataContainer.textContent = 'Failed to load user data. Please try again later.';
        
        // Log the error to the console for debugging purposes.
        console.error('Error fetching user data:', error);
    }
}

// Add an event listener to the document.
// The 'DOMContentLoaded' event fires when the initial HTML document has been
// completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// This ensures that our JavaScript code runs only after the 'api-data' element is available in the DOM.
document.addEventListener('DOMContentLoaded', fetchUserData);
