import './VideoScript.css'
import Container from 'react-bootstrap/Container';

export default function VideoScript() {
  return (
    <>
        <div className="bluePart">
            <div className="floatingContent">
        <Container>
                <iframe src="https://www.youtube.com/embed/l-aV3qt6dKw?si=E7G2HsLIAfh9ldS6" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="VideoScriptText">
                    <div className="HW-card">
                        <p className="number">01</p>
                        <h3>Requirement</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className="HW-card">
                        <p className="number white">02</p>
                        <h3>UI/UX Desing</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className="HW-card">
                        <p className="number">03</p>
                        <h3>Prototype</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className="HW-card">
                        <p className="number">04</p>
                        <h3>Development</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                </div>
        </Container>
            </div>
            <div className="blueArea"></div>
        </div>
    </>
  )
}
