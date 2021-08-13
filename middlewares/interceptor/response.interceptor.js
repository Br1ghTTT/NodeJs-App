module.exports =  (method) => {
    return async (req, res, next) => {
        try {
            const result = await method (req, res);
            return res.status(200).json(result);
        } catch (err) {
            console.error(err);
            return res.status(err.statusCode ? err.statusCode : 500).json({
                statusCode: err.statusCode, 
                message: err.message, 
                error: err.name
            });
        }
    }
}