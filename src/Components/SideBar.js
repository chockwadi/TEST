import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Button} from 'antd'
const arr_sreens = [
    {name: "Home", src: '/Images/home.png'},
    {name: "Directory", src: '/Images/directory.png'},
    {name: "Notification", src: '/Images/notificatoin.png'},
    {name: "Requests", src: '/Images/requests.png'},
    {name: "Calender", src: '/Images/calender.png'},
    {name: "Profile", src: '/Images/AccountUserPerson.png'},
    {name: "Settings", src: '/Images/settings.png'},
]
function SideBar() {
  return(
    <div>
    <Menu 
    style={{height: '100%'}} 
      onClick={() => {}}
      selectedKeys={[localStorage.getItem("menuName")]}>
          {
              arr_sreens.map((scrn,index) => (
                <Menu.Item className={`menu_item ${index == 0 && 'selectedmenu'}`}>
                    <img src={scrn.src} />
                    <span className='menu_text' key={index}>{scrn.name}</span>
                    <Link to={"/"}></Link>
                </Menu.Item>

              ))
          }
    </Menu>
    <Button 
      icon={<img  src="/Images/post_icon.png"/>}
      className="post_btn"><span style={{marginLeft: '5px'}}>Post</span></Button>
</div>
  )
}

export default SideBar