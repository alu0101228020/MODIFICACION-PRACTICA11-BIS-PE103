import {MongoClient} from 'mongodb';

// Almacena la URL de conexión al servidor de la base de datos
const dbURL = 'mongodb://127.0.0.1:27017';
// Almacena el nombre de la base de datos que vamos a crear
const dbName = 'dsi-assessment';

// Interfaz con las propiedades del artículo
interface Article {
    description: string,
    stock: number,
    pvp: number,
    obsolete: boolean,
    barcode: number
}

// Conexión al servidor de MongoDB con la base de datos
MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db(dbName);

  // Para eliminar uno o más elementos de una colección hacemos uso del método deleteMany
  return db.collection<Article>('articles').deleteMany({
    barcode: 4157954239618,
  });
}).then((result) => {
  console.log('Deleted elements count: ' + result.deletedCount);
}).catch((error) => {
  console.log(error);
});
