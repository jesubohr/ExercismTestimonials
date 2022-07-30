import { NavOne, NavTwo } from "@/assets/headerIcons";

const NavOneItemStyles = "flex items-center gap-x-4 text-label-secondary font-semibold cursor-pointer hover:text-label-default";
const NavTwoItemStyles = "flex items-center cursor-pointer";
export function NavBar({ type }: { type: string }) {
  return (type === 'one')
    ? (
      <ul id="nav-one" className="flex items-center justify-between gap-8 pl-8">
        <li className={`${NavOneItemStyles} gap-x-1.5 text-label-default`}>
          <NavOne.DashboardIcon />
          Dashboard
        </li>
        <li className={`${NavOneItemStyles}`}>
          <NavOne.TracksIcon />
          Tracks
        </li>
        <li className={`${NavOneItemStyles}`}>
          <NavOne.MentoringIcon />
          Mentoring
        </li>
        <li className={`${NavOneItemStyles}`}>
          <NavOne.ContributeIcon />
          Contribute
        </li>
      </ul>
    )
    : (
      <ul className="flex items-center justify-between gap-9 pl-8">
        <li className={NavTwoItemStyles}>
          <NavTwo.SocialMediaIcon />
        </li>
        <li className={NavTwoItemStyles}>
          <NavTwo.HexagonIcon />
        </li>
        <li className={`${NavTwoItemStyles} -ml-3 pt-4`}>
          <NavTwo.NotificationIcon />
        </li>
        <li className={`${NavTwoItemStyles} -mt-2 -ml-3 mr-0.5`}>
          <NavTwo.BadgeIcon />
        </li>
        <li className={NavTwoItemStyles}>
          <NavTwo.ProfileIcon />
        </li>
        <li className={`${NavTwoItemStyles} -ml-5 p-1 rounded-full hover:bg-black/10`}>
          <NavTwo.MenuIcon />
        </li>
      </ul>
    );
}
