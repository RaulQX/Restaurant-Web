import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef} alt="chef" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title={"Chef's Words"} />
			<h1 className="headtext__cormorant">What we believe in</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote"></img>
					<p className="p__opensans">
						Chef says what the chef wants to say because the chef says that he says what
						he wants to say yes lorem ipsum
					</p>
				</div>
				<p className="p__opensans">
					e chef says that he says what he wants to say yes lorem ipsume chef says that he
					says what he wants to say yes lorem ipsume chef says that he says what he wants
					to say yes lorem ipsume chef says that he says what he wants to say yes lorem
					ipsum
				</p>
			</div>
			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={images.sign} alt="sign" />
			</div>
		</div>
	</div>
);

export default Chef;
