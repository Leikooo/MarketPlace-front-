"use client";
import PresentText from '@/components/PresentText/PresentText'
import Newsletter from '@/components/Newsletter/Newsletter'
import NewsContentSlider from '@/components/NewsContentSlider/NewsContentSlider'
import BuildInfoSlider from '@/components/BuildInfoSlider/BuildInfoSlider'
import { observer } from 'mobx-react';
import {AuthComp, RegComp} from '@/components/AuthModal/AuthModal';
import modalAuthStore from '@/app/store/modalAuth';
import { useEffect, useState } from 'react';
import UserStore from '@/app/store/UserStore';
import { check } from '@/http/userAPI';
import dropsStore from './store/dropsStore';


const Home = observer(() => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check().then(data => {
      UserStore.setIsAuth(true);
      UserStore.setUser(data);
    }).finally(() => setLoading(false))
  }, [])
  
  if (loading) {
    return <div>Loading...</div>
  }

  const isLogin = modalAuthStore.IsLoginWindow;
  return (
    <div className="Home" onClick={() => (dropsStore.setIsProfileActive(false))}>
      <div className="HomeContent">
        <PresentText />
        {isLogin ? <AuthComp /> : <RegComp />}
        <BuildInfoSlider />
        <NewsContentSlider />
        <Newsletter />
      </div>
    </div>
  )
})

export default Home;