import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../features/user/userSlice.js";

const Avatar = ({size}) => {
    const {avatar, name} = useSelector(state => state.user);
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