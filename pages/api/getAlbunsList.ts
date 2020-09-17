import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDB: Db = null

async function connectToDatabase(uri: string) {
    if (cachedDB) {
        return cachedDB
    }
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    const dbName = url.parse(uri).pathname.substr(1)
    const db = client.db(dbName)

    cachedDB = db

    return db
}

export default async (request: NowRequest, response: NowResponse) => {
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('albuns')

    collection.find({}).toArray((err, result) => {
        if(err) {
            return response.status(400).send({ message: 'Erro ao listar albuns'})
        }
        return response.status(200).send({ result })
    })

}