const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'banco1';

const client = new MongoClient(uri);

async function conectar() {
    try {
        await client.connect();
        console.log('✓ Conexão com o MongoDB estabelecida!');
        //Teste rápido: mostra quantas coleçoes existem no banco de dados
        const db = client.db();
        const colecoes = await db.listCollections().toArray();
        console.log('▤ Coleções encontradas: ', colecoes.length);
    }catch (err){
        console.log('✕ Falha ao conectar: ', err.message);
    }
}

conectar();