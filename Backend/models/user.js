const mongoose = require("mongoose")
const crypto = require("crypto")
const uuidv1 = requires("uuid/v1")
const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },

    lastname: {
        type: String,
        required: false,
        maxLength: 32,
        trim: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },


    userinfo: {
        type: String,
        trim: true
    },


    encry_password: {
        type: String,
        required: true

    },

    salt: string,

    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }

});

// A virtual method to encrypt the password using salt 
userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1()
        this.encry_password = securePassword(password)
    })
    .get(function () {
        return this._password
    })

// using crypto to hash the password
userSchema.method = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password
    },


    securePassword: function (plainpassword) {
        if (!password) return "";
        try {
            require("crypto")
                .createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest("hex");
        } catch (error) {
            return "";
        }
    }
}
module.exports = mongoose.model("User", userSchema)