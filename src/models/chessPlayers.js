// chessPlayers.js

const mongoose = require('mongoose');

const chessPlayerSchema = new mongoose.Schema({
    rank:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
       type:String,
       required:true,
       trim:true 
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true,
        trim:true
    },
    birthyear:{
        type:Number,
        required:true,
        trim:true
    }
});

const ChessPlayer = mongoose.model('ChessPlayer', chessPlayerSchema);

module.exports = ChessPlayer;
