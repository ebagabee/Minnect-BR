import './card.css';

function Card({ imageSrc, imageAlt, name, title, description, imageClass, gridClass }) {
  return (
    <div className={`grid-gallery-card ${gridClass}`}>
      <div className="grid-gallery-content">
        <div className={`grid-gallery-front ${imageClass}`}>
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="grid-gallery-back">
          <div className='back-upper'>
            <div className="text-[16px] mb-[2px] font-bold">{name}</div>
            <div className="text-[14px]">{title}</div>
          </div>
          <div className="back-bottom text-[12px]">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
