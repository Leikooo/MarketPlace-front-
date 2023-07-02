
import PresentText from '@/components/PresentText/PresentText'
import Newsletter from '@/components/Newsletter/Newsletter'
import NewsContentSlider from '@/components/NewsContentSlider/NewsContentSlider'

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <PresentText />
        <NewsContentSlider />
        <Newsletter />
      </div>
    </div>
  )
}
