import jwt from 'jsonwebtoken'
import UserModel from '../model/UserModel.js'

const requireAuth = async (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)

        req.user = await UserModel.findOne({_id}).select('_id role')
        next()
    } catch (error) {
        res.status(401).json({ error: 'Request is not authorized' })
    }
}

    export const requireAdmin = (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Admin access required' })
        }
    next()
    }

export default requireAuth