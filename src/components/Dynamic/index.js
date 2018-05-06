/**
 * @author ycl
 * @date 2018/5/6
 * @Description:
 */
import React from 'react';
import styles from './index.scss';


class Dynamic extends React.PureComponent {
  render() {
    const { icon, title, subtitle } = this.props;
    return (
      <div className={styles.container}>
        <img src={icon} alt="" />
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    );
  }
}

export default Dynamic;
