import SplitText from '/SplitText'
import SquareIcon from '/src/assets/SquareIcon.png'
import '/header.css'

function Header() {
    const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <Link to="/">
                <img src={SquareIcon} className="logo" />
                <SplitText
                    text="ECD"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                </Link>
            </div>
            <div className="headerCenter">
                <Link to="/"><SplitText
                    text="home"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                /></Link>'
                <Link to="/login"><SplitText
                    text="login"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                /></Link>
                <Link to='contest'><SplitText
                    text="contact"
                    className="text-2xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                /></Link>    
            </div>
            <div className="headerRight"></div>
        </div>
    );
}

export default Header