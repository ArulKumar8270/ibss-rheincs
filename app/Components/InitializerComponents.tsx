'use client';

import dynamic from 'next/dynamic';

const SwiperInit = dynamic(() => import('./SwiperInit'), { ssr: false, loading: () => null });
const OwlCarouselInit = dynamic(() => import('./OwlCarouselInit'), { ssr: false, loading: () => null });
const CounterInit = dynamic(() => import('./CounterInit'), { ssr: false, loading: () => null });
const ScriptReinit = dynamic(() => import('./ScriptReinit'), { ssr: false, loading: () => null });
const MobileMenuInit = dynamic(() => import('./MobileMenuInit'), { ssr: false, loading: () => null });
const MobileSearchInit = dynamic(() => import('./MobileSearchInit'), { ssr: false, loading: () => null });
const SearchBoxInit = dynamic(() => import('./SearchBoxInit'), { ssr: false, loading: () => null });
const LottieInit = dynamic(() => import('./LottieInit'), { ssr: false, loading: () => null });
const VideoPopupInit = dynamic(() => import('./VideoPopupInit'), { ssr: false, loading: () => null });
const PopoverInit = dynamic(() => import('./PopoverInit'), { ssr: false, loading: () => null });

export default function InitializerComponents() {
  return (
    <>
      <SwiperInit />
      <OwlCarouselInit />
      <CounterInit />
      <MobileMenuInit />
      <MobileSearchInit />
      <SearchBoxInit />
      <LottieInit />
      <VideoPopupInit />
      <PopoverInit />
      <ScriptReinit />
    </>
  );
}
