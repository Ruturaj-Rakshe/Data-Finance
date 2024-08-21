import React from "react";
import Typewriter from "typewriter-effect";

const Typewriter = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
