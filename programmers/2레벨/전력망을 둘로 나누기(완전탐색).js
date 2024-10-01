function dfs(graph, start, visited) {
  const stack = [start];
  let count = 0;

  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      count++;

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  return count;
}

function solution(n, wires) {
  let minDifference = Infinity;

  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [src, dest] of wires) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  for (let i = 0; i < wires.length; i++) {
    const [src, dest] = wires[i];

    const visited = Array(n + 1).fill(false);

    visited[dest] = true;
    const count1 = dfs(graph, src, visited); 
    const count2 = n - count1; 

    const difference = Math.abs(count1 - count2);
    minDifference = Math.min(minDifference, difference); 
  }

  return minDifference;
}