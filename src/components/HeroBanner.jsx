import heroBannerPath from "../assets/img/heroBanner.png"
function HeroBanner() {
    return (
        <div className="heroBannerWrapper">
            <img className= "heroBannerImg" src={ heroBannerPath } alt="ocean view" />
            <div className="heroBannerText">Chez vous, partout et ailleurs</div>        
        </div>
    )
}

export default HeroBanner