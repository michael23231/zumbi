//styles
import * as style from './about.module.scss';

const About = () => {

	return (
		<section className={style.container}>
			<div className={style.content}>
				<div className={style.texts}>
					<h1 className={style.title}>
						SURVIVE TO EARN
					</h1>
					<p className={style.text}>
						Zombie Arena is a free to play multiplayer survival NFT game focused on team cooperation.<br /><br />We use blockchain and NFT technology to secure player ownership about their items.<br /><br />	Win stable coin rewards being one of the best survivors in ranking mode.
					</p>
				</div>
				<div className={style.image}>
					<img className={style.survivors} src="/images/survivor-girls.webp" alt="survivor girls" />
				</div>
			</div>
		</section>
	)
}

export default About;