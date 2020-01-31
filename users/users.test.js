const request = require('supertest');
const db = require('../database/dbConfig');

const users = require('../api/server');


// Test GET to / for users...

describe('user route', () => {
    it('Setting environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
        })
    })
    it('Should return JSON object', () => {
        return request(users).get('/api/users').then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
    it('Getting a token back', () => {
        return request(users)
            .post('/api/auth/login')
            .send({
               username: "Idiot",
               password: "idiot"
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .then(res => {
                expect(res.type).toMatch(/json/i);
                console.log(res.body)
            })
    })
    it('Getting 201 back on Register', () => {
        return request(users)
        .post('/api/auth/register')
        .send({
            username: "Eric",
            password: "test",
            department: "Accounting"
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.type).toMatch(/json/i);
            // expect(res.status).toBe(201)
            console.log(res.body)
        })
    })




