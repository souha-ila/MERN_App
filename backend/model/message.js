const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB = "mongodb+srv://admin:nrnDEi6M0SImpFtt@cluster0.e1vw87v.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB)
.then(() => console.log(' réussie !'))
.catch(() => console.log('échouée'))

// Définir un nouveau schéma
const Schema = mongoose.Schema;
const messsageSchema =new Schema(
{
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Message:{type: String, required: true}
}
)
module.exports = mongoose.model("message", messsageSchema);
