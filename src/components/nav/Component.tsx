import { NavOne, NavTwo } from "../../assets/headerIcons";
import './style.css';

const NavOneItemsStyles = "flex items-center gap-x-4 text-label-secondary font-semibold cursor-pointer hover:text-label-default";
const NavTwoItemsStyles = "flex items-center cursor-pointer";
export default function Component({ type }: {type: string}) {
    return (type === 'one')
        ? (
            <ul id="nav-one" className="flex items-center justify-between gap-8 pl-8 py-4">
                <li className={`${NavOneItemsStyles} gap-x-1.5 text-label-default`}>
                    <NavOne.DashboardIcon />
                    Dashboard
                </li>
                <li className={`${NavOneItemsStyles}`}>
                    <NavOne.TracksIcon />
                    Tracks
                </li>
                <li className={`${NavOneItemsStyles}`}>
                    <NavOne.MentoringIcon />
                    Mentoring
                </li>
                <li className={`${NavOneItemsStyles}`}>
                    <NavOne.ContributeIcon />
                    Contribute
                </li>
            </ul>
        )
        : (
            <ul className="flex items-center justify-between gap-9 pl-8 py-4">
                <li className={NavTwoItemsStyles}>
                    <NavTwo.SocialMediaIcon />
                </li>
                <li className={NavTwoItemsStyles}>
                    <NavTwo.HexagonIcon />
                </li>
                <li className={`${NavTwoItemsStyles} -ml-3 pt-4`}>
                    <NavTwo.NotificationIcon />
                </li>
                <li className={`${NavTwoItemsStyles} -mt-2 -ml-3 mr-0.5`}>
                    <NavTwo.BadgeIcon />
                </li>
                <li className={NavTwoItemsStyles}>
                    <NavTwo.ProfileIcon />
                </li>
                <li className={`${NavTwoItemsStyles} -ml-5 p-1 rounded-full hover:bg-black/10`}>
                    <NavTwo.MenuIcon />
                </li>
            </ul>
        );
}
