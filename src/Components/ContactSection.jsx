import { Envelope, MapPinArea, Phone } from "@phosphor-icons/react";

function ContactSection() {
  return (
    <div className="w-full flex justify-evenly px-24">
      <div className="card w-80">
        <div className="card-body justify-center items-center">
          <Envelope
            weight={"duotone"}
            className="text-blue-600 rounded-full p-4 text-sm bg-blue-100 w-16 h-16"
          />
          <h2 className="card-title">Email</h2>
          <p className="text-sm text-gray-500 text-center">
            Our friendly team is here to help.
          </p>
          <a href="/" className="text-blue-600">
            info_wu@westernuniversity.edu.kh
          </a>
        </div>
      </div>
      <div className="card w-80">
        <div className="card-body justify-center items-center">
          <MapPinArea
            weight={"duotone"}
            className="text-blue-600 rounded-full p-4 text-sm bg-blue-100 w-16 h-16"
          />
          <h2 className="card-title">Office</h2>
          <p className="text-sm text-gray-500 text-center">
            Our friendly team is here to help.
          </p>
          <a
            href="https://maps.app.goo.gl/rKsdLr6r71U84e8i7"
            className="text-blue-600"
          >
            Western Unicersity Main Campus
          </a>
          <a
            href="https://maps.app.goo.gl/DL3Xvp8dkVxMmW8c9"
            className="text-blue-600"
          >
            Western Unicersity Toul SvayPrey
          </a>
        </div>
      </div>
      <div className="card w-80">
        <div className="card-body justify-center items-center">
          <Phone
            weight={"duotone"}
            className="text-blue-600 rounded-full p-4 text-sm bg-blue-100 w-16 h-16"
          />
          <h2 className="card-title">Phone Number</h2>
          <p className="text-sm text-gray-500 text-center">
            Our friendly team is here to help. 
          </p>
          <a href="/" className="text-blue-600 text-center">
            +855 96 8000 111
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
