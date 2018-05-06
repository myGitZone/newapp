/**
 * @author txy
 * @date 2018/4/16
 * @Description:
 */
import React from 'react';
// import { Menu, Button, Icon, Badge, Dropdown, Avatar } from 'antd';
// import Bind from 'lodash-decorators/bind';
// import classNames from 'classnames';
import styles from './index.scss';

class Panel extends React.PureComponent {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.panel}>
        <div className={styles.title}>
          {title}
        </div>
        {children}
      </div>
    );
  }
}

export default Panel;
