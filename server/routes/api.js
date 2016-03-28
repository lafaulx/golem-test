'use strict';

const express = require('express');
const uuid = require('node-uuid');
const router = express.Router();

module.exports = function(channel) {
  router.post('/golem/create', function(req, res) {
    const data = req.body;

    channel.assertQueue('', { exclusive: true, autoDelete: true }, function(err, q) {
      const corr = uuid.v4();

      channel.consume(q.queue, function(msg) {
        if (msg.properties.correlationId == corr) {
          res.send({ url: JSON.parse(msg.content.toString()).url });
        }
      }, {noAck: true});

      channel.sendToQueue('glm_queue',
        new Buffer(JSON.stringify(data)),
        { correlationId: corr, replyTo: q.queue });
    });
  });

  return router;
};