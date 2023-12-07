import { useEffect, useState, useContext } from 'react';

//styles
import * as style from './main.module.scss';
import "swiper/css/effect-fade";

//swiper
import { EffectFade, Scrollbar, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

//context
import { useApp } from '@providers/AppProvider';

const Main = ({ children }) => {
	const context = useApp().page

	const [swiper, setSwiper] = useState()
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		context.setCurrentPage(currentSlide);
	}, [currentSlide])

	useEffect(() => {
		if(swiper) {
			swiper.slideTo(context.currentPage)
		}
	}, [context.currentPage])

	return (
		<main className={style.container}>
			<Swiper
				onSlideChange={(e) => setCurrentSlide(e.realIndex)}
				className={style.swiper} direction={"vertical"} scrollbar={true}
				mousewheel={true}
				longSwipes={false}
				simulateTouch={false}
				followFinger={false}
				effect={'fade'}
				modules={[EffectFade, Scrollbar, Mousewheel]}
				onInit={(e) => setSwiper(e)}>
				{children.map((item, key) => (
					<SwiperSlide key={key}>
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}

export default Main;