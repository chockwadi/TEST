import React from 'react'
import { Drawer, Input, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideBarMobile from './SideBarMobile'
function Header() {
   const [visible, setVisible] = React.useState(false)
   const onClose = () => {
      setVisible(false)
   }
   const showDrawer = () => {
      setVisible(true);
   };
   return (
      <div className="PageHeaderContainer">
         <div className="container " id="moboile_header_css">
            <img className="logo" src={'/Images/logo.png'} />
            <img className="logomobile" onClick={showDrawer} src={'/Images/logo_mobile.png'} />
            <Input
               className="searchBox"
               placeholder="Search"
               prefix={<img
                  src={'/Images/search_icon.png'}
               />} />
            <img src={'/Images/profile_img.png'} className="prfile_img_header" />
            <img src={'/Images/header_icon.png'} className="header_icon" />
            <p className="profile_name_header">
               entice.com/jin
            </p>
         </div>
         <Drawer
            title={[
               <div>
                  <p>9:41</p>
                  <Row gutter={12}>
                     <Col span={4}><img src="/Images/profile_img.png" /></Col>
                     <Col span={2}></Col>
                     <Col span={18}>
                        <p className="text_drawer_head">Jin Lee</p>
                        <span style={{ display: 'block' }}>
                           <p className="text_drawer_head2">entice.com/jinlee </p><img src="/Images/right_tick.png" />
                        </span>
                        <p className="text_drawer_head3">1MM <span>Followers</span> </p>
                     </Col>
                  </Row>
                  <div  className="drawer_header_style">
                     <Row gutter={12}>
                        <Col span={12}>        <p style={{ display: 'inline', fontSize: '10px'}}><span style={{ fontWeight: 'bold', }}>Balance:</span> $2,000.00 </p>
                        </Col>
                        <Col span={12}> <a className="add_widthDraw">Add/Withdraw Funds</a></Col>
                     </Row>
                  </div>
               </div>
            ]}
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
         >
            <SideBarMobile />
         </Drawer>
      </div>
   )
}

export default Header