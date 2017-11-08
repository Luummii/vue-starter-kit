import db from '../../db/db'

const user = {
  Select: async () => {
    const result = await db.select('email').from('users').where({ user_id: 2 })
    return result
  },
  Insert: async (email) => {    
    const result = await db('users').insert({ email: email }).returning('user_id')
    return result
  }  
}

export default user

