
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    english: {
        type: String,
        required: true,
      },
      turkish: {
        type: String,
        required: true,
      },
      definition: {
        type: String,
        required: true,
      },
      example: {
        type: String,
        required: true,
      },

})

const Word = mongoose.model('Word',userSchema);

module.exports = Word;
/*
        {
            "english": "a",
            "turkish": "bir",
            "definition": "used before countable or singular nouns referring to people or things that have not already been mentioned.",
            "example": "She's a friend of my father's (= one of my father's friends)."
        },

*/