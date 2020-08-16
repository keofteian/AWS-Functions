'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

    const params = {
        TableName: 'Users',
        Item: {
            id: '123456',
            firstname: 'David',
            lastname: 'White'
        }
    }

    try {
        const data = await documentClient.put(params).promise();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}