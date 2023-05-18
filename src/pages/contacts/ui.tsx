import "leaflet/dist/leaflet.css";
import { MapContainer} from "react-leaflet";

export default function App() {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
    </MapContainer>
  );
}
