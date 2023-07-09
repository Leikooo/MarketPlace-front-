import { observable, action, makeObservable } from 'mobx';

class authStore {
    isAuth = false;
    constructor() {
        makeObservable(this, {
            isAuth: observable,
            setIsAuth: action,
        });
    }

    setIsAuth = (is_auth: boolean) => {
        this.isAuth = is_auth;
    }
    
}


export default new authStore();