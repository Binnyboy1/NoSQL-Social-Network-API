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
        },
        createdAt: {
            type: Date,
            default:
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        }
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
)

module.exports = reactionSchema;