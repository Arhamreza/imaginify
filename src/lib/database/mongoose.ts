import mongoose ,{Mongoose} from "mongoose";
const MONGODB_URL=process.env.MONDODB_URI

interface MongooseConnection{
    conn:Mongoose|null;
    promise:Promise<Mongoose> |null;
}
let cached:MongooseConnection=(global as any).mongoose

if(!cached){
    cached=(global as any).mongoose={
        conn:null,promise:null
    }
}
export const connectToDatabase=async ()=>{
    if(cached.conn) return cached.conn
    if(!MONGODB_URL) throw new Error('Mongo db url is not present')
        cached.promise=cached.promise||mongoose.connect(MONGODB_URL,{dbName:'imaginify', bufferCommands:false})
    cached.conn=await cached.promise;
    console.log("Hii")
    return cached.conn;

}
