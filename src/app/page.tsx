"use client";
import PresentText from '@/components/PresentText/PresentText'
import Newsletter from '@/components/Newsletter/Newsletter'
import NewsContentSlider from '@/components/NewsContentSlider/NewsContentSlider'
import BuildInfoSlider from '@/components/BuildInfoSlider/BuildInfoSlider'
import { observer } from 'mobx-react';
import AuthModal from '@/components/AuthModal/AuthModal';

const Home = observer(() => {
  return (
    <div className="Home">
      <div className="HomeContent">
        <PresentText />
        <AuthModal />
        <BuildInfoSlider />
        <NewsContentSlider />
        <Newsletter />
      </div>
    </div>
  )
})

export default Home;