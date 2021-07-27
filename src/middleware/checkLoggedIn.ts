import { RequestHandler } from "express";

const checkLoggedIn : RequestHandler = ( req, res, next ) => {
  const { decoded } = req.body
  if (!decoded){
    res.status(401).json({ error: new Error('허가되지 않은 사용자입니다.').toString() })
  } else{
    next()
  }
}
export default checkLoggedIn
