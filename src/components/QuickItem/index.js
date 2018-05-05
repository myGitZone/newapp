/**
 * @author ycl
 * @date 2018/5/4
 * @Description:
 */
import React from 'react';
import styles from './index.scss';

class QuickItem extends React.PureComponent {
  render() {
    return (
      <div className={styles['quick-item']}>
        <div className={styles.pic}>
          <img src="./images/home/law.png" alt="" />
        </div>
        <div className={styles.content}>
          dddd
        </div>
      </div>
    );
  }
}

export default QuickItem;
