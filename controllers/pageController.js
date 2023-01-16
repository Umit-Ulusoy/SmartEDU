module.exports.getIndex = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'home',
        file_name: 'home'
    });
}

module.exports.getAbout = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'about',
        file_name: 'about'
    });
}

module.exports.getRegisterPage = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'register',
        file_name: 'register'
    });
}

module.exports.getLoginPage = async (req, res) =>
{


    try{
        res.status(200).render('index', {
            page_name: 'login',
            file_name: 'login'
        });
    }catch (error)
    {
        res.status(400).json({
            error
        });
    }
}

exports.getContactPage = async (req, res) =>
{
    try {
        res.status(200).render('index', {
            page_name: 'contact',
            file_name: 'contact'
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.sendEmail = async (req, res) =>
{
    try {
        const nodemailer = require("nodemailer");

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });

        let info = await transporter.sendMail({
            from: `${req.body.name} <${req.body.email}>`,
            to: `${req.body.email}`,
            subject: 'Test Mail',
            html: `<h1>Test Mail</h1>
            <p>${req.body.name}</p>
            <pre>${req.body.comments}`
        });

req.flash("success", "Mail sent successfully");

        res.status(200).redirect('/contact');
    } catch (error) {
        req.flash("error", "Something went wrong! Please try again later.");
        res.status(400).redirect('/contact');
    }
}