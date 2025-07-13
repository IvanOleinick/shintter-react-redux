import {useContext} from "react";
import {ShmitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(ShmitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;