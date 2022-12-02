const connection = require('../config/connection');
const { User, Thought } = require('../models');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Wait for the users to be inserted into the database
    await User.collection.insertMany(userData);

    // Wait for the thoughts to be inserted into the database
    await Thought.collection.insertMany(thoughtData);

    // End the seeding runtime timer
    console.timeEnd('seeding complete 🌱');
    process.exit(0);
});