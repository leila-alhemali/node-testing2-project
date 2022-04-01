const db = require('../data/dbConfig');
const server = require('./server');
const request = require('supertest')

const Contestants = require('./model')

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async () => {
    await db('contestants').truncate();
})

afterAll(async () => {
    await db.destroy()
})

test('sanity check', () => {
    expect(1).toBe(1);
});

test('test contestants model', async () => {
    let result;

    //get All
    result = await Contestants.getContestants();
    expect(result).toHaveLength(0)

    //insert
    result = await Contestants.insert({ name: 'Leila', season: 26 });
    expect(result).toEqual({ contestant_id: 1,  name: 'Leila', season: 26 })

    //getById
    result = await Contestants.getById(2);
    expect(result).not.toBeDefined();
    result = await Contestants.getById(1)
    expect(result).toHaveProperty("name", "Leila")

});

test('[GET] /', async () => {
    const res = await request(server).get('/api/contestants');
    console.log(res)
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
})