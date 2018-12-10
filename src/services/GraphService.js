
import fs from 'fs'
import Graph from '../handlers/graph'
import ResourceNotFound from '../errors/ResourceNotFound'
import JoiValidate from '../handlers/joiValidate'
import graphSchema from '../schemas/graph'
/**
 *
 */
export class GraphService {
  /**
     *
     * @param {*} router
     */
  constructor(router) {
    router.get('/graph', JoiValidate(graphSchema.get), this.get)
  }

  /**
   * Breadth First Search in Digraph
   * @param {Object} request - HTTP Request
   * @param {Number} request.params.id - Initial node index (0-8)
   * @param {Object} response - HTTP Response
   * @param {Function} next  - Middleware
   */
  get(request, response, next) {
    try {
      let graph = new Graph()
      let object = fs.readFileSync('./grafo.json', 'utf-8')
      object = JSON.parse(object)

      let vertex = object.nodes.map(node => node.id)

      vertex.forEach(v => graph.addVertex(v))

      object.links.forEach((link) => graph.addEdge(link.source, link.target))

      graph.print()

      const [first] = vertex
      graph.bfs(request.params.id ? request.params.id : first)

      response.status(200).json({ status: 'sucesso' })
    } catch (error) {
      next(new ResourceNotFound())
    }
  }
}
