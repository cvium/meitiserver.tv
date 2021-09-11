import * as React from "react"
import TextLoop from 'react-text-loop';
import UltimateMediaServer from "../components/UltimateMediaServer";
import { LandingPage } from "../components/Layout"
import Sponsors from "../components/Sponsors";
import CommunityRun from "../components/CommunityRun";
import PrivacyFirst from "../components/PrivacyFirst";

const IndexPage = () => {
  return (
    <LandingPage>
      <div className="bg-torch-700">
        <div className="my-44">
          <h1 className="text-center text-thatch-100 text-5xl font-extrabold">Bring{" "}
          <TextLoop>
            <span>context</span>
            <span>portability</span>
            <span>metadata</span>
            <span>artwork</span>
          </TextLoop>{" "}
          to your media</h1>
        </div>
      </div>
      <UltimateMediaServer />
      <CommunityRun />
      <Sponsors />
      <PrivacyFirst />
    </LandingPage>
  )
}

export default IndexPage
