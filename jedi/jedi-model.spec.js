const db = require('../data/dbConfig.js');
const Jedi = require('./jedi-model.js');

describe('jedi-model', () => {
    beforeEach(async () => {
        await db('jedi').truncate();
    });

    describe('insert()', () => {
        it('should add jedi', async () => {

            await Jedi.insert({
                name: 'Luke',
            });

            const jedi = await db('jedi');

            expect(jedi).toHaveLength(1);

        })
    })

})