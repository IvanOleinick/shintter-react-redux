import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../features/user/userSlice.js";
import {RootState} from "../app/store";
import {AvatarProps} from "../utils/types";

const Avatar = ({size}:AvatarProps) => {
    const {avatar, name} = useSelector((state:RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    );
};

export default Avatar;