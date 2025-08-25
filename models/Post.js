import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  coverImage: {
    type: String
  },
  tags: [String],
  author: {
    type: String,
    default: 'Javier'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  destacado: {
    type: Boolean,
    default: false
  }
});

const Post  = mongoose.model('Post', postSchema);
export default Post;