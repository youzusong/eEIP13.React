const router = require('koa-router')();

router.prefix('/user');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

router.post('/login', function(ctx, next){

    let form = ctx.request.body;

    console.log(form);

    let username = form.username;
    let password = form.password;

    let result = {
        error: null,
        token: null,
        username: null
    };

    if(username == 'test' && password == 'test'){
        result.token = '123456';
        result.username = 'you';
    }else{
        result.error = '帳號密碼錯誤';
    }

    ctx.body = result;

    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Max-Age', 3600);

});

module.exports = router;
