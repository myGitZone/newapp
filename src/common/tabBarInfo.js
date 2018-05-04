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
  iconUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectedIconUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
  Component: HomePage
}, {
  title: '分类',
  key: 'Classify',
  iconUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectedIconUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
  Component: ClassifyPage
}, {
  title: '在线咨询',
  key: 'OnlineAsk',
  iconUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectedIconUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
  Component: OnlineAskPage
}, {
  title: '资讯',
  key: 'Information',
  iconUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectedIconUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
  Component: InformationPage
}, {
  title: '我的',
  key: 'My',
  iconUrl: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
  selectedIconUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
  Component: MyPage
}];
