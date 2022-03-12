const RES_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};

class Response {
    constructor(code) {
        this.code = code;
    }

    send(res) {
        res.status(this.code).json({
            msg: this.msg,
            data: this.data,
        });
    }
}

class SuccessResponse extends Response {
    constructor(msg = 'SUCCESS', data) {
        super(RES_CODE.SUCCESS);
        this.msg = msg;
        this.data = data;
    }
}

class CreatedResponse extends Response {
    constructor(msg = 'CREATED', data) {
        super(RES_CODE.CREATED);
        this.msg = msg;
        this.data = data;
    }
}

class BadRequestResponse extends Response {
    constructor(msg = 'BAD REQUEST', data) {
        super(RES_CODE.BAD_REQUEST);
        this.msg = msg;
        this.data = data;
    }
}

class UnauthorizedResponse extends Response {
    constructor(msg = 'UNAUTHORIZED', data) {
        super(RES_CODE.UNAUTHORIZED);
        this.msg = msg;
        this.data = data;
    }
}

class ForbiddenResponse extends Response {
    constructor(msg = 'FORBIDDEN', data) {
        super(RES_CODE.FORBIDDEN);
        this.msg = msg;
        this.data = data;
    }
}

class InternalErrorResponse extends Response {
    constructor(msg = 'INTERNAL ERROR', data) {
        super(RES_CODE.INTERNAL_ERROR);
        this.msg = msg;
        this.data = data;
    }
}

module.exports = {
    SuccessResponse,
    CreatedResponse,
    BadRequestResponse,
    UnauthorizedResponse,
    ForbiddenResponse,
    InternalErrorResponse
}