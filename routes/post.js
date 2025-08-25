import express from 'express';
const router = express.Router();
import { 
  TraerPosts,
  TraerPostPorId,
  TraerPostsDestacados,
  CrearPost,
  ActualizarPost,
  EliminarPost 
}  from'../controllers/postController.js';
import { authenticateToken, requireAdmin } from '../middlewares/authMiddleware.js';

router.post('/',authenticateToken, requireAdmin, async (req, res) => {
  CrearPost(req, res);
});

router.get('/', TraerPosts);
router.get('/destacados', TraerPostsDestacados);
router.get('/:id', TraerPostPorId);

router.put('/:id', ActualizarPost);
router.delete('/:id', EliminarPost);

export default router;
