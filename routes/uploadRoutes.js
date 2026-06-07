import express from 'express';
import multer from 'multer';
import supabase from '../config/supabase.js';

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

router.post(
    '/',
    upload.single('image'),
    async (req, res) => {

        try {

            const file = req.file;

            if (!file) {

                return res.status(400).json({
                    message: 'No se recibió imagen'
                });
            }

            const fileName =
                `${Date.now()}-${file.originalname}`;

            const { error } =
                await supabase.storage
                    .from('blog-images')
                    .upload(
                        fileName,
                        file.buffer,
                        {
                            contentType: file.mimetype
                        }
                    );

            if (error) {
                throw error;
            }

            const {
                data
            } = supabase.storage
                .from('blog-images')
                .getPublicUrl(fileName);

            res.json({
                url: data.publicUrl
            });

        } catch (err) {

            res.status(500).json({
                message: err.message
            });
        }
    }
);

export default router;