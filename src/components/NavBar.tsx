import { NavOne, NavTwo } from "@/assets/headerIcons";

const NavOneItemStyles = "flex items-center gap-x-4 text-label-secondary font-semibold cursor-pointer hover:text-label-default";
const NavTwoItemStyles = "flex items-center cursor-pointer";
export function NavBar({ type }: { type: string }) {
  return (type === 'one')
    ? (
      <ul id="nav-one" className="flex items-center justify-between gap-8 pl-8">
        <li>
          <a href="https://exercism.org/dashboard" className={`${NavOneItemStyles} gap-x-1.5 text-label-default`} target="_blank">
            <NavOne.DashboardIcon />
            Dashboard
          </a>
        </li>
        <li>
          <a href="https://exercism.org/tracks" className={NavOneItemStyles} target="_blank">
            <NavOne.TracksIcon />
            Tracks
          </a>
        </li>
        <li>
          <a href="https://exercism.org/mentoring" className={NavOneItemStyles} target="_blank">
            <NavOne.MentoringIcon />
            Mentoring
          </a>
        </li>
        <li>
          <a href="https://exercism.org/contibuting" className={NavOneItemStyles} target="_blank">
            <NavOne.ContributeIcon />
            Contribute
          </a>
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
        <li className={`${NavTwoItemStyles} mr-5`}>
          <button className="relative flex justify-center items-center py-2 w-[42px] h-9 bg-gradient rounded-lg text-[#E48900] shadow-notification">
            <span className="absolute -top-3 -right-3 pt-[3px] w-6 h-6 bg-[#D85050] rounded-full text-[13px] text-white font-semibold">2</span>
            <NavTwo.NotificationIcon  />
          </button>
        </li>
        <li className={`${NavTwoItemStyles} -mt-2 -ml-3 mr-0.5`}>
          <NavTwo.BadgeIcon />
        </li>
        <li className={`${NavTwoItemStyles} gap-5`}>
          <NavTwo.ProfileIcon className="rounded-full shadow-header-element" />
          <NavTwo.MenuIcon />
        </li>
      </ul>
    );
}
