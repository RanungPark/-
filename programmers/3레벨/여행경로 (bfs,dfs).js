function solution(tickets) {
  const graph = {};

  for (const [src, dest] of tickets) {
    if (!(src in graph)) {
      graph[src] = [];
    }
    graph[src].push(dest);
  }

  for (const key in graph) {
    graph[key].sort();
  }
  const answer = [];

  const dfs = src => {
    while (graph[src] && graph[src].length > 0) {
      dfs(graph[src].shift());
    }
    answer.push(src);
  };

  dfs('ICN');

  return answer.reverse();
}
