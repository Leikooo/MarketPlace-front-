"use client";
import '@/components/NewsContentSlider/NewsContentSlider.scss'
import Image from 'next/image'
import React, { useState } from 'react'



export default function Newsletter() {
    const news = [
        {
            id: "1",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/news.png'
        },
        {
            id: "2",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/news.png'
        },
        {
            id: "3",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/btc.jpg'
        }
    ]

    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)
    const [trans, setTrans] = useState(false)
    const [transR, setTransR] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        setTransR(true);
        setTrans(false);
        const nextIndex = index - 1;
        const nextIndex1 = index1 - 1;
        if (nextIndex1 < 0) {
          setIndex1(news.length - 1);
        } else {
          setIndex1(nextIndex1);
        }
      
        if (nextIndex < 0) {
          setIndex(news.length - 1);
          setActiveIndex(news.length - 1);
        } else {
          setIndex(nextIndex);
          setActiveIndex(activeIndex - 1);
        }
      };
      
      const handleNext = () => {
        setTrans(true);
        setTransR(false);
        const nextIndex = index + 1;
        const nextIndex1 = index1 + 1;
        if (nextIndex1 >= news.length) {
          setIndex1(0);
        } else {
          setIndex1(nextIndex1);
        }
      
        if (nextIndex >= news.length) {
          setIndex(0);
          setActiveIndex(0);
        } else {
          setIndex(nextIndex);
          setActiveIndex(activeIndex + 1);
        }
      };

    const transformValue = `translateX(-${activeIndex * (100 / news.length)}%)`;

    const Slides = () => news.map((item) => (
        <div className="SliderItem" id={item.id}>
            <div className="SliderItemImg">
                <Image src={item.src} width={300} height={300} alt="newsPic" loading="lazy" />
            </div>
            <div className="SliderItemContent">
                <div className="SliderItemDate">
                    <p>{item.date}</p>
                </div>
                <div className="SliderItemTitle">
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="InTheNewsContainer">
            <div className="InTheNews">
                <div className="HeadNews">
                    <div className="InTheNewsText">
                        <p>In the news</p>
                    </div>
                    <div className="NewsArrows">
                        <div className="NewsArrowsLeft" onClick={handlePrev} >
                            <button className="NewsArrowsLeftBtn" />
                        </div>
                        <div className="NewsArrowsRight" onClick={handleNext} >
                            <button className="NewsArrowsRightBtn" />
                        </div>
                    </div>

                </div>
                <div className="NewsContentSliderContainer">
                    <div className="NewsContentSlider">
                        <div className="SliderContent" style={{ transform: transformValue }}>
                            <Slides />
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}