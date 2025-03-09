import React from "react";
import StickyImg from "./StickyImg";
import Overlay from "./OverLay";


export default function TextImageSticky({ url, header,subheader, children }) {
  return (<div
  >
    <div className="relative h-[150vh] ">
      <StickyImg url={url} />
      <Overlay header={header} subheader={subheader} />
    </div>
    {children}
  </div>)
}

