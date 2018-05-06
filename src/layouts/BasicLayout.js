/**
 * @author ycl
 * @date 2018/5/2
 * @Description:
 */
import React from 'react';
import { TabBar } from 'antd-mobile';

import { tabBarInfo } from '../common/tabBarInfo';

class BasicLayout extends React.PureComponent {
  state = {
    selectedTab: tabBarInfo[0].key
  };

  handleOnPress(key) {
    this.setState({
      selectedTab: key
    });
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0
      }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            tabBarInfo.map((item) => {
              const Com = item.Component;
              return (
                <TabBar.Item
                  title={item.title}
                  key={item.key}
                  icon={<div style={{
                    width: '2rem',
                    height: '2rem',
                    background: `url(${item.iconUrl}) center center /  2rem 2rem no-repeat`
                  }}
                  />}
                  selectedIcon={<div style={{
                    width: '2rem',
                    height: '2rem',
                    background: `url(${item.selectedIconUrl}) center center /  2rem 2rem no-repeat`
                  }}
                  />}
                  selected={this.state.selectedTab === item.key}
                  onPress={() => this.handleOnPress(item.key)}
                >
                  <Com />
                </TabBar.Item>
              );
            })
          }
        </TabBar>
      </div>
    );
  }
}

export default BasicLayout;
