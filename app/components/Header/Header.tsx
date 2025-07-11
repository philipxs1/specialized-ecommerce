import SuperHeader from "../SuperHeader/SuperHeader";
import Nav from "../Nav/Nav";
import GloablNav from "../GlobalNav/GloablNav";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <div className="px-6 shadow-md">
        <Nav />
        <GloablNav />
      </div>
    </header>
  );
};

export default Header;
