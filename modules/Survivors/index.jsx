import { useState } from 'react';

//styles
import * as style from './survivors.module.scss'
import 'swiper/css';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

//config
import { survivors as config } from './config';

const Survivors = () => {
	const [swiper, setSwiper] = useState()

	return (
		<section className={style.container}>
			<div onClick={() => swiper.slidePrev()} className={style.selector}>
				<img src="/images/icons/left-selector.svg" alt="Selector" />
			</div>
			<Swiper
				className={style.swiper}
				loop={true}
				longSwipes={false}
				followFinger={false}
				slidesPerView={1}
				spaceBetween={500}
				direction={'horizontal'}
				onInit={(e) => setSwiper(e)}>
				{config.map((item, key) => (
					<SwiperSlide key={key}>
						<div className={style.content}>
							<div className={style.bio}>
								<div className={style.header}>
									<img className={style.icon} src={`/images/icons/survivors/${item.name}.svg`} alt="Survivor icon" />
									<h1 className={style.title}>{item.name}</h1>
								</div>
								<p className={style.text}>{item.bio}</p>
							</div>
							<div className={style.image}>
								<img className={style.character} src={`/images/survivors/${item.name}.webp`} alt="Survivor image" />
							</div>
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

export default Survivors;