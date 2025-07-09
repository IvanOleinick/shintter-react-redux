import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = ({user, stats, changeAvatar}) => {
    return (
        <div className={'body'}>
            <Sidebar changeAvatar={changeAvatar} user={user} stats={stats}/>
            <Content/>
        </div>
    );
};

export default Body;