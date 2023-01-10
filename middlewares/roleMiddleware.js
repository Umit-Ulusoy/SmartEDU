module.exports = (roles) =>
{
    return (req, res, next) =>
    {
        const role = req.body.role;
        if (roles.includes(role))
        {
            next();
        }else{
            res.status(401).send('You do not have permission');
        }
    }
}