import React from "react"
import Layout from "../../components/layout"
import DepthSoon from "../../components/in-depth/DepthSoon"
import {
    PredictaTextWrapper,
    PredictaTitle,
    PredictaText,
} from "../../components/BlockElements/BlockElements";
import { DepthGreeceData } from "./navLinksGreece";

const Conclusion = (props) => (
    <Layout>
        <DepthSoon 
            title={DepthGreeceData.title}
            navItems={DepthGreeceData.navItems}
        />
        <PredictaTitle marginBottom="80px" marginTop="120px">
            CONCLUSION
        </PredictaTitle>
        <PredictaTextWrapper >
            <PredictaText marginBottom="120px">
                The first wave of the pandemic was surprisingly well controlled in Greece due to the speedy 
                government reaction, mobilized by the limited ICU capacity of the National Health System. 
                The second wave was much harder to manage and contain, as it was very difficult to close-down 
                the economy for a second time and to control the population mobility.  Overall, factors such 
                as the Greek climate, the geographical structure and the living conditions of the elderly 
                part of the population, contributed in positive way to the effects of the pandemic in Greece 
                and led to a smaller number o1f Deaths per million population.
            </PredictaText>
        </PredictaTextWrapper>
    </Layout>
)

export default Conclusion