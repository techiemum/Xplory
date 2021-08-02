import React, { useState } from 'react';

const ParksForm =({history, loggedInUser, addPark})=>{
	const initialFormData = {
		text: ""
	}
	const [formData, setFormData] = useState(initialFormData);
	function handleFormData(e){
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	function handleSubmit(e){
		e.prevetDefault()
		console.log(formData)
	}
}

export default ParksForm