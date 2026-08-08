import ProfileHero from "./ProfileHero";
import ExecutiveSummary from "./ExecutiveSummary";
import Principles from "./Principles";
import MyBelief from "./MyBelief";
import Comparison from "./Comparison";
import Journey from "./Journey";
import Differentiators from "./Differentiators";
import ExpertiseMatrix from "./ExpertiseMatrix";
import CurrentFocus from "./CurrentFocus";
import FinalCTA from "./FinalCTA";


export default function Profile() {
  return (
    <>
      <ProfileHero />
      <ExecutiveSummary />
      <Principles/>
      <MyBelief/>
      <Comparison/>
      <Journey/>
      <Differentiators/>
      <ExpertiseMatrix/>
      <CurrentFocus/>
      <FinalCTA/>
      
    </>
  );
}