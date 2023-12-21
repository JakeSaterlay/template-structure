import NavBar from "../CommonComponents/NavBar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div style={{ padding: 10 }}>{children}</div>
    </>
  );
}

export default RootLayout;
