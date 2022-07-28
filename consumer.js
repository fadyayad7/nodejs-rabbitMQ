const amqp = require('amqplib');

connect();
async function connect () {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const result = await channel.assertQueue('jobs');

        channel.consume('jobs', message => {
            console.log(JSON.parse(message.content));
            if (true)
                channel.ack(message);
        });
        

        console.log('waiting for messages');
        
    } catch (err) {
        console.error(err);
    }
}