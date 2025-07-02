import SuperHeader from "../SuperHeader/SuperHeader";
import Nav from "../Nav/Nav";
import GloablNav from "../GlobalNav/GloablNav";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <div className="p-6">
        <Nav />
        <GloablNav />
      </div>
    </header>
  );
};

export default Header;
