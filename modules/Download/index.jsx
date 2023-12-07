import Link from 'next/link'

//styles
import * as style from './download.module.scss'

const Download = () => {
	const isAvailable = true

	return (
		<section className={style.container}>
			<div className={style.content}>
				<div className={style.texts}>
					<div className={style.header}>
						<h1>Zombie Arena is coming</h1>
						<h2>Just survive!</h2>
					</div>
					{/* <p className={style.text}>Hey survivor, to start your adventure fighting infected zombies, you must have a crypto wallet on the Polygon network and install the game on your computer.</p> */}
				</div>
				<div className={style.card}>
					<div className={style.image}>
						<img src="/images/game-banner.webp" alt="banner" />
					</div>
					<div className={style.available}>
						<h1>AVAILABLE ON:</h1>
						<div className={style.platforms}>
							<div className={style.item}>
								<img src="/images/icons/windows.svg" alt="windows" />
								<span>WINDOWS</span>
							</div>
							<div className={style.item}>
								<img src="/images/icons/steam.svg" alt="windows" />
								<span>STEAM</span>
							</div>
						</div>
					</div>
					<a href={!isAvailable ? '' : 'https://store.steampowered.com/app/2151820/Zombie_Arena/'} className={`${style.button} ${!isAvailable ? style.disabled : ''}`} target={'_blank'} rel="noreferrer">
						<span>{isAvailable ? 'DOWNLOAD' : 'DOWNLOAD SOON'}</span>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Download;