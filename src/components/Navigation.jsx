import Avatar from "./Avatar.jsx";

const Navigation = ({user, changeAvatar}) => {
    return (
        <div className={'nav'}>
            <Avatar changeAvatar={changeAvatar} user={user} size={'small'}/>
        </div>
    );
};

export default Navigation;