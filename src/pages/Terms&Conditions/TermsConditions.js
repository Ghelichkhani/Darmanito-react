import React from 'react'
import TermsConditionsHeading from './TermsConditionsHeading';
import TopNav from "../../Components/TopNav";
import Support from "../../Components/support";
import Footer from "../../Components/footer";
import TermsConditionsContent from '../Terms&Conditions/TermsConditionsContent';
export default function TermsConditions() {
    return (
        <div>
            <TopNav/>
            <TermsConditionsHeading/>
            <TermsConditionsContent/>
            <Support/>
            <Footer/>
        </div>
        
    )
}
