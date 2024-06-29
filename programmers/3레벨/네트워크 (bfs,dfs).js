function solution(n, computers) {
  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j]) {
        graph[i].push(j);
      }
    }
  }

  const visited = Array(n).fill(0);

  const dfs = node => {
    visited[node] = true;
    for (const next of graph[node]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[i].length) {
      dfs(i);
      count++;
    } else if (!graph[i].length) {
      visited[i] = 1;
      count++;
    }
  }

  return count
}
