import React from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";
import { useContext } from "react";
export default function AppTheme() {
  return (
    <div>
      \
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

function Header() {
  return <header className="header">Header</header>;
}
function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Product />
    </main>
  );
}
function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}
function User() {
  return <div>User</div>;
}
function Product() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}
function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            DarkMode
          </span>
        ) : (
          <span>LightMode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <footer className="footer">Footer</footer>
    </div>
  );
}
