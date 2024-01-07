import { MongoClient } from 'mongodb';
let websocketClients = []; // Array para armazenar os clientes WebSocket conectados
const uri = "mongodb+srv://patrickramosmotta:rMABnuzebiKcwCmS@devices.cmyelda.mongodb.net/?retryWrites=true&w=majority";

const userDeviceWebsocket = async (ws, req) => {
  console.log('Conexão WebSocket estabelecida');

  try {
    const client = await MongoClient.connect(uri);
    console.log('Conexão com o MongoDB estabelecida.');

    const db = client.db('test');
    const collection = db.collection('devicedatas');
    const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify(change));
      }
    });

    ws.on('close', () => {
      console.log('Conexão WebSocket fechada');
      // Lidar com o fechamento da conexão WebSocket
      changeStream.close();
      client.close();
    });

    ws.on('error', (error) => {
      console.error('Erro na conexão WebSocket:', error);
    });

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export { userDeviceWebsocket }