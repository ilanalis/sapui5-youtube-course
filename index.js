sap.ui.define(["sap/m/Button"], function (Button) {
  "use strict";

  new Button("myBuutonId", {
    text: "this is my button",
    press: () => console.log("dont touch"),
  }).placeAt("content");
});
