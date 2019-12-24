const request = require('supertest');
const app = require('../app')

describe('Test the root path', () => {
    test('GET /', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('GET /test', (done) => {
        request(app).get('/test').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toEqual('text/html');
            expect(response.text).toMatch(/tokyo/);
            done();
        });
    });
    test('GET /yokohama', (done) => {
        request(app)
        .get('/yokohama')
        .send()
        .expect('Content-Type', /html/)
        .expect(200)
        .end((err, response) => {
          if (err) {
            return done(err);
          }
          expect(response.text).toMatch(/yokohama/);
          expect(response.text).not.toMatch(/error/);
          return done();
        });
    });
    test('POST /tokyo', (done) => {
        request(app)
        .post('/tokyo')
        .send({name: 'tokyo'}).then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('POST /osaka', (done) => {
        request(app)
        .post('/osaka')
        .send({name: 'osaka'})
        .expect('Content-Type', /html/)
        .expect(200)
        .end((err, response) => {
          if (err) {
            return done(err);
          }
          expect(response.text).toMatch(/osaka/);
          expect(response.text).not.toMatch(/error/);
          return done();
        });
    });
});
describe('Test the users path', () => {
    test('GET /users', (done) => {
        request(app).get('/users').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});