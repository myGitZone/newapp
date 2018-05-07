/**
 * @author ycl
 * @date 2018/5/6
 * @Description:
 */
import React from 'react';
// import { Tag } from 'antd';
import { Button } from 'antd-mobile';
import styles from './index.scss';


class Recommend extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <span className={styles.name}>张丽</span>
            <span className={styles.tag}>
              <span color="#2db7f5">#2db7f5</span>
              <span color="#2db7f5">#2db7f5</span>
            </span>
          </div>
          <div className={styles.desc}>
            <span style={{ paddingRight: '1rem' }}>专业领域： 借贷 交通 合同</span>
            <span color="#2db7f5">已帮助12人解惑</span>
          </div>
        </div>
        <div className={styles.right}>
          <Button type="primary" size="small">立即咨询</Button>
        </div>
      </div>
    );
  }
}

export default Recommend;
