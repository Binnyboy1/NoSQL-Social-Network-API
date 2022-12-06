const { Schema } = require('mongoose');
const dayjs = require('dayjs');
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat);

const reactionSchema = new Schema (
    {
        // reactionId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId()
        // },
        responseBody: {
            type: String,
            required: [true, 'A non-empty response is required'],
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
                return dayjs(date).format('MMM Do, YYYY [at] h:mm a');
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