module.exports = {
    authenticate: function(email, userName) {
        return query = 'SELECT CN AS fullName, SAMACCOUNTNAME AS userName, MAIL AS email '+
        'FROM BSIAD..AD_USERS WITH(NOLOCK) '+
        'WHERE MAIL = \''+ email + '\' '+
        'AND SAMACCOUNTNAME = \'' + userName + '\''
    }
}