function login() {
  console.log("Login pulsado");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!window.auth) {
    alert("Auth no inicializado");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
}

function sendReset() {
  const email = document.getElementById("resetEmail").value;
  const msg = document.getElementById("resetMsg");

  if (!email) {
    msg.textContent = "Introduce un correo válido.";
    msg.className = "msg text-danger";
    return;
  }

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      msg.textContent = "Te hemos enviado un email para restablecer tu contraseña.";
      msg.className = "msg text-success";
    })
    .catch(error => {
      msg.textContent = error.message;
      msg.className = "msg text-danger";
    });
}


