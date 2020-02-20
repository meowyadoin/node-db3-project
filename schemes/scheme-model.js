const db = require('../data/dbConfig.js')

// 'schemes' & 'steps'

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
};

// array of all schemes
function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db('steps as s')
        .join('schemes as sch', 'sch.id', 's.scheme_id')
        .select('s.id', 'sch.scheme_name', 's.step_number', 's.instructions')
        .where('s.scheme_id', id)
        .orderBy('step_number', 'asc')
}

function add(scheme) {
   return db('schemes')
        .insert(scheme, 'id')
        .then(([id]) => {
            return findById(id)
        })
}

function addStep(step, scheme_id) {
    return db('steps')
        .insert({ ...step, scheme_id })
        .then(([id]) => {
            return db('steps')
            .where({ id })
        })
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
        .then(() => findById(id)) 
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
        .then(() => findById(id)) 
}