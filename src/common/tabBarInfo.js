// 首页
import HomePage from 'routes/Home';
// 分类
import ClassifyPage from 'routes/Classify';
// 在线咨询
import OnlineAskPage from 'routes/OnlineAsk';
// 资讯
import InformationPage from 'routes/Information';
// 我的
import MyPage from 'routes/My';

export const tabBarInfo = [{
  title: '首页',
  key: 'Homoe',
  iconUrl: './images/tarbar/home.png',
  selectedIconUrl: './images/tarbar/home_select.png',
  Component: HomePage
}, {
  title: '分类',
  key: 'Classify',
  iconUrl: './images/tarbar/classify.png',
  selectedIconUrl: './images/tarbar/classify_select.png',
  Component: ClassifyPage
}, {
  title: '在线咨询',
  key: 'OnlineAsk',
  iconUrl: './images/tarbar/online_ask.png',
  selectedIconUrl: './images/tarbar/online_ask_select.png',
  Component: OnlineAskPage
}, {
  title: '资讯',
  key: 'Information',
  iconUrl: './images/tarbar/information.png',
  selectedIconUrl: './images/tarbar/information_select.png',
  Component: InformationPage
}, {
  title: '我的',
  key: 'My',
  iconUrl: './images/tarbar/my.png',
  selectedIconUrl: './images/tarbar/my_select.png',
  Component: MyPage
}];
