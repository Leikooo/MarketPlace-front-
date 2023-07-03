
import PresentText from '@/components/PresentText/PresentText'
import Newsletter from '@/components/Newsletter/Newsletter'
import NewsContentSlider from '@/components/NewsContentSlider/NewsContentSlider'
import BuildInfoSlider from '@/components/BuildInfoSlider/BuildInfoSlider'

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <PresentText />
        <BuildInfoSlider />
        <NewsContentSlider />
        <Newsletter />
      </div>
    </div>
  )
}
