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
    name,
    email,
    phone,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
}
