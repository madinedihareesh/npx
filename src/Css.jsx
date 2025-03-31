import React from 'react'
import './Css.css'
import styles from './styles.module.css'

const Css = () => {
    const makeUP={
        btn:{
            color:'white',
            backgroundColor:'blue',
            borderRadius:'5px',
            padding:'2px'
        }
    }
  return (
    <div>

<button style={{color:'red',backgroundColor:'black'}}>Inline</button>
<button style={makeUP.btn}>Internal</button>
<button className="btn">External</button>
<button className={styles.butn}>Module</button>
    </div>
  )
}

export default Css