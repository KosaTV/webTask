import {useState} from "react";

function useFormValues(initialValues) {
	const [values, setValues] = useState(initialValues);

	const handleChange = event => {
		const {name, value} = event.target;
		setValues(prevValues => ({
			...prevValues,
			[name]: value
		}));
	};

	const resetForm = () => {
		setValues(initialValues);
	};

	return {values, handleChange, resetForm};
}

export default useFormValues;
