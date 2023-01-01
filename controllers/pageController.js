module.exports.getIndex = (req, res) =>
{
    res.status(200).render('index',
    {
        page: 'home'
    });
}

module.exports.getAbout = (req, res) =>
{
    res.status(200).render('index',
    {
        page: 'about'
    });
}