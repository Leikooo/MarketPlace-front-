
import '@/components/NewsContentSlider.scss'
import Image from 'next/image'
function NewsCards() {
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
            src: '/images/news.png'
        }
    ]
    return news.map((item) => (
        <div className="SliderItem" id={item.id}>
            <div className="SliderItemImg">
                <Image src={item.src} width={50} height={50} alt="newsPic"/>
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
    ))}

export default function Newsletter() {
    return (
        <div className="Slider">
            <div className="SliderContent">
                <NewsCards />
            </div>
        </div >
    )
}