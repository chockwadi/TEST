import React, { Component } from 'react'
import { Row, Col, Switch, Input, Button } from 'antd';
import PostCard from './PostCard'
import PostArea from './PostArea'

function HomeGlobalContent() {
    const posts= [
        {
            heading:"Jin Lee",
            subHeading:"Chief Executive Officer, Entice",
            text:"Hi everyone! I’m excited to share this exclusive content on Entice. For today’s topic, I’ll be sharing my top 5 tips for hitting what may seem like an impossible quota.",
            image:"/Images/profile_img.png",
            price: 1,
            isPurchased: false,
            noOfPurchases:40,
            likes:500


        },
        {
            heading:"Cassandra Ferrara",
            subHeading:"VP Developer Relations, Observable",
            text:"Hi everyone! I’m excited to share this exclusive content on Entice. For today’s topic, I’ll be sharing my top 5 tips for hitting what may seem like an impossible quota.",
            image:"/Images/img_pr.png",
            price: 5,
            isPurchased: false,
            noOfPurchases:40,
            likes:500



        },
        {
            heading:"Jin Lee",
            subHeading:"Chief Executive Officer, Entice",
            text:"Hi everyone! I’m excited to share this exclusive content on Entice. For today’s topic, I’ll be sharing my top 5 tips for hitting what may seem like an impossible quota.",
            image:"/Images/profile_img.png",
            price: 1,
            isPurchased: true,
            noOfPurchases:40,
            likes:500


        },
        {
            heading:"Cassandra Ferrara",
            subHeading:"VP Developer Relations, Observable",
            text:"Hi everyone! I’m excited to share this exclusive content on Entice. For today’s topic, I’ll be sharing my top 5 tips for hitting what may seem like an impossible quota.",
            image:"/Images/img_pr.png",
            price: 5,
            isPurchased: false,
            noOfPurchases:40,
            likes:500

        },
        {
            heading:"Cassandra Ferrara",
            subHeading:"VP Developer Relations, Observable",
            text:"Hi everyone! I’m excited to share this exclusive content on Entice. For today’s topic, I’ll be sharing my top 5 tips for hitting what may seem like an impossible quota.",
            image:"/Images/img_pr.png",
            price: 5,
            isPurchased: true,
            noOfPurchases:40,
            likes:500

        },
    ]
    return (
        <>
           <div>
           <div className="posts_container">
                <PostArea />
                {
                    posts.map( (item,index) => (
                        <PostCard 
                            heading={item.heading} 
                            subHeading={item.subHeading} 
                            text={item.text} 
                            image={item.image} 
                            key={index}
                            isPurchased={item.isPurchased}
                            noOfPurchases={item.noOfPurchases}
                            likes={item.likes}
                            />
                    ))
                }
           </div>
           </div>
        </>
    )
}
export default HomeGlobalContent