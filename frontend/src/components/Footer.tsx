const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="text-center text-gray-500 p-4 border-t-2 border-black">
        <p>&copy; {date.getFullYear()} Emoji Riddle</p>
      </footer>
    </>
  );
};

export default Footer;
