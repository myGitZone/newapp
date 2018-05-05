/**
 * @author ycl
 * @date 2018/5/3
 * @Description:
 */
import React from 'react';
import NavBartop from 'components/NavBar';
import news from 'components/NavBar/img/news.png';
import Banner from 'components/BanNer';
import Grids from 'components/GriD';
import styles from './index.scss';

class ClassifyPage extends React.PureComponent {
  render() {
    const listData = [
      {
        id: 1,
        url: './test/sfs.png'
      },
      {
        id: 2,
        url: './test/flfws.png'
      },
      {
        id: 3,
        url: './test/wsbdwly.png'
      },
      {
        id: 4,
        url: './test/lssws.png'
      },
      {
        id: 5,
        url: './test/ls.png'
      },
      {
        id: 6,
        url: './test/tjzz.png'
      }
    ];

    return (
      <div>
        <NavBartop rightContent={<img src={news} className={styles.new} alt="" />} />
        <Banner />
        <Grids data={listData} />
      </div>
    );
  }
}

export default ClassifyPage;
