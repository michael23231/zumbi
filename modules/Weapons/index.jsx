import { useState } from 'react';

//styles
import * as style from './weapons.module.scss'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

//tilt
import Tilt from 'react-parallax-tilt';

//config
import { weapons as config } from './config';

const Weapons = () => {
	const [swiper, setSwiper] = useState()

	return (
		<section className={style.container}>
			<div onClick={() => swiper.slidePrev()} className={style.selector}>
				<img src="/images/icons/left-selector.svg" alt="Selector" />
			</div>
			<div className={style.content}>
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
							<div className={style.header}>
								<h1 className={style.title}>{item.name}</h1>
								<div className={style.stats}>
									{item.stats.map((item, key) => (
										<div className={style.item} key={key}>
											<img className={style.icon} src={`/images/icons/weapons/${item.name}.svg`} alt={item.name} />
											<span className={style.text}>{item.name}: <b>{item.value}</b></span>
										</div>
									))}
								</div>
							</div>
							<Tilt
								tiltMaxAngleX={5}
								tiltMaxAngleY={5}
								scale={1.05}
								perspective={700}
								className={style.image}>
								<img className={style.weapon} src={`/images/weapons/${item.name}.webp`} alt="Weapon" />
							</Tilt>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div onClick={() => swiper.slideNext()} className={style.selector}>
				<img src="/images/icons/right-selector.svg" alt="Selector" />
			</div>
		</section>
	)
}

export default Weapons;