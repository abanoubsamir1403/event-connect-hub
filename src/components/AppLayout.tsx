import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="hidden md:block">
        <TopNav />
      </div>
      {children}
      <BottomNav />
    </>
  );
};

export default AppLayout;
