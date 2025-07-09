import Stats from "./Stats.jsx";

const Sidebar = ({user, stats, changeAvatar}) => {
    return (
        <div className={'sidebar'}>
           <Stats changeAvatar={changeAvatar} user={user} stats={stats}/>
        </div>
    );
};

export default Sidebar;