const {MongoClient} = require('mongodb');
const request = require('supertest');
const app = require('../server/index');

// const app = express()

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/images', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db('jest');
  });

  afterAll(async () => {
    await connection.close();
  });

});


describe('GET Endpoints', () => {
  it('should GET main images', async (done) => {
    const res = await request(app).get('/images/mainImages/4');
      expect(200)
      done();
  })

  it('should GET detail images', async (done) => {
    const res = await request(app).get('/images/detailImages/14');
      expect(200)
      done();
  })

  it('should GET thumbnail images', async (done) => {
    const res = await request(app).get('/images/thumbnailImages/42');
      expect(200)
      done();
  })
})

