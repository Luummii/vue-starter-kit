import db from '../../db/db'

const user = {
  Select: async () => {
    return db.select('user_name').from('users')
  },
  Insert: async (userName) => {    
    return db('users').insert({ user_name: userName }).returning('user_id')
  }  
}

export default user

