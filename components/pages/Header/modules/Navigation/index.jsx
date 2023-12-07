//styles
import * as style from './navigation.module.scss'

//config
import { navigationConfig as config } from './config'

//context
import { useApp } from '@providers/AppProvider';

const Navigation = () => {
	const { currentPage, setCurrentPage } = useApp().page

	return (
		<nav className={style.container}>
			{config.map((item, key) => (
				<div onClick={() => setCurrentPage(key)} className={`${style.item} ${currentPage === key ? style['isActive'] : null}`} key={key}>
					<span>{item.name}</span>
				</div>
			))}
		</nav>
	)
}

export default Navigation;