import React from 'react';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => (
	<div className="app__footer section__padding">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">Adress 1</p>
				<p className="p__opensans">Adress 2</p>
				<p className="p__opensans">+042103120302</p>
			</div>
			<div className="app__footer-links_logo">
				<img src={images.gericht} alt="gericht" />
				<p className="p__opensans">
					The best way to find yourself is to lose yourself in the
					service of others.
				</p>
				<img
					src={images.spoon}
					alt="spoon"
					className="spoon__img"
					style={{ marginTop: 15 }}
				/>
				<div className="app__footer_links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday - Friday</p>
				<p className="p__opensans">08:00 - 02:00</p>
				<p className="p__opensans">Saturday - Sunday</p>
				<p className="p__opensans">08:00 - 23:00</p>
			</div>
		</div>
		<div className="footer__copyright">
			<p className="p__opensans">2021 Gericht. All rights reserved.</p>
		</div>
	</div>
);

export default Footer;
