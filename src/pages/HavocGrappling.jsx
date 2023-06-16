import "./css/About.css";

export default function HavocGrappling() {
    return (
        <>
        <section id="havoc">
            <div id="havoc-video-container" className="videobgwrapper video-ssr"> 
                <video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" className="videobgframe" poster="https://lirp.cdn-website.com/403cfb4d/dms3rep/multi/opt/tKBI9EKXSNGhn7vm6I3X_singlelg.v2.0000000-1920w.jpg" src="https://vid.cdn-website.com/403cfb4d/videos/tKBI9EKXSNGhn7vm6I3X_singlelg-v.mp4" id="video">
                </video> 
            </div>
            <article id="about-havoc">
                <h1>Havoc Grappling</h1>
                <h2>Brazilian Jiujitsu</h2>
                <ul>
                    <li>Whilst other martial arts rely heavily on speed and strength, Brazilian Jiujitsu is a martial art with a strong emphasis on grappling and ground work. </li> 
                    <li>BJJ relies on leverage and proper technique to gain superior position on the ground, where strikes or submission holds (such as chokes and joint locks) can then be used (if necessary).</li>
                </ul>
            </article>
        </section>
        </>
    )
}