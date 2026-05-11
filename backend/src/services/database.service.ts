import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string;

class DatabaseService {
    private client: MongoClient;
    private db: Db;

    constructor() {
        this.client = new MongoClient(uri);
        this.db = this.client.db("music-resource-platform");
    }

    async connect() {
        try {
            await this.client.connect();

            await this.db.command({
                ping: 1,
            });

            console.log("Kết nối MongoDB thành công!");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;
