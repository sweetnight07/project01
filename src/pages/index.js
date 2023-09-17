import React from "react";
import "../globals.css";
import ButtonUse from "@components/ButtonUse";
import Text from "@components/Text";
import Pointer from "@components/Pointer";
import TextArea from "@components/TextArea";

export default function Index() {
  return (
    <>
      <div className="flex flex-col bg-background w-screen h-screen">
        <div className="bg-brain w-auto h-4/5 bg-no-repeat mt-4"></div>

        <div className="absolute top-1/3 left-2/3">
          <TextArea />
        </div>

        <div>
          <Pointer />
        </div>

        <div className="inline-block align-baseline">
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
    </>
  );
}
