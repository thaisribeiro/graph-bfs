/**
 * Class responsible for manipulating graph
 */
export default class Graph {
  constructor () {
    this.adjacentList = new Map()
  }

  /**
   * Add vertex in adjacent list
   * @param {*} vertex
   */
  addVertex (vertex) {
    if (!this.adjacentList.has(vertex)) this.adjacentList.set(vertex, [])
  }

  /**
   * Add edge
   * @param {*} vertex
   * @param {*} node
   */
  addEdge (vertex, node) {
    if (this.adjacentList.has(vertex) && this.adjacentList.has(node)) {
      let arr = this.adjacentList.get(vertex)
      if (!arr.includes(node)) arr.push(node)
    }
  }

  /**
   * Prints what is in the adjacent list
   */
  print () {
    const mapAdjacent = []
    this.adjacentList.forEach((value, key) => {
      mapAdjacent.push({
        [key]: value
      })
    })

    return mapAdjacent
  }

  /**
   * Breath First Search
   * @param {*} startNode
   */
  async bfs (startNode) {
    const visitedObject = () => {
      let arr = {}
      for (let key of this.adjacentList.keys()) {
        arr[key] = false
      }
      return arr
    }
    const graphVisited = []
    let visited = await visitedObject()
    let queue = []

    visited[startNode] = true
    queue.push(startNode)

    while (queue.length) {
      let current = queue.pop()
      graphVisited.push(current)

      let arr = this.adjacentList.get(current)

      arr.forEach(elem => {
        if (!visited[elem]) {
          visited[elem] = true
          queue.unshift(elem)
        }
      })
    }

    return graphVisited
  }
}
