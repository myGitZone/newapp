import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getRouterData } from './common/router';

import styles from './index.scss';


const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <ConnectedRouter history={history} className={styles.container}>
      <TransitionGroup>
        <CSSTransition key="/user" classNames="fade" timeout={300}>
          <Switch>
            <Route exact path="/user" component={UserLayout} />
            <Route
              path="/"
              component={BasicLayout}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ConnectedRouter>
  );
}

export default RouterConfig;
