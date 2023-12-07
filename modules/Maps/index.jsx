import { useState } from 'react';

//styles
import * as style from './maps.module.scss';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

//config
import { maps as config } from './config';

const Maps = () => {
	const [swiper, setSwiper] = useState({})

	return (
		<section className={style.container}>
			<div onClick={() => swiper.slidePrev()} className={style.selector}>
				<img src="/images/icons/left-selector.svg" alt="Selector" />
			</div>
			<Swiper
				className={style.swiper}
				slidesPerView={'auto'}
				loop={true}
				longSwipes={false}
				followFinger={false}
				direction={'horizontal'}
				onInit={(e) => setSwiper(e)}>
				{config.map((item, key) => (
					<SwiperSlide key={key}>
						<div className={style.content}>
							<div className={style.image}>
								<div className={style.shadow} />
								<img src={`/images/maps/${item.name.toLowerCase().replace(" ", '')}.webp`} alt="map" />
							</div>
							<h1 className={style.name}>{item.name}</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div onClick={() => swiper.slideNext()} className={style.selector}>
				<img src="/images/icons/right-selector.svg" alt="Selector" />
			</div>
		</section>
	)
}

export default Maps;