const Card = ({children, reverse}) => {
    //Conditional class
        return (
            <div className={`card ${reverse && "reverse"}`}>
                {children}
            </div>
        )
    
    //Conditional style
        // return (
        //     <div
        //          className="card"
        //          style={{
        //             backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        //             color: reverse ? "#fff" : "#000",
        //     }}>
        //         {children}
        //     </div>
        // )
}

export default Card