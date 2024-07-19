import config from "@/config";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";

const navigation = [
  {
    key: "1",
    link: config.navigation.reviews,
  },
  {
    key: "2",
    link: config.navigation.profile,
  },
];

const items = [
  {
    key: "1",
    label: "My Reviews",
  },
  {
    key: "2",
    label: "Profile",
  },
];

const MobileBar = () => {
  const navigate = useNavigate();

  const onChange = (key: string) => {
    const item = navigation.find((item) => item.key === key);
    if (item) {
      navigate(item.link);
    }
  };

  return <Tabs activeKey="" items={items} onChange={onChange} />;
};

export default MobileBar;
