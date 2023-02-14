
import CustomerSay from './CustomerSay.js'
import Specials from './Specials.js';
import AboutBrothers from './AboutBrothers.js';
import Heading from "./Heading";

function Homepage() {
    return (
        <>

            <Heading/>
            <Specials />
            <CustomerSay />
            <AboutBrothers />
        </>
    )
}

export default Homepage;