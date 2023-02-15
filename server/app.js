import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import http from 'http'

export async function startApolloServer(typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)

  //? Mensaje de vienvenida en la raiz de la API
  app.get('/', (req, res) => res.send('Welcome to my API GraphQL API'))

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()
  app.use('/graphql', cors(), express.json(),
    expressMiddleware(server))

  await new Promise(resolve => httpServer.listen({
    port: 4000
  }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
}

