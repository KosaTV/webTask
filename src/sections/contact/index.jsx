import "./index.css";
import Heading from "../../components/heading";
import Text from "../../components/text";
import ContactForm from "./ContactForm";
import contactModel from "../../models/contact.model";

const Contact = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="content">
					<Heading level={2}>{contactModel.heading}</Heading>
					<Text>{contactModel.text}</Text>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
