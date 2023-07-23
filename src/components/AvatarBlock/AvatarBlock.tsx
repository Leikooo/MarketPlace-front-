"use client";
import UserStore from '@/app/(site)/store/UserStore';
import './AvatarBlock.scss';
import { observer } from 'mobx-react-lite';
import { DefaultAvatar } from '../../../public/images/imgs';

const AvatarBlock = observer((props:any) => {
    console.log(UserStore);
    const { name } = props;
    return (
        <div className="AvatarBlock">
            <div className="AvatarBlock__avatar">
                {UserStore?.user?.avatar ? <img src={UserStore.user.avatar} alt="avatar" /> : <DefaultAvatar />}
            </div>
            <div className="dataContainer">
                <div className="AvatarBlock__email">
                    <span>{name}</span>
                </div>
                <div className="AvatarBlock__status">
                    <span>Blocked people can’t send you chat requests or private messages</span>
                </div>
            </div>

        </div>
    );
});

export default AvatarBlock;
