module.exports.getIndex = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'home'
    });
}

module.exports.getAbout = (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'about'
    });
}