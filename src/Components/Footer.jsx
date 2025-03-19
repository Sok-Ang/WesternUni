function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-10">
      <aside>
        <img src="/logo.png" alt="logo" className="w-16 ml-8" />
        <p>
          <b>Western University</b>
          <br />
          Where Quality Comes First.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href="/Institutes">Institutes</a>
        <a className="link link-hover" href="/Admission">Admission</a>
        <a className="link link-hover" href="/Activity">News & Events</a>
        <a className="link link-hover" href="/">Student Affairs</a>
        <a className="link link-hover" href="/">International Program</a>
      </nav>
      <nav>
        <h6 className="footer-title">University</h6>
        <a className="link link-hover" href="/About">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
export default Footer;