import './Main.scss';
import Aside from '../../../components/eunjikang/Aside/Aside';
import Feed from '../../../components/eunjikang/Feed/Feed';

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <Feed />
        <div className="main_right">
          <Aside />
        </div>
      </div>
    </main>
  );
};

export default Main;
