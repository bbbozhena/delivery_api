const AppiError = require ("../error/ApiError")

module.exports = function (err, req, res , next ){
    if(err instanceof AppiError) {
        return res.status(err.status).json({message:err.message})
    }
    return res.status(500).json({message:"Other error"})
}