# Simple demo to reproduce meteor server restart with Vue projects

The problem is that when the server imports anything from the client, like app.js, it gets restarted whenever something changes for the client.
