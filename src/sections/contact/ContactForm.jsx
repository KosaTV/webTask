import FormInput from "../../components/formInput";
import useFormValues from "../../hooks/useFormValues";

const ContactForm = () => {
	const initialFormValues = {
		firstName: "",
		lastName: "",
		phone: "",
		note: ""
	};

	const {values, handleChange, resetForm} = useFormValues(initialFormValues);

	const handleSubmit = e => {
		e.preventDefault();

		//* Assuming submit was successful
		resetForm();
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<FormInput required name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} />
			<FormInput required name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange} />
			<FormInput required type="tel" name="phone" style="full" placeholder="Phone Number" value={values.phone} onChange={handleChange} />
			<FormInput required name="note" style="full" placeholder="What Service are you interested in?" value={values.note} onChange={handleChange} />
			<button type="submit" className="btn">
				Submit now
			</button>
		</form>
	);
};

export default ContactForm;
