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
  // for storing multiple data at local storage don't use hardcoded key
  // use unique key like obj.email everbody has different email or phone number
  //use these
  localStorage.setItem(obj.email, JSON.stringify(obj));

  // get details of user and show them on screen
  showNewUserOnScreen(obj);
}

function showNewUserOnScreen(user) {
  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li> ${user.name} -${user.email}</li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
