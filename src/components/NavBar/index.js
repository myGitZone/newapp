import React from 'react';
import { SearchBar } from 'antd-mobile';
import styles from './index.scss';


class NavBartop extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props;
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarleft}>{leftContent}</div>
        <div className={styles.navbarconten} style={!leftContent ? { width: '90%' } : { width: '80%' }}>
          <SearchBar placeholder="请输入关键字搜索" />
        </div>
        <div className={styles.navbarright}>{rightContent}</div>
      </div>
    );
  }
}
export default NavBartop;
