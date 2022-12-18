const {Schema, model} = require('mongoose')

const schema = new Schema({
    user: { types: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: { type: String, required: true}
}, {
    timestamps: true
})
module.exports = model('Token', schema)
