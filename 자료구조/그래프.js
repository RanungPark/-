//인접 행렬
const graphProcession = Array.from(Array(5), () => Array(5).fill(false));

graphProcession[0][1] = true;
graphProcession[0][3] = true;
graphProcession[1][2] = true;
graphProcession[2][0] = true;
graphProcession[2][4] = true;
graphProcession[3][2] = true;
graphProcession[4][0] = true;

console.log(graphProcession);

const graph = Array.from(Array(5), () => []);

graph[0].push(1);
graph[0].push(3);
graph[1].push(2);
graph[2].push(0);
graph[2].push(4);
graph[3].push(2);
graph[4].push(0);

console.log(graph);
