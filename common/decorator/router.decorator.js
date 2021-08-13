function routerInterceptor(wrapper){
    return function () {
        const [{ routes, interceptor }] = [... arguments];
    
        for(const item of routes) {
            wrapper[item.http](item.endpoint, interceptor(item.method));
        }
    }
}

module.exports = { routerInterceptor };