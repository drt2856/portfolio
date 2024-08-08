import PropTypes from 'prop-types';

export function Project({photo_src,title,description,tecnologies_src,link}){
    return(
        <div className="card col-11 col-sm-4 col-md-3 m-2 blue-shadow resaltar " >
           {photo_src}
            <div className="card-body">
              <h5 className="card-title">
                <a href={link} target='_blank' >
                  {title} <i className='bi bi-link' />
                </a>
              </h5>
              <p className="card-text">{description}
              </p>
                {tecnologies_src&&tecnologies_src.map(tec=>(
                    <img key={tec.src} src={tec.src} alt={tec.alt} className="mx-2" />
                ))}
            </div>
          </div>
    )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tecnologies_src: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  photo_src: PropTypes.element
};