const db = require('../data/dbConfig')

async function getContestants() {
    const contestants = await db('contestants')
    return contestants
}

function getById(id) {
    return db('contestants').where('contestant_id', id).first();
  }
  
async function insert(contestant) {
    const [id] = await db('contestants').insert(contestant);
    return getById(id)
  }


module.exports = {
    getContestants,
    getById,
    insert
}