import React from "react";
import Label from "../Ui/Label";

export default function InputSide() {
  return (
    <form>
      <div>
        <Label>Bill</Label>
        <input type="text" />
      </div>

      <div>
        <Label>Select Tip %</Label>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <input type="text" />
        </div>
      </div>

      <div>
        <Label>Number off People</Label>
        <input type="text" />
      </div>
    </form>
  );
}
