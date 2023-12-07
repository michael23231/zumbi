//styles
import Footer from '@components/pages/Footer';
import * as style from './mobile.module.scss'

const Mobile = () => {

	return (
		<section className={style.container}>
			<div className={style.content}>
				<img src="/images/logo.svg" alt="logo" />
				<h1>The mobile version of the site is under development and will be available soon</h1>
			</div>
			<Footer />
		</section>
	)
}

export default Mobile;