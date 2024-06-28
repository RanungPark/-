function solution(id_pw, db) {
  const [id, pw] = id_pw;

  for (const [db_id, db_pw] of db) {
    if (db_id === id && db_pw === pw) return 'login'
    if (db_id === id && db_pw !== pw) return 'wrong pw'
  }
  return 'fail'
}