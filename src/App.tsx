import React, { useState } from "react";
import {
  Camera,
  Video,
  X,
  Instagram,
  Linkedin
} from "lucide-react";

function App() {
  // Separate states for photo and video lightboxes
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");

  // Separate functions for photo and video lightboxes
  const openPhotoLightbox = (url) => {
    setCurrentImage(url);
    setIsPhotoLightboxOpen(true);
  };

  const openVideoLightbox = (url) => {
    setCurrentVideo(url);
    setIsVideoLightboxOpen(true);
  };

  const closePhotoLightbox = () => {
    setIsPhotoLightboxOpen(false);
  };

  const closeVideoLightbox = () => {
    setIsVideoLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[60vh]">
        <div 
          onClick={() => openPhotoLightbox("../img/IMG_0151.jpg")}
          className="cursor-pointer w-full h-full"
        >
          <img
            src="../img/IMG_0151.jpg"
            alt="Apartment Hero"
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              113, GROUND FLOOR, 5TH CROSS, TEACHER'S COLONY...
            </h1>
            <ul className="text-base sm:text-xl space-y-2">
              <li>2 SEPARATE ROOMS</li>
              <li>BED AND ALMIRAH EQUIPPED</li>
              <li>GEYSER + ATTACHED BATHROOM</li>
              <li>24 HR WATER AND ELECTRICITY SUPPLY</li>
              <li>VICINITY OF COLLEGE AND MAIN MARKET AREA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <section id="photos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Camera className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold mt-4">Property Photos</h2>
            <p className="text-lg mt-2 text-gray-600">Tap on the photos to view</p>
          </div>
          <div className="photo-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { url: '../img/IMG_0149.jpg', caption: 'Entrance' },
              { url: '../img/IMG_0150.jpg', caption: 'Front View' },
              { url: '../img/IMG_0147.jpg', caption: 'Bedroom 1' },
              { url: '../img/IMG_0160.jpg', caption: 'Bedroom 2' },
              { url: '../img/IMG_0152.jpg', caption: 'Street View: Towards Main Road' },
              { url: '../img/IMG_0153.jpg', caption: 'Street View' },
              { url: '../img/IMG_0161.jpg', caption: 'Hall' },
              { url: '../img/IMG_0162.jpg', caption: 'Bathroom' },
              { url: '../img/IMG_0163.jpg', caption: 'Hallway' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.url}
                  alt={`Apartment view ${index + 1}`}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openPhotoLightbox(item.url)}
                  loading="lazy"
                />
                <p className="mt-2 text-center text-gray-600">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      {isPhotoLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closePhotoLightbox}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={currentImage}
              alt="Selected view"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Video className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="text-3xl font-bold mt-4">Property Videos</h2>
            <p className="text-lg mt-2 text-gray-600">Tap on the videos to view</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { url: '../vid/IMG_0158.mp4', title: 'BEDROOM 01' },
              { url: '../vid/IMG_0157.mp4', title: 'BEDROOM 02' },
              { url: '../vid/IMG_0167.mp4', title: 'HALL' },
              { url: '../vid/IMG_0168.mp4', title: 'KITCHEN' },
              { url: '../vid/IMG_0159.mp4', title: 'BATHROOM' },
            ].map((video, index) => (
              <div
                key={index}
                onClick={() => openVideoLightbox(video.url)}
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors relative cursor-pointer"
              >
                <video
                  className="rounded-lg object-cover w-full h-full"
                  muted
                  loop
                  autoPlay
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {isVideoLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closeVideoLightbox}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              className="max-w-full max-h-[80vh] object-contain mx-auto"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {/* Further Details Section */}
  <section id="details" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Further Details About the Flat</h2>
      <p className="mt-4 text-gray-600">Learn more about the property and amenities</p>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        <p className="text-lg text-gray-600">
          This flat is located in a <span className="font-bold">prime area</span> within the 200 m radius of <span className="font-bold">DAYANANDA SAGAR COLLEGE</span>, 50m to <span className="font-bold"></span> convenient access to transportation, and shopping centers. The flat comes with all necessary amenities, ensuring a comfortable living experience. Additionally, the surrounding neighborhood is quiet and safe, making it an ideal choice for <span className="font-bold">STUDENTS</span>.
        </p>
        <p className="text-lg text-gray-600">
          The flat offers two spacious bedrooms, a modern kitchen with sufficient storage, and a comfortable living space. The attached bathroom is equipped with a geyser for hot water and well-maintained fittings. For those who enjoy natural light, the large windows in the living areas provide a warm and inviting atmosphere throughout the day.
        </p>
        <p className="text-lg text-gray-600">
          Other features include 24/7 electricity and water supply, making daily living more convenient. Don't miss out on this wonderful opportunity to live in a well-equipped, affordable flat in a <span className="font-bold">prime location</span>.
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold">PRICING:</span> Rent: <span className="font-bold">13,800/month</span> + Water/Electricity Bill (approx <span className="font-bold">1000/month</span>)
          <br />
          <span className="font-bold">SECURITY DEPOSIT:</span> <span className="font-bold">35,000</span><p>One month rent will be deducted for  <span className="font-bold">Paint Charges</span>.You will be provided with <span className="font-bold">Rental Agreement Authorized Signature</span></p>
          <br />
          <span className="font-bold">ALLOWED:</span> For 2 Students belonging to <span className="font-bold">1st/2nd Year:</span>
          <br />
          <br />
          <span className="font-bold">LOCATION:</span>113,GROUND FLOOR,5TH CROSS, TEACHER'S COLONY, KUMARSWAMY LAYOUT,NEAR DAYANANDA COLLEGE(200 ),NEAR GSI</p>
      </div>
    </div>
  </div>
      </section>
       

      {/* Map Section */}
    <section id="map" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Find Me Here</h2>

                <a 
                
          href="https://maps.app.goo.gl/1aaYxdLooTJ5DsMa6?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img 
            src="../img/IMG_D835C67C3AEF-1.jpeg" 
            alt="Map Location"
            className="w-full h-auto cursor-pointer"
          />
        </a>
      </div>
        </section>

       {/* Footer with Social Links */}
       <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/aakaas.he/" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/aakashee/" className="hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400">© 2024 AKASH PATRA. All rights reserved.</p>
          </div>
        </div>


      </footer>
    </div>
  );
}

export default App;



