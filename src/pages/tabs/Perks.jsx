import { useState } from 'react';
import certificatesData from '../../data/certs';

export default function Perks() {
  // State to track which image is currently zoomed in
  const [activeImage, setActiveImage] = useState(null);

  return (
    // Relative is added here just in case, though the modal uses 'fixed'
    <div className="relative flex h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8 lg:min-h-0">
      
      {/* HEADER */}
      <div className="mb-4 flex shrink-0 items-center justify-between border-b border-pip-mid/50 pb-2">
        <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">
          Perks
        </span>
        <span className="text-xs uppercase tracking-widest opacity-50 text-pip-green">
          [ Entries: {certificatesData.length} ]
        </span>
      </div>

      {/* BODY: Scrollable Terminal List */}
      <div className="flex flex-1 flex-col overflow-y-auto pip-scrollbar pr-2">
        {certificatesData.map((cert, index) => (
          <div 
            key={index} 
            className="group flex flex-col gap-4 border-b border-pip-dark/50 py-4 transition-colors hover:bg-pip-green/5 sm:flex-row sm:items-center sm:justify-between lg:px-4"
          >
            
            {/* LEFT SIDE: Image + Metadata Wrapper */}
            <div className="flex flex-1 items-center gap-4">
              
              {/* CLICKABLE THUMBNAIL */}
              {cert.img && (
                <button 
                  onClick={() => setActiveImage(cert.img)}
                  className="shrink-0 h-12 w-16 sm:h-16 sm:w-24 border border-pip-mid/40 bg-pip-black p-0.5 cursor-pointer hover:border-pip-green transition-colors active:scale-95"
                  title="View Document"
                >
                  <div 
                    className="h-full w-full bg-cover bg-center opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${cert.img})` }}
                  />
                </button>
              )}

              {/* Text Metadata */}
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest text-pip-green transition-all group-hover:drop-shadow-text-glow lg:text-base">
                  {cert.title}
                </span>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[10px] sm:text-xs uppercase opacity-70">
                  <span>Issuer: {cert.issuer}</span>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setActiveImage(null)} // Clicking the background closes it
        >
          {/* Modal Container */}
          <div 
            className="relative flex flex-col border-2 border-pip-green bg-pip-black p-2 shadow-crt max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-2 border-b border-pip-mid/50 pb-2 px-2">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-pip-green animate-pulse">
                SYS_MSG: DISPLAYING_SECURE_DOCUMENT
              </span>
              <button 
                onClick={() => setActiveImage(null)}
                className="text-xs uppercase font-bold hover:text-white transition-colors hover:drop-shadow-text-glow"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* High-Res Image */}
            <img 
              src={activeImage} 
              alt="Expanded Document" 
              className="object-contain w-full h-auto max-h-[75vh] opacity-90"
            />
          </div>
        </div>
      )}

    </div>
  );
}