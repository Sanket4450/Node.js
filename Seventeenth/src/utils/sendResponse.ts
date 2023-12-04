const sendResponse = (res: any, status: number, data: object, message?: string) => {
    return res.status(status).json({
        success: true,
        code: status,
        message: message || 'OK',
        data
    })
}

export default sendResponse
