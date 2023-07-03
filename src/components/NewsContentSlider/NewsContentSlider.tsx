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
        },
        {
            id: "4",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/btc.jpg'
        },
        {
            id: "5",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/btc.jpg'
        },
        {
            id: "6",
            title: 'Bring blockchain to the people. Solana supports experiences.',
            date: 'JUNE 8, 2023',
            src: '/images/btc.jpg'
        },
    ]

    const [index, setIndex] = useState(0)
    const [trans, setTrans] = useState(false)
    const [transR, setTransR] = useState(false);
    const itemWidth = 401; // ширина одного элемента слайдера

    const handlePrev = () => {
        setTransR(true);
        setTrans(false);
        const nextIndex = index - 1;
        document.querySelector('.NewsArrowsRight')!.classList.remove('disabled');
        document.querySelector('.NewsArrowsRightBtn')!.classList.remove('disabled');
        if (nextIndex < 1) {
            document.querySelector('.NewsArrowsLeft')!.classList.add('disabled')
            document.querySelector('.NewsArrowsLeftBtn')!.classList.add('disabled')
            setIndex(nextIndex);
        } else {;
            setIndex(nextIndex);
        }
    };

    const handleNext = () => {
        setTrans(true);
        setTransR(false);
        const nextIndex = index + 1;
        document.querySelector('.NewsArrowsLeft')!.classList.remove('disabled');
        document.querySelector('.NewsArrowsLeftBtn')!.classList.remove('disabled');
        if (nextIndex >= news.length-3) {
            document.querySelector('.NewsArrowsRight')!.classList.add('disabled')
            document.querySelector('.NewsArrowsRightBtn')!.classList.add('disabled')
            setIndex(nextIndex);
        } else {
            setIndex(nextIndex);
        }
    };

    const transformValue = `translateX(-${index * itemWidth}px)`;

    const Slides = () => news.map((item) => (
        <div className="SliderItem" key={item.id}>
            <div className="SliderItemImg">
                <Image src={item.src} width={300} height={300} alt="newsPic" />
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
                        <div className="NewsArrowsLeft disabled" onClick={handlePrev} >
                            <button className="NewsArrowsLeftBtn disabled" />
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