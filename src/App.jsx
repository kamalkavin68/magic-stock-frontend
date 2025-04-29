import AppMainArea from "./components/appMainArea/AppMainArea";
import AppNavBar from "./components/appNavBar/AppNavBar";
import AppLeftPanel from "./components/appSideBar/nonMobile/AppLeftPanel";



export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppNavBar></AppNavBar>
      <div className="flex flex-1 overflow-hidden bg-gray-100">
        <AppLeftPanel></AppLeftPanel>
        <AppMainArea></AppMainArea>
      </div>
    </div>
  );
}