import "leaflet/dist/leaflet.css"
import { Popup, Marker, TileLayer, MapContainer } from "react-leaflet"

export default function Contacts() {
  return (
    <MapContainer id="ContactsMAPA" center={[51.505, -0.09]} zoom={13} style={{ width: "100%", height: "calc(100vh - 120px)" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
