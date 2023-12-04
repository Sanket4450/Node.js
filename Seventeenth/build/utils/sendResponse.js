"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, status, data, message) => {
    return res.status(status).json({
        success: true,
        code: status,
        message: message || 'OK',
        data
    });
};
exports.default = sendResponse;
