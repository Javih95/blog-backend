import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'clave_secreta';

export function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.sendStatus(403);
  next();
}
