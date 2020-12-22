const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      comment: {
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
      parentComment: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      childComment: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }

});

module.exports = Comment = mongoose.model('comment', CommnentSchema);