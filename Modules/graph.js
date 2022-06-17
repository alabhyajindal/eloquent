function buildGraph(roads) {
  let graph = {};
  let edges = [];
  for (let i = 0; i < roads.length; i++) {
    let currentPair = roads[i].split('-');
    let [from, to] = currentPair;
    if (graph[from] == undefined) graph[from] = [to];
    else graph[from].push(to);
    if (graph[to] == undefined) graph[to] = [from];
    else graph[to].push(to);
  }
  return graph;
}

module.exports = buildGraph;
