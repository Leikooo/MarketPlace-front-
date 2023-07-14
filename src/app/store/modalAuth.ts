import { observable, action, makeAutoObservable } from 'mobx';

class modalAuthStore {
    isActive = false;
    constructor() {
        makeAutoObservable(this)
    }

    setIsActive = (isActive: boolean) => {
        this.isActive = isActive;
    }
    
}


export default new modalAuthStore();