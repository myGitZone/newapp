import React from 'react';
import styles from './index.scss';

class Grids extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className={styles.grid}>
        {
          data.map((item) => {
            return (
              <div key={item.id} className={styles.griditme}>
                <img src={item.url} alt="" />
              </div>
             );
          })
        }
      </div>
    );
  }
}
export default Grids;
