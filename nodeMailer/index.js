//성공한 파일. node index.js 실행시키면, 메일 간다.
const nodemailer = require('nodemailer');

const smtpServerURL = 'smtp.gmail.com' //"email SMTP 서버 주소"
const authUser = 'ykoou3040@gmail.com' //"email 계정 아이디 또는 이메일"
const authPass = '0016283040yk!!**' //"email 계정 비밀번호"
const fromEmail = "ykoou3040@gmail.com" //'보내는 사람 이메일 주소'

function sendEmail(toEmail, title, txt) {    
    let transporter = nodemailer.createTransport({
        host: smtpServerURL,    //SMTP 서버 주소
        secure: true,           //보안 서버 사용 false로 적용시 port 옵션 추가 필요
        auth: {
            user: authUser,     //메일서버 계정
            pass: authPass      //메일서버 비번
        }
    });
    
    let mailOptions = {
        from: fromEmail,        //보내는 사람 주소
        to: toEmail ,           //받는 사람 주소
        subject: title,         //제목
        text: txt               //본문

    };

    //전송 시작!
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            //에러
            console.log(error);
        }
        //전송 완료
        console.log("Finish sending email : " + info.response);        
        transporter.close()
    })
}

sendEmail('ykoou@naver.com', 'nodeMailer text', 'hello')

// sendEmail("상대방@이메일주소", "hello", "hello world")