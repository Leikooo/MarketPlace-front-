import { observable, action, makeAutoObservable } from 'mobx';

class modalAuthStore {
    isActive = false;
    isLogin = true;
    constructor() {
        makeAutoObservable(this)
    }

    setIsActive = (isActive: boolean) => {
        this.isActive = isActive;
    }

    setIsLogin = (isLogin: boolean) => {
        this.isLogin = isLogin;
    }
    
}


export default new modalAuthStore();