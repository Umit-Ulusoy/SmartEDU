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