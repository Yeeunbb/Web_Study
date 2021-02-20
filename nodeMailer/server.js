//메인으로 쓰려고 햇던 파일
const express = require('express');
const router = express.Router();
const mailer = require('./mail');
const email = 'ykoou@naver.com';

router.get('/mail', (req, res)=> {
    // const {email} = req.body;

    let emailParam = {
        toEmail: email,
        subject: 'NodeMailer TEST!',
        text: 'hello yeeun'
    };
    mailer.sendGmail(emailParam);
    res.status(200).send("성공");
})

module.exports = router;

const app = express();
const PORT = process.env.PORT = 8000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});

