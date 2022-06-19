
var user = auth.currentUser;
if (user) {
  console.log("User logged in already or has just logged in.");
  console.log(user.uid);

  let role = getRole(user.email)
  let url = "member.html";

  if (role == "admin") {
    url = "admin.html";
  }

  window.location.assign(url);

} else {
  let url = "login.html";
  window.location.assign(url);
}
