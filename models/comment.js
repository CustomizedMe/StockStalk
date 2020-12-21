const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommnentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      comment: {
        type: String,
        required: true,
      },
      name : {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now
      },
      editdate : {
        type: Date,
        default: Date.now
      },
      parentComment: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
              },
              comment: {
                type: String,
                required: true,
              },
              name : {
                type: String,
                required: true,
              },
              date: {
                type: Date,
                default: Date.now
            },
            editdate : {
                type: Date,
                default: Date.now
              },
        }
      ],

});

module.exports = Comment = mongoose.model('comment', CommnentSchema);