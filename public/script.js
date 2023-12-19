

document.getElementById("btn_enviar").addEventListener("click", ()=>{
	const valor_prompt = document.getElementById("prompt").value;
	const campo_respuesta = document.getElementById("campo_respuesta");

	fetch("/chat", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ prompt: valor_prompt }),
	})
	.then(response => response.json())
	.then(data => {
		campo_respuesta.innerHTML = data.message;
	})
	.catch((error) => {
		console.error("Error: ", error);
	})


})