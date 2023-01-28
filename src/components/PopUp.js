import { useEffect } from "react";
import "../CSS Folder/PopUp.css";

const PopUp = ({ children, closepopUp }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  return (
    <>
      <section className="popUp" onClick={() => closepopUp()}></section>
      <section className="popUp_box">{children}</section>
    </>
  );
};

export default PopUp;
