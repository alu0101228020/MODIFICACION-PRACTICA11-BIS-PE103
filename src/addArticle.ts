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

  // Para insertar un único elemento en una colección hacemos uso del método insertOne
  return db.collection<Article>('articles').insertOne({
    description: 'Zupreem FruitBlend feed for parakeets and agapornis',
    stock: 50,
    pvp: 11.99,
    obsolete: false,
    barcode: 4157954239618,
  });
}).then((result) => {
  console.log('The following element has been successfully added:\n');
  console.log(result.ops);
}).catch((error) => {
  console.log(error);
});
