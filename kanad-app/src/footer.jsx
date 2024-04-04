function footer() {

    const footerCss = {
        backgroundColor: '#ccc',
        position: 'static',
        bottom: 0,
        width: '100%',
        height: '10vh',

    };

    let footerH5 = {
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '2rem'
    }

    return(

        <footer style={footerCss}>
            <div>

            </div>
            <h5 style={footerH5}>
               {new Date().getFullYear()} &copy; G-KANAD Company Limited
            </h5>
        </footer>
    );
    
}

export default footer;