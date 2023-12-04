function createApiResponse(success, message, result) {
    return {
        success: success || false,
        message: message || '',
        result: result || null
    }
}

module.exports = createApiResponse;