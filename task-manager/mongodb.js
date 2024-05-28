// CRUD operation

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const userCollectionName = 'users'
const client = new MongoClient(connectionURL);

// ObjectId is used to store the document which is combination of timestamp and random value.
// It's a 12 byte data.
const ObjectId = mongodb.ObjectId
const id = new ObjectId();
console.log(id.getTimestamp());

// insert a multiple documents inside a collection
// database --> contains multiple collection (like users) --> multiple documents(objects) in a collection
async function insertData() {
    try {
        const database = client.db(databaseName);
        const usersCollection = database.collection(userCollectionName);
        const docs = [
            {
                firstName: 'chandana',
                lastName: 'L',
                age: 10
            },
            {
                firstName: 'Dayamoy',
                lastName: 'L',
                age: 10
            },
        ]
        const user = await usersCollection.insertMany(docs)
        console.log(user);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function retrieveData() {
    try {
        const database = client.db(databaseName);
        const usersCollection = database.collection(userCollectionName);
        const searchObject = { age: 10 }
        const cursor = await usersCollection.find(searchObject)

        const users = await cursor.toArray();
        console.log(users)
        for await (const user of cursor) {
            console.log(user)
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function updateData() {
    try {
        const database = client.db(databaseName)
        const collection = database.collection(userCollectionName)

        const queryObject = {
            _id: new ObjectId("6654ef0881e34f00e7f7a799")
        }
        const updateObject = {
            $set: { // set new value on firstName
                firstName: 'modified_Aheli'
            },
            $inc: { // increment age by 3
                age: 3
            }


        }
        const updatedDoc = await collection.updateMany(queryObject, updateObject)
        console.log(updatedDoc)

    } finally {
        await client.close()
    }
}

async function deleteData() {
    try {
        const database = client.db(databaseName)
        const collection = database.collection(userCollectionName)

        const queryObject = {
            _id: new ObjectId("6654ef0881e34f00e7f7a799")
        }
        const deletedDoc = await collection.deleteMany(queryObject)
        console.log(deletedDoc)

    } finally {
        await client.close()
    }
}

// insertData().catch(console.dir);
// retrieveData();
// updateData()
// deleteData()



