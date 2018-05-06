/**
 * @author ycl
 * @date 2018/5/4
 * @Description:
 */
import React from 'react';
import styles from './index.scss';

class QuickItem extends React.PureComponent {
  render() {
    const { icon, title, desc } = this.props;
    return (
      <div className={styles['quick-item']}>
        <div className={styles.pic}>
          <img src={icon} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default QuickItem;
