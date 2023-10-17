import logoPath from "../assets/img/Logo_footer.png"

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:"smooth"})
    }
    return (
       <footer>
            <img src= { logoPath } alt="logo for Kaza" onClick={scrollToTop}/>
            <p>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
}

export default Footer