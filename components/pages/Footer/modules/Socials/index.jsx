//styles
import * as style from './socials.module.scss'

//config
import { socials as config } from './config';

const Socials = () => {

	return (
		<div className={style.container}>
			{config.map((item, key) => (
				<a className={style.item} href={item.url} target={'_blank'} key={key} rel="noreferrer">
					<img src={`/images/icons/socials/${item.name.toLowerCase()}.svg`} alt={`${item.name} icon`} />
				</a>
			))}
		</div>
	)
}

export default Socials;