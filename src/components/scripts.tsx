import React from "react";
import Script from "next/script";

const Scripts = () => {
  return (
    <>
      <Script
        defer
        data-url="https://devhunt.org/tool/the-character-headcanon-generator"
        src="https://cdn.jsdelivr.net/gh/sidiDev/devhunt-banner/indexV0.js"
      />
    </>
  );
};

export default Scripts;
