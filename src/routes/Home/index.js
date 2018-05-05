/**
 * @author ycl
 * @date 2018/5/3
 * @Description:
 */
import React from 'react';
import QuickItem from 'components/QuickItem';

import styles from './index.scss';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={styles['home-container']}>
        <img className={styles.banner} src="./test/banner.png" alt="" />
        <div className={styles.quick}>
          <div className={styles.item}>
            <QuickItem />
          </div>
          <div className={styles.item}>
            <QuickItem />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
