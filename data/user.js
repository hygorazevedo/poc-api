module.exports = function() {
    var user = { };

    user.create = function() {
        return {};
    };

    user.update = function() {
        return {};
    };

    user.remove = function() {
        return {};
    };

    user.get = function(username) {
        return { username };
    }

    user.list = function() {
        return [];
    }

    return user;
}