import db from '../../config/knex'

const user = {
  Select: async (userID) => {
    return db.select('userName').from('users').where({ user_id: userID })
  },
  Insert: async (userName) => {    
    return db('users').insert({ userName: userName }).returning('user_id')
  }  
}

export default user

