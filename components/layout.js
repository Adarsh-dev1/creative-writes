import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="bg-red-500">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
