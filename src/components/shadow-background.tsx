"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframes
const shadowSlide = keyframes`
  from {
    background: hsl(var(--primary) / 20%);
    right: 460px;
  }
  to {
    background: hsl(var(--primary) / 80%);
    right: 160px;
  }
`;

// Define the styled component
const Shadow = styled.div`
  position: absolute;
  background: hsl(var(--primary) / 0%);
  border-radius: 24px;
  rotate: 35deg;
  width: 260px;
  top: 200px;
  height: 400px;
  filter: blur(150px);
  will-change: transform;
  animation: ${shadowSlide} infinite 4s linear alternate;

  @media (max-width: 1024px) {
    top: 70px;
    animation: ${keyframes`
      from {
        background: hsl(var(--primary) / 20%);
        right: 460px;
      }
      to {
        background: hsl(var(--primary) / 50%);
        right: 160px;
      }
    `} infinite 4s linear alternate;
  }

  @media (max-width: 768px) {
    top: 70px;
    width: 100px;
    height: 350px;
    filter: blur(60px);
    animation: ${keyframes`
      from {
        background: hsl(var(--primary) / 20%);
        right: 280px;
      }
      to {
        background: hsl(var(--primary) / 30%);
        right: 100px;
      }
    `} infinite 4s linear alternate;
  }
`;

// Create the React component
export const ShadowBackground = () => {
  return <Shadow />;
};
