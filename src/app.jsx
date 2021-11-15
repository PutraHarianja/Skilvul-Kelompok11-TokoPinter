import React from "react";
import BookItemCard from "./component/book-item-card";

function App() {
  return (
    <React.Fragment>
      <BookItemCard author="JJ Smith" title="10-Day Green Smoothie Cleanse" price="$8" url="https://imgv2-2-f.scribdassets.com/img/word_document/233284731/original/b8c280a574/1502110988" onDescription={() => { console.log("Description") }} onAddToCart={() => { console.log("Added") }} />
    </React.Fragment>
  )
}

export default App;
