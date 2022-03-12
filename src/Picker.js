import { HexColorPicker } from "react-colorful";

function Picker({color, setColor}) {
    return <HexColorPicker style={{float: "left"}} color={color} onChange={setColor} />;
}

export default Picker;