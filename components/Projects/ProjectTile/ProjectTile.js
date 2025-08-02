import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const tiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, description, url, image } = project;

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    VanillaTilt.init(projectCard.current, tiltOptions);
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`group block overflow-hidden rounded-xl border-2 border-gray-700 bg-gray-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        width: isDesktop ? "400px" : "320px",
        flex: "0 0 auto",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="relative w-full bg-gray-800 rounded-t-xl overflow-hidden group-hover:bg-gray-700 transition-colors duration-300">
        {/* 16:9 Aspect Ratio Container */}
        <div 
          className="w-full bg-gray-700 group-hover:scale-105 transition-all duration-300"
          style={{ aspectRatio: "16/9" }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="group-hover:text-gray-300 transition-colors duration-300">Image not available</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col justify-start">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>
        <p style={{ 
          color: '#e5e7eb',
          fontSize: '20px',
          lineHeight: '1.2',
          marginTop: '8px',
          fontWeight: '400'
        }}>
          {description || "No description available"}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;