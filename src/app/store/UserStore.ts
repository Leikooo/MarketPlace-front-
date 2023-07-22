import { makeAutoObservable } from 'mobx';

class UserStore {
    _isAuth = false;
    _user = {
        id: 0,
        email: '',
        name: '',
        role: '',
        шьп: '',
    };
    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: any) {
        this._user = user;
    }
}

export default new UserStore();

