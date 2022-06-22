import './FormComponents.css';
import { useState } from 'react';

const FormComponents = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [errorUserName, setErrorUserName] = useState(
    'กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร'
  );
  const [errorEmail, setErrorEmail] = useState('รูปแบบอีเมลไม่ถูกต้อง');
  const [errorPassword, setErrorPassword] = useState(
    'รหัสผ่านต้องมี 8 ตัวอักษร'
  );
  const [errorRePassword, setErrorRePassword] = useState('รหัสผ่านไม่ตรงกัน');

  const [userNameColor, setUserNameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [rePasswordColor, setRePasswordColor] = useState('');

  const validateForm = e => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร');
      setUserNameColor('red');
    }

    if (email.includes('@')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง');
      setEmailColor('red');
    }

    if (password.length > 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร');
      setPasswordColor('red');
    }

    if (rePassword !== '' && rePassword === password) {
      setErrorRePassword('');
      setRePasswordColor('green');
    } else {
      setErrorRePassword('รหัสผ่านไม่ตรงกัน');
      setRePasswordColor('red');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>แบบฟอร์มลงทะเบียนข้อมูล</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>

        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>

        <div className="form-control">
          <label>รหัสผ่่าน</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>

        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            value={rePassword}
            onChange={e => setRePassword(e.target.value)}
            style={{ borderColor: rePasswordColor }}
          />
          <small style={{ color: rePasswordColor }}>{errorRePassword}</small>
        </div>

        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponents;
