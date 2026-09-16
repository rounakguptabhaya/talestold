const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer-style-1 bg-light">
                <div className="footer-container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-12 text-center">
                            <p className="company-about fadeIn">Copyright &copy; {currYear} <a href="javascript:void(0);">TalesTold</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;