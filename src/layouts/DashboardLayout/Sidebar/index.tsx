import config from "@/config";
import { Link } from "react-router-dom";

export const sideBarItems = [
  {
    key: "sidebar-my-reviews",
    label: "My Reviews",
    link: config.navigation.reviews,
  },
  {
    key: "sidebar-profile",
    label: "Profile",
    link: config.navigation.profile,
  },
];

const Sidebar = () => {
  return (
    <div className="flex justify-end">
      <ul className="p-10">
        {sideBarItems.map((item) => (
          <Link to={item.link} className="flex items-center space-x-2">
            <li className="py-2 font-bold">{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
