Category.allow({
    'insert':function(userId,doc){
        return userId;
    },
    'remove':function(userId){
        return userId;
    }
});