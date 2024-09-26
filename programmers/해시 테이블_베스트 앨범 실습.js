function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index);
}

function solution(genres, plays) {
  const genersObj = {};

  genres
    .map((v, i) => [v, plays[i]])
    .forEach(([genre, play], index) => {
      const data = genersObj[genre] || { total: 0, songs: [] };
      genersObj[genre] = {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      };
    });

  return Object.entries(genersObj)
    .sort((a, b) => b[1].total - a[1].total)
    .reduce(
      (prev, curr) => prev.concat(curr[1]['songs'].map(v => v['index'])),
      []
    );
}
