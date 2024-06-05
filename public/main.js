function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️'; // Sun icon for light mode
    } else {
        themeIcon.textContent = '🌙'; // Moon icon for dark mode
    }
}

async function executeScript() {
    document.getElementById('output').textContent = 'Executing script, please wait...';

    try {
        const response = await fetch('/execute-script');
        const result = await response.json();

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <p>The hottest topics as of ${new Date(result.dateTime).toLocaleString()}:</p>
            <ul>
                ${result.topics.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Query IP address: ${result.ipAddress}</p>
            <p>JSON data from MongoDB:</p>
            <pre id="json-data">${JSON.stringify(result.mongoRecord, null, 2)}</pre>
            <p><a href="javascript:void(0);" onclick="executeScript()">Run the query again</a></p>
        `;
    } catch (error) {
        document.getElementById('output').textContent = 'Error executing script. Please try again later.';
    }
}
