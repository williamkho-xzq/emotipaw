import React from 'react';

interface NewFeatureBannerProps {
  onDecodeNowClick: () => void;
}

const NewFeatureBanner: React.FC<NewFeatureBannerProps> = ({
  onDecodeNowClick,
}) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg mt-4 mb-8 flex justify-between items-center">
      <div className="flex items-center">
        <span className="bg-orange-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          NEW
        </span>
        <div className="px-2">
          <h2 className="text-lg font-bold">Introducing EmotiPaw Pro</h2>
          <p className="text-base">
            Our cutting-edge AI now provides deeper insights into your pet's
            emotion.
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onDecodeNowClick();
              }}
              className="text-white px-2 underline rounded-md"
            >
              Try now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFeatureBanner;
