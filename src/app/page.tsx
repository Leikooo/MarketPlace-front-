
import './homePage.scss'

import PresentText from '@/components/PresentText'
import Newsletter from '@/components/Newsletter'
import NewsContentSlider from '@/components/NewsContentSlider'

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <div className="PresentText">
          <PresentText />
        </div>
        <div className="InTheNews">
          <div className="InTheNewsText">
            <p>In the news</p>
          </div>
          <div className="NewsContentSlider">
            <NewsContentSlider />
          </div>
        </div>
        <div className="Newsletter">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
