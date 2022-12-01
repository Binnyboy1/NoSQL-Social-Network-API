const { Schema } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        /*
        createdAt: {
            type: Date,
            default:
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: [true, 'Username required']
        },
        reactions: [
            {
                // references the Reaction ObjectId
                type: Schema.Types.ObjectId,
                ref: 'Reaction',
            }
        ]
        */
    }
)

/*
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
*/