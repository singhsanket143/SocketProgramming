const net = require('net');

const client = net.createConnection({port: 8083}, serverStarted() => {
    console.log('Client connected');
    client.write("Hello from node client");
})

client.on('data', (data) => {
    console.log(data.toString());
})
