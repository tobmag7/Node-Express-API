const mongoose = require('mongoose')
const AcctSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },  
    account_type: {
        type: String,
        required: true
    }  
},{
    timestamps: true
})

module.exports = mongoose.model('Account', AcctSchema)