const UserRepo = require('./repo');
const {
    BadRequestResponse,
    SuccessResponse,
    UnauthorizedResponse,
    ForbiddenResponse,
} = require('../../server/response');
const jwt = require('jsonwebtoken');

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await UserRepo.selectOne({ username });

        if (!user) {
            return new BadRequestResponse(
                'Sai tên đăng nhập hoặc mật khẩu'
            ).send(res);
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return new BadRequestResponse('ERROR', error).send(res);
            }

            if (!isMatch) {
                return new BadRequestResponse(
                    'Sai tên đăng nhập hoặc mật khẩu'
                ).send(res);
            }

            const accessToken = jwt.sign(
                {
                    username,
                },
                process.env.PRIVATE_KEY,
                {
                    expiresIn: process.env.TOKEN_EXPIRE,
                }
            );

            return new SuccessResponse('SUCCESS', {
                username,
                accessToken,
            }).send(res);
        });
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const signup = async (req, res) => {
    try {
        const user = await UserRepo.insertOne(req.body);

        return new SuccessResponse('SUCCESS', user).send(res);
    } catch (error) {
        return new BadRequestResponse('ERROR', error).send(res);
    }
};

const checkLogin = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return new UnauthorizedResponse().send(res);
    }

    req.accessToken = req.headers['authorization'].split(' ')[1];

    next();
};

const checkAuth = async (req, res, next) => {
    const accessToken = req.accessToken;

    jwt.verify(accessToken, process.env.PRIVATE_KEY, function (err, decoded) {
        if (err) {
            return new UnauthorizedResponse('ERROR', err).send(res);
        }

        req.username = decoded.username;

        next();
    });
};

const checkPermission = async (req, res, next) => {
    const username = req.username;

    const user = await UserRepo.selectOne({ username });

    if (!user.isRoot) {
        return new ForbiddenResponse().send(res);
    }

    next();
};

module.exports = {
    signin,
    signup,
    checkLogin,
    checkAuth,
    checkPermission,
};
