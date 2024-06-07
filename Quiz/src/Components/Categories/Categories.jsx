import { Button } from "antd";
import { useStepContext } from "../../CustomHooks/StepContext";
import { useState } from "react";
import {
  SearchOutlined,
  BookOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  RocketOutlined,
  TrophyOutlined,
  FireOutlined,
  AndroidOutlined,
  FormOutlined,
  HeatMapOutlined,
  DashboardOutlined,
  SunOutlined,
  ReadOutlined,
  SolutionOutlined,
  StarOutlined,
  CameraOutlined,
  TwitterOutlined,
  ToolOutlined,
  ThunderboltOutlined,
  SettingOutlined,
  PropertySafetyOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const icons = {
  SearchOutlined: { component: <SearchOutlined />, name: "general" },
  BookOutlined: { component: <BookOutlined />, name: "books" },
  VideoCameraOutlined: { component: <VideoCameraOutlined />, name: "film" },
  AudioOutlined: { component: <AudioOutlined />, name: "music" },
  PictureOutlined: { component: <PictureOutlined />, name: "theatres" },
  PlaySquareOutlined: { component: <PlaySquareOutlined />, name: "television" },
  RocketOutlined: { component: <RocketOutlined />, name: "game" },
  TrophyOutlined: { component: <TrophyOutlined />, name: "board game" },
  FireOutlined: { component: <FireOutlined />, name: "nature" },
  AndroidOutlined: { component: <AndroidOutlined />, name: "computers" },
  FormOutlined: { component: <FormOutlined />, name: "mathematics" },
  HeatMapOutlined: { component: <HeatMapOutlined />, name: "mythology" },
  DashboardOutlined: { component: <DashboardOutlined />, name: "sports" },
  SunOutlined: { component: <SunOutlined />, name: "geography" },
  ReadOutlined: { component: <ReadOutlined />, name: "history" },
  SolutionOutlined: { component: <SolutionOutlined />, name: "politics" },
  StarOutlined: { component: <StarOutlined />, name: "art" },
  CameraOutlined: { component: <CameraOutlined />, name: "Celebrities" },
  TwitterOutlined: { component: <TwitterOutlined />, name: "Animals" },
  ToolOutlined: { component: <ToolOutlined />, name: "Vehicles" },
  ThunderboltOutlined: {
    component: <ThunderboltOutlined />,
    name: "Comics",
  },
  SettingOutlined: { component: <SettingOutlined />, name: "Gadgets" },
  PropertySafetyOutlined: {
    component: <PropertySafetyOutlined />,
    name: "Anime",
  },
  SmileOutlined: {
    component: <SmileOutlined />,
    name: "Cartoon",
  },
};

export default function Categories() {
  const { incrementStep } = useStepContext();
  const [selectedButton, setSelectedButton] = useState(null);

  // Tablica kluczy ikon
  const iconKeys = Object.keys(icons);

  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        {Array.from({ length: 24 }, (_, i) => {
          const IconComponent = icons[iconKeys[i % iconKeys.length]].component;
          const iconName = icons[iconKeys[i % iconKeys.length]].name;
          const isSelected = selectedButton === i;
          return (
            <Button
              type={isSelected ? "primary" : "default"}
              className="w-20 h-20 flex flex-col items-center justify-center"
              key={i}
              onClick={() => setSelectedButton(i)}
            >
              <div className="text-2xl mb-2">{IconComponent}</div>
              <div className="text-xs">{iconName}</div>
            </Button>
          );
        })}
      </div>
      <div className="mt-8">
        <Button type="primary" onClick={() => incrementStep()}>
          Next
        </Button>
      </div>
    </div>
  );
}
