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

router.post('/', CrearPost);
router.get('/', TraerPosts);
router.get('/destacados', TraerPostsDestacados);
router.get('/:id', TraerPostPorId);

router.put('/:id', ActualizarPost);
router.delete('/:id', EliminarPost);

export default router;
