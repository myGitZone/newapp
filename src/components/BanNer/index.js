import React from 'react';
import styles from './index.scss';
import rigth from './img/ioc_rg.png';

class Banner extends React.Component {
  render() {
    return (
      <div className={styles.banner}>
        <span>附近机构</span>
        <span>查看附件法律机构
          <em className={styles.rightarrow}>
            <img src={rigth} alt="" />
          </em>
        </span>
      </div>
    );
  }
}
export default Banner;
