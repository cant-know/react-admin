import styles from './index.module.scss'
import { Button } from 'antd';

function Comp1(){
  return(
    <div className={styles.box}>
      <p>111</p>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default Comp1