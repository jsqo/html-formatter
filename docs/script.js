


function formatHTML (e) {
	//
}

function copyToClipboard (e) {
	const outputTextArea = document.querySelector("textarea[name='outputHTML']");
	let text = outputTextArea.value.trim();
	if (text) {
		navigator.clipboard.writeText(outputTextArea.value);
	}
}


