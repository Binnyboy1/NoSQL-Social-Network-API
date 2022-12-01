const { Schema } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        responseBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: [true, 'Username required']
        }
        /*
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