import ResourceAlreadyExists from '../errors/ResourceAlreadyExists'
/**
 * Class responsible for manipulating graph
 */
export default class Graph {
  constructor() {
    this.adjacentList = new Map()
  }

  /**
   * Add vertex in adjacent list
   * @param {*} vertex
   */
  addVertex(vertex) {
    if (!this.adjacentList.has(vertex)) this.adjacentList.set(vertex, [])

    throw new ResourceAlreadyExists('Vertex already exists')
  }

  /**
   * Add edge
   * @param {*} vertex
   * @param {*} node
   */
  addEdge(vertex, node) {
    if (this.adjacentList.has(vertex) && this.adjacentList.has(node)) {
      let arr = this.adjacentList.get(vertex)
      if (!arr.includes(node)) arr.push(node)
    }
  }

  /**
   *
   */
  print() {
    this.adjacentList.forEach((value, key) => {
      console.log('KEY=>', key, "VALUE=>", value)
    })
  }

  /**
   * Breath First Search
   * @param {*} startNode
   */
  bfs(startNode) {
    const visitedObject = () => {
      let arr = {}
      this.adjacentList.keys().forEach((value, key) => {
        arr[key] = false
      })
    }
    let visited = visitedObject()
    let queue = []

    visited[startNode] = true
    queue.push(startNode)

    while (queue.length) {
      let current = queue.pop()
      console.log('ORDEM DE VISITA==>', current)

      let arr = this.adjacentList.get(current)

      arr.forEach(elem => {
        if (!visited[elem]) {
          visited[elem] = true
          queue.unshift(elem)
        }
      })
    }
  }
}

