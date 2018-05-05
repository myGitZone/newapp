import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import { getRouterData } from './common/router';

import styles from './index.scss';


const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <ConnectedRouter history={history} className={styles.container}>
      <Switch>
        <Route exact path="/user" component={UserLayout} />
        <Route
          path="/"
          component={BasicLayout}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
