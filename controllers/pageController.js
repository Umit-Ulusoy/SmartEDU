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

module.exports.getRegister = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'register',
        file_name: 'register'
    });
}