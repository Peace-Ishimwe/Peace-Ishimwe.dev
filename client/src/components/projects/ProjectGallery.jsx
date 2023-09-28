import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { id } = useParams();
	const data = singleProjectData[id];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{data.ProjectImages.map((project) => {
				return (
						<LazyLoadImage
							alt={project.title}
							effect="opacity"
							height={"100%"}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-full"
							key={project.id}
							src={project.img} 
						/>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
