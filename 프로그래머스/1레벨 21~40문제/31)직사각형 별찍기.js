process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const column = Array(a).fill('*').join('')
  const arr = Array(b).fill(column).join('\n')
  console.log(arr);
});