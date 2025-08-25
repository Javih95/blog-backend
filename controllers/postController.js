import Post from '../models/Post.js';

export const TraerPosts=async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const TraerPostPorId =  async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post no encontrado' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const TraerPostsDestacados = async (req, res) => {
  try {
    const posts = await Post.find({ destacado: true }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const CrearPost = async (req, res) => {
    const { title, content, coverImage, tags, author,destacado } = req.body;
    const newPost = new Post({ title, content, coverImage, tags, author,destacado });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
export const ActualizarPost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPost) return res.status(404).json({ message: 'Post no encontrado' });
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
export const EliminarPost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post no encontrado' });
        res.json({ message: 'Post eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}