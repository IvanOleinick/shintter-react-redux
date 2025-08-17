import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeStats} from "../features/stats/statsSlice.js";
const Stats = () => {
    const {followers, following} = useSelector(state => state.stats);
    const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats({statsType:'followers',sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats({statsType:'followers',sum: -1}));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats({statsType:'following',sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats({statsType:'following',sum: -1}));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;