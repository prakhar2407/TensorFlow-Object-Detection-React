import React, { useEffect, useState } from "react";
import Proctor from "./Proctor";
function Question() {
  const [screenShotTaken, setScreenShotTaken] = useState(false);
  const [personMissing, setPersonMissing] = useState(false);
  const [isMoreThanOnePerson, setIsMoreThanOnePerson] = useState(false);
  const [copyPaste, setCopyPaste] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [switchedTab, setSwitchedTab] = useState(false);
  const [warning, setWarnings] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("ScreenShot Taken");
  }, [screenShotTaken]);

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("Person Missing");
  }, [personMissing]);

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("More Than One Person");
  }, [isMoreThanOnePerson]);

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("Copy Paste Detected");
  }, [copyPaste]);

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("Full Screen Changed");
  }, [isFullScreen]);

  useEffect(() => {
    setWarnings(warning + 1);
    console.log("Tab Switched");
  }, [switchedTab]);

  return (
    <div>
      <Proctor
        setScreenShotTaken={setScreenShotTaken}
        setPersonMissing={setPersonMissing}
        setIsMoreThanOnePerson={setIsMoreThanOnePerson}
        setCopyPaste={setCopyPaste}
        setFullScreen={setFullScreen}
        setSwitchedTab={setSwitchedTab}
        setImage={setImage}
      />
    </div>
  );
}

export default Question;
