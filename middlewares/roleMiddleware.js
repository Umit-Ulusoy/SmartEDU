module.exports = (role) =>
{
    return (req, res, next) =>
    {
        const roles = req.body.role;
        if (roles.includes(userRole))
        {
            next();
        }else{
            res.status(401).send('You do not have permission');
        }
    }
}