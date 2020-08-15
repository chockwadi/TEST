import React from 'react'
import { Row, Col, Switch, Input, Button, Modal } from 'antd';

function PostArea() {
    const [isPaid, setIsPaid] = React.useState(false)
    const [visible, setVisible] = React.useState(false)

    const onChangePaidContent = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)

    }
    const handleOk = () => {
        setVisible(false)

    }
    return (
        <>
            <div className="card_post">
                <Row gutter={12}>
                    <Col span={4}>
                        <img src="/Images/profile_img.png" />
                    </Col>
                    <Col span={20}>
                        <span
                            className="text"
                            style={{ float: 'right' }}
                        >
                            Paid Content {"     "}
                            <Switch
                                size="small"
                                checked={isPaid}
                                checkedChildren={isPaid}
                                onChange={onChangePaidContent}
                            />
                        </span>
                        <Input.TextArea autoSize={false} placeholder="Les's start a post.." className="post_input" />
                        <div>
                            <span className="post_card_btns_container">
                                <img style={{
                                    width: '24px',
                                    height: '22px',
                                    textAlign: 'center',
                                }} src="/Images/attach.png" />
                                <p>Attach</p>
                            </span>
                            <span className="post_card_btns_container">
                                <img style={{
                                    width: '10.71px',
                                    height: '10.71px',
                                    textAlign: 'center',
                                }} src="/Images/record.png" />
                                <p>Record</p>
                            </span>
                            <Button className="post_btn_postCard">Post</Button>
                        </div>

                    </Col>
                </Row>
            </div>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <p className="cancelbtn" onClick={handleCancel}>Cancel</p>
                <Row gutter={12} style={{ margin: '10px 0px' }}>
                    <Col span={3}><img src="/Images/profile_img.png" /></Col>
                    <Col span={21}>
                        <div style={{
                            background: '#FFFFFF',
                            borderBottom: '1px solid #E7E7E7',
                            boxSizing: 'border-box',
                            borderRadius: '6px',
                        }}>
                            <p className="text12" style={{
                                display: 'inline',
                                color: '#515151'
                            }}>Short Summary</p>
                            <p className="text12" style={{
                                display: 'inline', color: "#B7B7B7"
                            }}>(This portion of your post is viewable to everyone.)</p>
                            <div className="short_summary">
                                <Input placeholder="Type your message..." className="border_less" />
                                <div className="paidContentVideo"><img src="/Images/Polygon.png" /></div>
                            </div>
                            <div>
                                <span className="post_card_btns_container">
                                    <img style={{
                                        width: '24px',
                                        height: '22px',
                                        textAlign: 'center',
                                    }} src="/Images/attach.png" />
                                    <p>Attach</p>
                                </span>
                                <span className="post_card_btns_container">
                                    <img style={{
                                        width: '10.71px',
                                        height: '10.71px',
                                        textAlign: 'center',
                                    }} src="/Images/record.png" />
                                    <p>Record</p>
                                </span>
                            </div>
                        </div>
                        <div style={{
                            background: '#FFFFFF',
                            borderBottom: '1px solid #E7E7E7',
                            boxSizing: 'border-box',
                            borderRadius: '6px',
                            marginTop: '30px'
                        }}>
                            <p className="text12" style={{
                                display: 'inline',
                                color: '#515151'
                            }}>Paid Content</p>
                            <p className="text12" style={{
                                display: 'inline', color: "#B7B7B7"
                            }}>(The content in this section will only be viewable to users that have paid.)</p>
                            <div class="paid_content_summary">
                                <div style={{ height: '148.54px' }}>
                                    <Input.TextArea autoSize={false} placeholder="Type your message..." className="border_less" />
                                </div>
                                <Button className="attachment_btn" >Attachment - PDF</Button>
                            </div>
                            <div>
                                <span className="post_card_btns_container">
                                    <img style={{
                                        width: '24px',
                                        height: '22px',
                                        textAlign: 'center',
                                    }} src="/Images/attach.png" />
                                    <p>Attach</p>
                                </span>
                                <span className="post_card_btns_container">
                                    <img style={{
                                        width: '10.71px',
                                        height: '10.71px',
                                        textAlign: 'center',
                                    }} src="/Images/record.png" />
                                    <p>Record</p>
                                </span>
                            </div>

                        </div>
                        <div style={{
                            background: '#FFFFFF',
                            boxSizing: 'border-box',
                            marginTop: '30px'
                        }}>
                            <span><p className="modal_price" style={{ color: '#434343', display: 'inline' }}>Access Fee</p></span>
                            <span><p className="modal_price" style={{ color: '#919191', display: 'inline', marginLeft: '10px' }}>$20.00</p></span>
                            <Button className="post_btn_postCard" style={{ float: 'right', display: 'inline', background: '#000', color: '#fff' }}>Post</Button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}
export default PostArea