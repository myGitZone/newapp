/**
 * @author ycl
 * @date 2018/5/3
 * @Description:
 */
import React from 'react';
import QuickItem from 'components/QuickItem';
import NavBar from 'components/NavBar';
import Panel from 'components/Panel';
import OrganizationItem from 'components/OrganizationItem';
import Dynamic from 'components/Dynamic';
import Recommend from 'components/Recommend';


import styles from './index.scss';
// 司法所
import sfs from './images/sifasuo.png';
// 法律服务所
import flfws from './images/falvfuwusuo.png';
// 网格员
import wgy from './images/wanggeyuan.png';
// 律所
import ls from './images/lvsuo.png';
// 全部分类
import all from './images/all.png';

// 法律咨询
import flzx from './images/law.png';
// 事件上报
import event from './images/event.png';
// 调解指南
import tiaojie from './images/tiaojie.png';
// 上访指南
import shangfang from './images/shangfang.png';


const data = [{
  title: '司法所',
  icon: sfs
}, {
  title: '法律服务所',
  icon: flfws
}, {
  title: '网格员',
  icon: wgy
}, {
  title: '律所',
  icon: ls
}, {
  title: '全部分类',
  icon: all
}];

class HomePage extends React.PureComponent {
  render() {
    const leftContent = (
      <div className={styles.map} />
    );
    return (
      <div className={styles['home-container']}>
        {/* 搜索框 */}
        <NavBar leftContent={leftContent} />
        {/* 图片展示 */}
        <img className={styles.banner} src="./test/banner.png" alt="" />
        {/* 快速定位 */}
        <div className={styles['quick-container']}>
          <div className={styles.quick}>
            <div className={styles.item}>
              <QuickItem icon={flzx} title="法律咨询" desc="智能推荐法律服务人员，免费为您解惑" />
            </div>
            <div className={styles.item}>
              <QuickItem icon={event} title="事件上报" desc="快速了解调解需知" />
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.quick}>
            <div className={styles.item}>
              <QuickItem icon={tiaojie} title="调解指南" desc="快速了解调解须知" />
            </div>
            <div className={styles.item}>
              <QuickItem icon={shangfang} title="上访指南" desc="帮助您更有效的上访" />
            </div>
          </div>
        </div>
        {/* 机构查找 */}
        <Panel title="机构查找">
          <div className={styles.content}>
            {
              data.map((item) => {
                return <OrganizationItem key={item.title} icon={item.icon} title={item.title} />;
              })
            }
          </div>
        </Panel>
        {/* 政法动态 */}
        <Panel title={<div>政法动态<span className={styles.more}>查看更多</span></div>}>
          <div className={styles.dynamic}>
            <Dynamic icon="./images/home/dynamic_sfj.png" title="司法局" subtitle="查找司法机构与法工" />
            <Dynamic icon="./images/home/dynamic_zzww.png" title="维稳综治" subtitle="查找司法机构与法工" />
          </div>
          <div className={styles.dynamic} style={{ paddingBottom: '1rem' }}>
            <Dynamic icon="./images/home/ceshi.png" title="司法局" subtitle="查找司法机构与法工" />
            <Dynamic icon="./images/home/ceshi1.png" title="维稳综治" subtitle="查找司法机构与法工" />
          </div>
        </Panel>
        {/* 推荐律师 */}
        <Panel title={<div>推荐律师<span className={styles.more}>查看更多</span></div>}>
          <Recommend />
          <div style={{ margin: '0 1rem' }} className={styles.line} />
          <Recommend />
          <div style={{ margin: '0 1rem' }} className={styles.line} />
          <Recommend />
          <div style={{ margin: '0 1rem' }} className={styles.line} />
          <Recommend />
        </Panel>
      </div>
    );
  }
}

export default HomePage;
