import Image from "next/image";
import './project.scss';
import type { StaticImageData } from "next/image"

export function Project(
  {
    title,
    description,
    imageSrc,
    link
  }
  :
  {
    title: string,
    description: string,
    imageSrc: StaticImageData,
    link: string
  }
) {
  return (
    <div className="portfolio__project">
      <div className="portfolio__project-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            fill
            src={imageSrc}
            alt={title}
            className="portfolio__project-image"
            style={{ objectFit: 'contain' }}
          />
        </a>
      </div>
      <div className="portfolio__project-title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}