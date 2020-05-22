const request = require('supertest');

const server = require('./server');

// GET to '/' tests

describe('server', () => {
    it('quick test', () => {
        expect(true).toBe(true);
    })
    describe('GET /', () => {
        it('Should return status 200', () => {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
    describe('GET /', () => {
        it('Should return html', () => {
            return request(server).get('/').then(res => {
                expect(res.type).toMatch(/text/i)
            })
        })
    })
})

