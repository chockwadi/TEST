import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Col, Row } from 'antd'
const arr_sreens = [
  { name: "Profile", src: '/Images/AccountUserPerson.png' },
  { name: "Dashboardd", src: '/Images/dashboard.png' },
  { name: "Calender", src: '/Images/calender.png' },
  { name: "Settings", src: '/Images/settings.png' },
  { name: "FAQ's", src: '/Images/faq.png' },
]
function SideBarMobile() {
  return (
    <div >
      <Menu
        style={{ height: '100%', marginBottom: '10px' }}
        onClick={() => { }}
        selectedKeys={[localStorage.getItem("menuName")]}>
        {
          arr_sreens.map((scrn, index) => (
            <Menu.Item>
              <img src={scrn.src} />
              <span className='menu_text' key={index}>{scrn.name}</span>
              <Link to={"/"}></Link>
            </Menu.Item>

          ))
        }
      </Menu>
      <div style={{
        borderBottom: '1px solid #EFEFEF',
        borderTop: '1px solid #EFEFEF',
        margin: '30px 0'

      }}>
        <img src="/Images/refer_earn.png" />
        <span className='menu_text'>Refer and Earn</span>
        <Link to={"/"}></Link>
      </div>
    </div>
  )
}

export default SideBarMobile