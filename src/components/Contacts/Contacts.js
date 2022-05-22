import ContactForm from "./ContactForm/ContactForm.js";
import ContactsHeader from "./ContactsHeader/ContactsHeader.js";

export default function Contacts() {
	return (
		<div className="contacts-wrapper">
			<ContactsHeader />
			<ContactForm />
		</div>
	);
}
