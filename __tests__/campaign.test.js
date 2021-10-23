import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';
import { Campaign, Npc, User, Permission } from '../lib/models/index.js';

describe.skip('demo routes', () => {
  beforeAll(() => {
    return db.sync({ force: true });
    // .then(() => {
    //   User.create({ email: 'testMaster@gamemaster.com' });
    // })
    // .then(() => {
    //   Campaign.create({
    //     name: 'First Test Campaign',
    //     description: 'First Test description',
    //     image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
    //     gameMaster: 'testMaster@gamemaster.com',
    //   });
    // });
  });

  it('POSTs a campaign', async () => {
    const user = await User.create({ email: 'testMaster@gamemaster.com' });

    const res = await request(app)
      .post('/api/v1/campaigns')
      .send({
        name: 'Second Test Campaign',
        description: 'Second Test description',
        image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
        gameMaster: user.email,
        userId: user.id
      });
    expect(res.body).toEqual({ id: 1, ...res.body });
  });

  it('GETs a campaign by id', async () => {
    const res = await request(app)
      .get('/api/v1/campaigns/1');

    expect(res.body).toEqual({
      id: 1,
      name: 'First Test Campaign',
      description: 'First Test description',
      image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
      gameMaster: 'testMaster@gamemaster.com',
    });
  });
});
