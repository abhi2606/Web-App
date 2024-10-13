// API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch API data
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display API data
function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    data.forEach((post) => {
        const postHTML = `
            <div class="post">
                <h2 class="post-title">${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
        dataContainer.insertAdjacentHTML('beforeend', postHTML);
    });
}

// Fetch and display API data
fetchData().then((data) => displayData(data));