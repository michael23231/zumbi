//next
import Head from 'next/head'

//styles
import * as style from '@scss/app.module.scss'

//components
import Header from '@components/pages/Header'
import Main from '@components/pages/Main'
import Footer from '@components/pages/Footer'

//modules
import Home from '@components/pages/Main/modules/Home'
import About from '@components/pages/Main/modules/About'
import Survivors from '@components/pages/Main/modules/Survivors'
import Weapons from '@components/pages/Main/modules/Weapons'
import Maps from '@components/pages/Main/modules/Maps'
import Mint from '@components/pages/Main/modules/Mint'
import Team from '@components/pages/Main/modules/Team'
import Download from '@components/pages/Main/modules/Download'

export default function App() {
	return (
		<div className={style.container}>
			<Head>
				<title>Zombie Arena - Survival Game on Blockchain</title>
				<meta name="description" content="A Extraction-to-earn Zombies NFT game on Cosmos network. Just Survive!" />
				<meta name="keywords" content="nft, crypto, game, zombie, survival, free to play" />
				<meta property="og:title" content="Join The Riot Now - Extraction Game on Blockchain" />
				<meta property="og:image" content="/images/game-banner.webp" />
				<meta property="og:url" content="https://zombiearena.io" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main>
				<Home />	
				<About />
				<Survivors />
				<Weapons />
				<Maps />
				{/* <Mint /> */}
				<Team />
				<Download />
			</Main>
			<Header />
			<Footer />
		</div>
	)
}
