import Link from "@docusaurus/Link";
import React from "react";
import styled from 'styled-components';
import { StyledCard, Emoji } from "../ethereum-org-website/";

const CallToActionCard = styled(StyledCard)`
  max-width: 100% !important;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex: 1;
  align-items: center;
`;

export default function CallToAction() {
  return (
      <CallToActionCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Emoji size={5} text=":book:" />
          </div>
          <h2 style={{ textAlign: 'center' }}>Intro to ETH</h2>
          <Link
            className="button button--primary button--lg"
            style={{ textDecoration: 'none' }}
            to="/docs/introduction/introduction/1-ethereum-101"
          >
            Get Started
          </Link>
        </div>
      </CallToActionCard>
  );
}
