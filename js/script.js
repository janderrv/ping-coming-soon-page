const validate = () => {
  const email = document.getElementById("email");
  if (email.value) {
    if (!validateEmail(email.value)) {
      paintBorder();
      showInvalidEmail();
    } else {
      validEmail();
    }
  } else {
    paintBorder();
    showNoEmail();
  }
};

const checkScreen = () => {
  const width = window.innerWidth;
  if (width <= 900) {
    const button = document.getElementById("email");
    const error = document.getElementById("error");
    insertAfter(error, button);
  }
};

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const validEmail = () => {
  const input = document.getElementById("email");
  input.style.border = "1px solid hsl(223, 100%, 88%)";
  document.getElementById("error").innerText = "";
};

const showInvalidEmail = () => {
  document.getElementById("error").innerText =
    "Please provide a valid email address";
};

const showNoEmail = () => {
  document.getElementById("error").innerText = "Please provide a email address";
};

const paintBorder = () => {
  const input = document.getElementById("email");
  input.style.border = "1px solid red";
};

const validateEmail = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
