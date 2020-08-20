const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe("server", () => {
    beforeEach(async () => {
        await db('jedi').truncate();
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        });

        it('should return 200 code using async/await', async () => {
            const res = await request(server).get('/');
        });

        it('should return 200 No Jest', () => {
            return request(server).get('/').expect(200);
        });

        it('should return 200 No Jest', done => {
            request(server)
                .get('/')
                .then(res.status).toBe(200);
                done();
        });

        it('should return api: strong', () => {
            return request(server).get('/').expect({ api: 'Strong...'});
        });

        it('Should return an apit property with the value of ...strong', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body.api).toBe('Strong...')
                });
        });

        it('should respond with JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toMatch(/json/i);
        });
    });

    describe('POST /jedi', () => {
        it('should add different jedi', async () => {
            await (await request(server).post('/jedi')).setEncoding({
                name: 'Luke',
            });

            const jedi = await db('jedi');
            expect(jedi).toHaveLength(1);
        });
    });

});