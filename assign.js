const fs = require('fs');

// Read and parse the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        // Initialize an object to store the count of each value
        const valueCounts = {};

        // Iterate through the JSON data and count occurrences of each value
        for (const key in jsonData) {
            const value = jsonData[key];
            if (valueCounts[value]) {
                valueCounts[value]++;
            } else {
                valueCounts[value] = 1;
            }
        }

        // Print the results to the console
        for (const value in valueCounts) {
            console.log(`${value}: ${valueCounts[value]}`);
        }
    } catch (parseError) {
        console.error('Error parsing the JSON data:', parseError);
    }
});

