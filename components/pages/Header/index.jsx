//styles
import * as style from './header.module.scss'

//modules
import Navigation from './modules/Navigation'

//context
import { useApp } from '@providers/AppProvider';

//config
import { navigationConfig as config } from './modules/Navigation/config';

const Header = () => {
	const { setCurrentPage } = useApp().page
	const { mobileMenu, setMobileMenu } = useApp().mobile

	return (
		<header className={style.container}>
			<div className={style.content}>
				<img className={style.icon} src="/images/zicon.svg" alt="zicon" />
				<Navigation />
				<div className={style.buttons}>
					{/* <div onClick={() => setCurrentPage(config.length - 2)} className={style.button}>
						<span className={style.text}>FREE MINT</span>
					</div> */}
					<div onClick={() => setCurrentPage(config.length)} className={style.button}>
						<span className={style.text}>DOWNLOAD</span>
					</div>
				</div>
				<div onClick={() => setMobileMenu(!mobileMenu)} className={style.menuHandler}>
					<img className={style.icon} src={`/images/icons/${mobileMenu ? 'close' : 'menu'}.svg`} alt="icon" />
				</div>
			</div>
		</header>
	)
}

export default Header;