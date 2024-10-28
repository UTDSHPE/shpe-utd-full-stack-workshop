const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: { type: String, unique: true, required: true},
    password: { type: String, required: true, trim: true, minlength: 3 },
    bio: { type: String }
})

module.exports = mongoose.model('User', userSchema)