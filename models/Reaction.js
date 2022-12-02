const { Schema } = require('mongoose');
const dayjs = require('dayjs');

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
            default: Date.now,
            get: (date) => {
                return dayjs(date);
            }
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