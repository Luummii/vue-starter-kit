import db from '../../db/db'

const user = {
  Select: async () => {
    const result = await new Promise((resolve, reject) => {
      resolve(db.select('email').from('users').where({ user_id: 2 })) // eslint-disable-line
    })
    return result
  },
  Insert: async (email) => {
    const result = await new Promise((resolve, reject) => {
      resolve(db('users').insert({ email: email }).returning('user_id'))
    })
    return result
  }
}

export default user

