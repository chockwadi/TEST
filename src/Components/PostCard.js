import React, { Component } from 'react'
import { Row, Col, Button, Dropdown, Menu } from 'antd';

function PostArea(props) {
    const menu = (
        <div className="purchase_confirm">
            <Menu   >
                <Menu.Item >
                    Are you sure?
                </Menu.Item>
                <Menu.Item>
                    yes
                </Menu.Item>
                <Menu.Item>
                    No
                </Menu.Item>
            </Menu>
        </div>
    );
    const menu2 = (
        <div className="purchase_confirm">
            <Menu >
                <Menu.Item>
               <img style={{width: '11px',height: '15px', marginRight: '5px'}}  src="/Images/AccountUserPerson.png"/> Unfollow @jinlee
                </Menu.Item>
                <Menu.Item>
                <img style={{width: '11px',height: '15px', marginRight: '5px'}} src="/Images/noti.png" />
                Mute @jinlee
                </Menu.Item>
                <Menu.Item>
                <img style={{width: '11px',height: '15px',marginRight: '5px'}}  src="/Images/blockIcon.png"/>
                Block @jinlee
                </Menu.Item>
                <Menu.Item>
                <img style={{width: '11px',height: '15px',marginRight: '5px'}}  src="/Images/reportIcon.png"/>
                Report content
                </Menu.Item>
            </Menu>
        </div>
    );
    const menu3 = (
        <div className="purchase_confirm">
            <Menu >
                <Menu.Item>
                Copy link to post

                </Menu.Item>
                <Menu.Item>
                Send by Direct Message
                </Menu.Item>
              
            </Menu>
        </div>
    );
    return (
        <>
            <div className="card_post">
                {
                    props.isPurchased &&
                    <div>
                        <div className="post_share_content">
                            <span>
                                <img src="/Images/right_arrow.png" />
                                <Dropdown
                                    overlay={menu3} placement="bottomRight" arrow>
                                        <span>Share</span>
                                    </Dropdown>
                            </span>
                            <span>
                                <img src="/Images/heart.png" />
                                <span>{props.likes}</span>
                            </span>
                            <span>
                                <img src="/Images/shop_bag.png" />
                                <span>{props.noOfPurchases} Purchases</span>
                            </span>
                        </div>
                    </div>
                }
                <Row gutter={12}>
                    <Col span={4}>
                        <img id="mobile_image_post" src={props.image} />
                    </Col>
                    <Col span={20}>
                        <Dropdown
                            overlay={menu2} placement="bottomRight" arrow>
                            <img src={"/Images/arrow_down.png"} style={{ float: 'right' }} />
                        </Dropdown>
                        <p className="post_heading">{props.heading}</p>
                        <p className="post_heading_sub">{props.subHeading}</p>
                        <p className="post_text">{props.text}</p>
                        <div>
                            <p className="price_text">Account Fee ${props.price}</p>
                            {
                                props.isPurchased ?
                                    <Button
                                        className="purchased_btn_postCard">
                                        <span>
                                            <span>Purchased</span>
                                            <img style={{ marginLeft: '5px' }} src="/Images/arrow_down2.png" />
                                        </span>

                                    </Button>
                                    :
                                    <Dropdown
                                        overlay={menu} placement="topRight" arrow>
                                        <Button className="purchase_btn_postCard"> Purchase</Button>
                                    </Dropdown>
                            }
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    )
}
export default PostArea