'use strict';

module.exports = options => {
  console.log('options:', options);
  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
