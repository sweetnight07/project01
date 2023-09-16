import React from "react";
import "../globals.css";
import ButtonUse from "@components/ButtonUse";
import Text from "@components/Text";
import Pointer from "@components/Pointer";
import TextArea from "@components/TextArea";

export default function Index() {
  return (
    <div className="bg-background w-screen h-screen">
      <div className="bg-brain w-auto h-4/5 bg-no-repeat"></div>

      <div
        className="float-right"
        style={{ position: "absolute", top: "29%", left: "65%" }}
      >
        <TextArea />
      </div>

      <div className="inline-block align-baseline">
        <Pointer />
        <Text />
        <ButtonUse text="Cerebrum" />
        <ButtonUse text="Frontal Lobe" />
        <ButtonUse text="Temporal Lobe" />
        <ButtonUse text="Spinal Cord" />
        <ButtonUse text="Parietal Lobe" />
        <ButtonUse text="Occipital Lobe" />
        <ButtonUse text="Cerebellum" />
        <ButtonUse text="Cortex" />
      </div>
    </div>
  );
}
