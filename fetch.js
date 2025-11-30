// Step 1: Fetch data from URL
fetch("https://jsonplaceholder.typicode.com/posts")

    // Step 2: Convert response to JSON
    .then(function (response) {
        return response.json();
    })

    // Step 3: Get the actual data
    .then(function (data) {
        console.log("✅ Data received:");
        console.log(data);    // array of posts
    })

    // Step 4: Catch errors
    .catch(function (error) {
        console.log("❌ Error:", error);
    });
