import gsap from 'gsap';
import { ScrollTrigger, SplitText, GSDevTools, ScrollSmoother } from "gsap/all";

import MyNavbar from './components/MyNavbar';
import MyHero from './components/MyHero';
import MyCoffees from './components/MyCoffees';
import MyAbout from './components/MyAbout';
import MyArt from './components/MyArt';
import MyMenu from './components/MyMenu';
import MyContact from './components/MyContact';

gsap.registerPlugin(ScrollTrigger, SplitText, GSDevTools, ScrollSmoother);


const App = () => {

	return (
		<main>
			<MyNavbar/>
			<MyHero/>
			<MyCoffees/>
			<MyAbout/>
			<MyArt/>
			<MyMenu/>
			<MyContact/>
		</main>
	)
}

export default App
