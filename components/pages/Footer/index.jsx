//styles
import * as style from './footer.module.scss'

//modules
import Socials from './modules/Socials';

const Footer = () => {

	return (
		<footer className={style.container}>
			<div className={style.content}>
				<Socials />
			</div>
		</footer>
	)
}

export default Footer;