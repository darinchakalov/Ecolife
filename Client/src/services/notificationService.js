import Swal from "sweetalert2";

export const success = (message) => {
	return Swal.fire({
		position: "top-end",
		icon: "success",
		title: message,
		showConfirmButton: false,
		timer: 1500,
	});
};

export const fail = (message) => {
	return Swal.fire({
		position: "top-end",
		icon: "error",
		title: message,
		showConfirmButton: false,
		timer: 1500,
	});
};

export const warning = (message) => {
	return Swal.fire({
		position: "top-end",
		icon: "warning",
		title: message,
		showConfirmButton: false,
		timer: 1500,
	});
};
