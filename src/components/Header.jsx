import PropTypes from 'prop-types'


// function Header(props) {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }

// export default Header

const Header = ({text, bgColor, textColor}) => {
    return (
        <header style={{backgroundColor: bgColor, color: textColor}}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
//In-case if we remove props value in app.js file 
    Header.defaultProps = {
        text: "Feedback UI",
        bgColor: "rgba(0,0,0,0.4",
        textColor: "#ff6a95",
    }

Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}


export default Header
