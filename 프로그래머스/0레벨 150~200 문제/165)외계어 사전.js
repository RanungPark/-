function solution(spell, dic) {
  let array = new Array(dic.length).fill(0)

  for (const i in dic) {
    for (const spell_v of spell) {
      if ([...dic[i]].includes(spell_v)) array[i]++
    }
  }

  array = array.filter(v => v === spell.length)
  return array.length === 0 ? 2 : 1
}