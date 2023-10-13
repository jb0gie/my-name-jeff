import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Jeff Jeeves
			<small className={Styles.byline}>🚀 Built using Astro, in an entrypoint 🕳️</small>
		</footer>
	);
}
export default Footer;
