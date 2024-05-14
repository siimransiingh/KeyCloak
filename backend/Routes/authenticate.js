import jwtmod from "jsonwebtoken";

export default async (req, res, next) => {
  const bearerHeader = req.headers["Authorization"];
  const token = bearerHeader && bearerHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);
  console.log(token);
  next();
};
