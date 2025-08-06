import Avatar from "./Avatar.jsx";
import {useSelector} from "react-redux";

const Stats = () => {
    const {followers, following} = useSelector(state => state.stats);
    const {name} = useSelector(state => state.user);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;