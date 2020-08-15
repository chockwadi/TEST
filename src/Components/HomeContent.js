import React, { Component } from 'react'
import { Tabs } from 'antd';
import HomeGlobalContent from './HomeGlobalContent'

const { TabPane } = Tabs;

function HomeContent() {
    return (
        <>
            <Tabs defaultActiveKey="1" centered id="center_container">
                <TabPane tab="Global" key="1">
                    <HomeGlobalContent />
                </TabPane>
                <TabPane tab="Following" key="2">
                    Following
                </TabPane>
                <TabPane tab=" My Activities" key="3">
                    My Activities
                </TabPane>
                <TabPane tab=" Purchases" key="4">
                   Purchases
                </TabPane>
            </Tabs>
        </>
    )
}
export default HomeContent