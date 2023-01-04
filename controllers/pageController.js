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