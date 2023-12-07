//styles
import * as style from './home.module.scss';

const Home = () => {

	return (
		<section className={style.container}>
			<div className={style.content}>
				<div className={style.logo}>
					<img src="/images/logo.svg" alt="Zombie Arena logo" />
				</div>
			</div>
		</section>
	)
}

export default Home;