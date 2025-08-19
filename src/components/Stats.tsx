import Avatar from "./Avatar";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../features/stats/statsSlice.js";
import {RootState} from "../app/store";

const Stats = () => {
    const {followers, following} = useSelector((state:RootState) => state.stats);
    const {name} = useSelector((state:RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeFollowers(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowers(-1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeFollowing(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowing(-1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;