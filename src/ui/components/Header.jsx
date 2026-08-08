import "../styles/Page.css";

export default function Header({ user }) {

  return (
    <header id="user-info">
      <h1 className={user.fullName || "no-info"} >{user.fullName || "Full Name "}</h1>
      <h2 className={user.degree || "no-info"}> {user.degree || "Degree " }</h2>
      <h3 className={(!user.address && !user.email) && "no-info"}>
        {user.address || "Address" } | {user.email || "Email"}{" "}
      </h3>
    </header>
  );
}
