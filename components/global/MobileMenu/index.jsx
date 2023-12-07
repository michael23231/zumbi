//styles
import * as style from './mobileMenu.module.scss'

//components
import Header from '@components/Pages/Header';
import Footer from '@components/Pages/Footer';

//context
import { useApp } from '@providers/AppProvider';

//config
import { navigation as config } from './config'

const MobileMenu = () => {
	const { mobileMenu, setMobileMenu } = useApp().mobile
	const { currentPage, setCurrentPage } = useApp().page

	return (mobileMenu === true ? (
		<section className={style.container}>
			<Header />
			<div className={style.content}>
				{config.map((item, key) => (
					<div onClick={() => (setCurrentPage(key), setMobileMenu(!mobileMenu))} className={`${style.item} ${currentPage === key ? style['isActive'] : null}`} key={key}>
						<span>{item.name}</span>
					</div>
				))}
			</div>
			<Footer />
		</section>
	) : null)
}

export default MobileMenu;