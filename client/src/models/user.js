const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        required: true,
        unique: true
    },
    favorites: [
        new Schema({
            title: {
                type: String,
                unique: true
            },
            select: {
                type: String
            },
            calories: {
                type: String
            },
            fat: {
                type: String
            },
            sugar: {
                type: String
            },
            cholesterol: {
                type: String
            },
            protein: {
                type: String
            },
            serving: {
                type: String
            },
            season: {
                type: Array
            }
        })
    ],
    recipe: {
        type: String,
        unique: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;