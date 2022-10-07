import './Main.scss';
import './responsive.scss';
import Aside from '../../../components/eunjikang/Aside/Aside';
import Feed from '../../../components/eunjikang/Feed/Feed';
import Nav from '../../../components/Nav/Nav';

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="wrapper">
          <Feed />
          <div className="main_right">
            <Aside />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
