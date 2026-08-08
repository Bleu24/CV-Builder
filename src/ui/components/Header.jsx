import "../styles/Page.css";

export default function Header({ user }) {

  console.log(user);
  return (
    <header id="user-info">
      <h1 className={user.fullName || "no-info"} >{user.fullName || "No Full Name Provided"}</h1>
      <h2 className={user.degree || "no-info"}> {user.degree || "No Degree Provided" }</h2>
      <h3>
        {user.address} | {user.email}{" "}
      </h3>
    </header>
  );
}
