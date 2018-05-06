/**
 * @author ycl
 * @date 2018/5/5
 * @Description:
 */
import React from 'react';

import styles from './index.scss';

const OrganizationItem = ({ title, icon }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.pic} style={{ backgroundImage: `url('${icon}')` }} />
      <div className={styles.title}>{title}</div>
    </article>
  );
};

export default OrganizationItem;
