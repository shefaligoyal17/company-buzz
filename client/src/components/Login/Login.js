import React,{Component} from 'react';
import styles from './Login.module.css';
import img from '../../Images/company-logo.png';
import Loginbutton from './LoginButton/LoginButton';

class Login extends Component{
    render(){
        return(
            <div className={styles.mainImg}>
                  <div className={styles.overlay}>
                <div className={styles.loginDiv}>
                        <img src={img} alt='company Logo'/>
                        <h5>Create Your Own Buzz</h5>
                        <Loginbutton/>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;