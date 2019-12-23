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
            done();
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