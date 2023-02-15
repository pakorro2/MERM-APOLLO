import { startApolloServer } from './app.js'
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'
import { connectDB } from './db.js'

//? Conexion con la base de datos
connectDB()

//? Corriendo Apollo Server
startApolloServer(typeDefs, resolvers)