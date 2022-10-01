function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phone = event.target.phoneNumber.value;

  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("phone", phone);

  //
  const obj = {
    name: name,
    email: email,
    phone: phone,
  };
  localStorage.setItem("userDetails", JSON.stringify(obj));
}
