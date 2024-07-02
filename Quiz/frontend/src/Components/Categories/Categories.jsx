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
import { useGameInformationContext } from "../../CustomHooks/GameInformation";

const icons = {
  SearchOutlined: { id: 9, component: <SearchOutlined />, name: "general" },
  BookOutlined: { id: 10, component: <BookOutlined />, name: "books" },
  VideoCameraOutlined: { id: 11, component: <VideoCameraOutlined />, name: "film" },
  AudioOutlined: { id: 12, component: <AudioOutlined />, name: "music" },
  PictureOutlined: { id: 13, component: <PictureOutlined />, name: "theatres" },
  PlaySquareOutlined: { id: 14, component: <PlaySquareOutlined />, name: "television" },
  RocketOutlined: { id: 15, component: <RocketOutlined />, name: "game" },
  TrophyOutlined: { id: 16, component: <TrophyOutlined />, name: "board game" },
  FireOutlined: { id: 17, component: <FireOutlined />, name: "nature" },
  AndroidOutlined: { id: 18, component: <AndroidOutlined />, name: "computers" },
  FormOutlined: { id: 19, component: <FormOutlined />, name: "mathematics" },
  HeatMapOutlined: { id: 20, component: <HeatMapOutlined />, name: "mythology" },
  DashboardOutlined: { id: 21, component: <DashboardOutlined />, name: "sports" },
  SunOutlined: { id: 22, component: <SunOutlined />, name: "geography" },
  ReadOutlined: { id: 23, component: <ReadOutlined />, name: "history" },
  SolutionOutlined: { id: 24, component: <SolutionOutlined />, name: "politics" },
  StarOutlined: { id: 25, component: <StarOutlined />, name: "art" },
  CameraOutlined: { id: 26, component: <CameraOutlined />, name: "celebrities" },
  TwitterOutlined: { id: 27, component: <TwitterOutlined />, name: "animals" },
  ToolOutlined: { id: 28, component: <ToolOutlined />, name: "vehicles" },
  ThunderboltOutlined: { id: 29, component: <ThunderboltOutlined />, name: "comics" },
  SettingOutlined: { id: 30, component: <SettingOutlined />, name: "gadgets" },
  PropertySafetyOutlined: { id: 31, component: <PropertySafetyOutlined />, name: "anime" },
  SmileOutlined: { id: 32, component: <SmileOutlined />, name: "cartoon" },
};


export default function Categories() {
  const { incrementStep, decrementStep } = useStepContext();
  const [selectedButton, setSelectedButton] = useState(0);
  const [categoryId, setCategoryId] = useState(9);
  const [categoryName, setCategoryName] = useState("General Knowledge");
  const { setNewInfo } = useGameInformationContext();

  const iconKeys = Object.keys(icons);

  const handleCategoryButtonClick = (number, iconName, iconId) => {
    setSelectedButton(number);
    setCategoryId(iconId);
    setCategoryName(iconName);
  };

  const handleNextButton = () => {
    incrementStep();
    setNewInfo("categoryId", categoryId)
    setNewInfo("categoryName", categoryName)
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        {Array.from({ length: 24 }, (_, i) => {
          const IconComponent = icons[iconKeys[i % iconKeys.length]].component;
          const iconName = icons[iconKeys[i % iconKeys.length]].name;
          const iconId = icons[iconKeys[i % iconKeys.length]].id;
          const isSelected = selectedButton === i;
          return (
            <Button
              type={isSelected ? "primary" : "default"}
              className="w-16 h-16 flex flex-col items-center justify-center"
              key={i}
              onClick={() => handleCategoryButtonClick(i, iconName, iconId)}
            >
              <div className="text-2xl mb-2">{IconComponent}</div>
              <div className="text-xs">{iconName}</div>
            </Button>
          );
        })}
      </div>
      <div className="mt-8 flex w-auto gap-4 mb-5">
        <Button type="default" onClick={() => decrementStep()}>
          Back
        </Button>
        <Button type="primary" onClick={() => handleNextButton()}>
          Next
        </Button>
      </div>
    </div>
  );
}
