import React from 'react'
import {Row, Col, Layout} from 'antd'
import HeaderComponent from '../Components/Header'
import SideBar from '../Components/SideBar'
import RightSidebar from '../Components/RightSidebar'
import HomeContent from '../Components/HomeContent'

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  return(
    <>
        <Layout>
     <Header>
          <HeaderComponent />
      </Header>
      <div className="container">
        <Layout>
          <Sider theme="light"  id="left_sidebar"> <SideBar /></Sider>
          <Content style={{border: '0.5px solid #D8D8D8', borderWidth: '0 0.5px'}}>
            <div className="home_content">
              <HomeContent />
            </div>
          </Content>
          <Sider theme="light"  id="right_sidebar"> <RightSidebar /></Sider>
        </Layout>
      </div>
      </Layout>
    </>
  )
}

export default Home