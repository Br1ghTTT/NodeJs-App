function routerInterceptor(wrapper){
    return function () {
        const [{ routes, interceptor }] = [... arguments];
        console.log(...routes);
        for(const item of routes) {
            wrapper[item.http](item.endpoint, interceptor(item.method));
        }
    }
}

module.exports = { routerInterceptor };