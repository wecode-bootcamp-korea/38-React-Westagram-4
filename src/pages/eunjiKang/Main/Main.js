import { useEffect, useState } from 'react';
import Aside from '../../../components/eunjikang/Aside/Aside';
import Feed from '../../../components/eunjikang/Feed/Feed';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import './responsive.scss';

const Main = () => {
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    fetch('/data/userFeeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="wrapper">
          <div className="main_left">
            {feeds && feeds.map(feed => <Feed feed={feed} key={feed.id} />)}
          </div>
          <div className="main_right">
            <Aside />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
