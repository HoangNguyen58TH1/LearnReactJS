import React from "react";

import AwesomeImage from "./components4/AwesomeImage"
import HoverOpacity from "./components4/HoverOpacity"

export default function App4() {
  return (
    <div className="App4">
      <HoverOpacity>
        <AwesomeImage src="http://dummyimage.com/300x200.jpg/cc0000/ffffff" />
      </HoverOpacity>
    </div>
  );
}
