"use client";
import UserStore from '@/app/store/UserStore';
import './AvatarBlock.scss';
import { observer } from 'mobx-react-lite';
import { DefaultAvatar } from '../../../public/images/imgs';

const AvatarBlock = observer(() => {
    console.log(UserStore);
    return (
        <div className="AvatarBlock">
            <div className="AvatarBlock__avatar">
                {UserStore?.user?.avatar ? <img src={UserStore.user.avatar} alt="avatar" /> : <DefaultAvatar/>}
            </div>
            <div className="AvatarBlock__email">
                <span>{"Email: " + UserStore?.user?.email}</span>
            </div>
            <div className="AvatarBlock__status">
                <span>Статус</span>
            </div>
        </div>
    );
});

export default AvatarBlock;
