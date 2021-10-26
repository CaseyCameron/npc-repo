import jwt from 'jsonwebtoken';

export function ensureAuth(req, next) {
  const { session } = req.cookies;
  const payload = jwt.verify(session, process.env.APP_SECRET);

  req.user = payload;
  next();
}

export function authToken(user) {
  return jwt.sign({ ...user }, process.env.APP_SECRET, {
    expiresIn: '72h'
  });
}

export function toJSON(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email
  };
}
