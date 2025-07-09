import Avatar from "./Avatar.jsx";

const Stats = ({user, stats, changeAvatar}) => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar changeAvatar={changeAvatar} user={user}/>
                { user.name}
            </div>
            <div className={'stats'}>
                <div>Followers: {stats.followers}</div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;