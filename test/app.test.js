const request = require('supertest')
const app = require('../app.js')

const {connectdb} = require('../config/db.js')
const mongoose = require('mongoose')
// const express = require('express')
// require('dotenv').config()
// const app1 = express();

// const Port = process.env.port || 4000
// const url= process.env.mongo_url;

// const connectdb = async() => {
//     await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//       .then(() => {
//         // console.log('Connected to MongoDB');
//         app1.listen(Port, () => {
//         //   console.log(`Server is running on port ${Port}`);
//         });
//       })
//       .catch((error) => {
//         // console.error('Error connecting to MongoDB', error);
//       })
//     }
  
let token,uid,qid,aid,cid=''

beforeAll(async() => {
    await connectdb();
},10000)
afterAll(async() => {
    await mongoose.connection.close()
})

test('signup',async()=>{
    const res = await request(app)
    .post('/user/signup')
    .send({
        username:'testName10',
        mobilee:1238861652,
        password:'test',
        gmail:'test10@gmail.com'
    })
    expect(res.statusCode).toBe(200);
})

test('login',async()=>{
    const res = await request(app)
    .post('/user/login')
    .send({
        password:'test',
        gmail:'test@gmail.com'
    }).expect(200)
    token = res.body.token;
    uid = res.body._id
    console.log('user token:',token)
})

describe('Authorization',() => {
    test('follow',async()=>{
        await request(app)
        .post(`/user/follow/${uid}`)  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    test('unfollow',async()=>{
        await request(app)
        .post(`/user/unfollow/${uid}`)  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    test('update user',async()=>{
        const response =await request(app)
        .patch('/user/updateuser')
        //.set("Authorization", `Bearer ${token}`)
        .send({
            username:'testing',
        }).expect(200)
    })

    test('get users',async()=>{
        await request(app)
        .get('/user/display')  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    // test('delete user', async () => {
    //     await request(app)
    //         .delete('/user/deleteuser')
    //         // .set('Authorization', `Bearer ${token}`)
    //         .expect(200);
    // });




    test('ask question', async () => {
        const res = await request(app)
            .post('/question/askQuestion')
            // .set('Authorization', `Bearer ${token}`)
            .send({
                questionT:"Testing Question?",
                user:uid,
                category:"jest"
            })
            .expect(200);
            qid = res.body._id
    });

    test('update question',async()=>{
        const response =await request(app)
        .patch(`/question/updatequestion/${qid}`)
        //.set("Authorization", `Bearer ${token}`)
        .send({
            questionT:'testing question'
        }).expect(200)
    })

    test('display questions',async()=>{
        await request(app)
        .get('/question/getQuestions')  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    // test('delete question', async () => {
    //     await request(app)
    //         .delete('/question/deletequestion')
    //         .set('Authorization', `Bearer ${token}`)
    //         .send({
    //             id:qid
    //         })
    //         .expect(200);
    // });



    test('answer',async()=>{
        const res=await request(app)
        .post('/answer/answer')
        // .set('Authorization', `Bearer ${token}`)
        .send({
            answer:'testing answer',
            question:qid,
            user:uid
        }).expect(200);
        aid= res.body._id
    });

    test('update answer',async()=>{
        const response =await request(app)
        .patch('/answer/updateanswer')
        //.set("Authorization", `Bearer ${token}`)
        .send({
            answer:'testing answer update'
        }).expect(200)
    })

    // test('delete answer', async () => {
    //     await request(app)
    //         .delete('/answer/deleteanswer')
    //         //.set('Authorization', `Bearer ${token}`)
    //         .send({
    //             id:aid
    //         }).expect(200);
    // });

    test('display answers',async()=>{
        await request(app)
        .get('/answer/display')  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    test('upvote answer',async()=>{
        await request(app)
        .post(`/answer/upvote/${aid}`)  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })

    test('downvote answer',async()=>{
        await request(app)
        .post(`/answer/downvote/${aid}`)  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })



    test('comment',async()=>{
        const res=await request(app)
        .post('/comment/addcomment')
        // .set('Authorization', `Bearer ${token}`)
        .send({
            comment:'testing comment',
            answer:aid,
            question:qid,
            user: uid
        }).expect(200);
        cid= res.body._id
    });

    test('update comment',async()=>{
        const res =await request(app)
        .patch(`/comment/updatecomment/${cid}`)
        //.set("Authorization", `Bearer ${token}`)
        .send({
            comment:'testing comment 1'
        }).expect(200)
    })

    // test('delete comment',async()=>{
    //     await request(app)
    //         .delete('/comment/deletecomment')
    //         //.set('Authorization', `Bearer ${token}`)
    //         .expect(200);
    // });

    test('display',async()=>{
        await request(app)
        .get('/comment/display')  
        //.set("Authorization", `Bearer ${token}`)
        .expect(200);
    })
})