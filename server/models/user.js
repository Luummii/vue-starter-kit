import db from '../../db/db'

const user = {
  Select: async (userID) => {
    return db.select('user_name').from('users').where({ user_id: userID })
  },
  Insert: async (userName) => {    
    return db('users').insert({ user_name: userName }).returning('user_id')
  }  
}

export default user

