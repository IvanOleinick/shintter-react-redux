import Content from "./Content.js";
import Sidebar from "./Sidebar.js";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Body;