const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(jedi) {
    return db('jedi')
        .insert(jedi, "id")
        .then(ids => ids[0]);
}

function getAll() {
    return db('jedi');
}