import db from '../lib/utils/db.js';
import request from 'supertest';
import app from '../lib/app.js';
import { Campaign, Npc, User } from '../lib/models/index.js';

describe('demo routes', () => {
  // beforeAll(async () => {
  //   await User.create({
  //     email: 'testMaster@gamemaster.com'
  //   });
  // });

  beforeAll(() => {
    return db.sync({ force: true })
      .then(() => {
        User.create({ email: 'testMaster@gamemaster.com' });
      });
  });

  it('POSTs a campaign', async () => {
    const res = await request(app)
      .post('/api/v1/campaigns')
      .send({
        name: 'Test Campaign',
        description: 'Test description',
        image: 'https://cdn.discordapp.com/attachments/716731135501271101/871626952958672956/2Q.png',
        gameMaster: 'testMaster@gamemaster.com',
        userId: 1
      });
    expect(res.body).toEqual({ id: 1, ...res.body });
  });

});
