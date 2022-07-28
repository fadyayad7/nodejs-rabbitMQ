# 👋 RabbitMQ with nodejs

- RabbitMQ server 
    docker run --name rabbitmq -p 5672:5672 rabbitmq

- publisher 
    npm run publisher.js 'Hey Dad 👋'

- consumer
  - RabbitMQ client
  npm run consumer.js  => you will see hey Dad 👋