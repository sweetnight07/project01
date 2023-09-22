import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../globals.css";
import ButtonUse from "@components/ButtonUse";
import Text from "@components/Text";
import Pointer from "@components/Pointer";
import TextArea from "@components/TextArea";

const baseURL = "http://localhost";
const PORT = 5050;

const axiosInstance = axios.create({ baseURL: "${baseURL}:${PORT}" });

export default function Index() {
  const [description, setDescription] = useState("None");

  const handler = (buttonText) => {
    axiosInstance.get("/description", { text: buttonText }).then((res) => {
      // setDescription(res.data);
      console.log(res.data);
    });
  };

  console.log(description);

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
          <ButtonUse
            text="Cerebrum"
            handler={handler.bind(null, "cerebrumButton")}
          />
          <ButtonUse
            text="Frontal Lobe"
            handler={handler.bind(null, "frontallobeButton")}
          />
          <ButtonUse
            text="Temporal Lobe"
            handler={handler.bind(null, "temporallobeButton")}
          />
          <ButtonUse
            text="Spinal Cord"
            handler={handler.bind(null, "spinalcordButton")}
          />
          <ButtonUse
            text="Parietal Lobe"
            handler={handler.bind(null, "parietallobeButton")}
          />
          <ButtonUse
            text="Occipital Lobe"
            handler={handler.bind(null, "occipitallobeButton")}
          />
          <ButtonUse
            text="Cerebellum"
            handler={handler.bind(null, "cerebellumButton")}
          />
          <ButtonUse
            text="Cortex"
            handler={handler.bind(null, "cortexButton")}
          />
        </div>
      </div>
    </>
  );
}
