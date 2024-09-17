import mongoose from "mongoose";

async function conectaNaDb() {
    mongoose.connect("mongodb+srv://root:root@cluster0.mdh66.mongodb.net/meu_blog?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}

export default conectaNaDb

