import profileImage from '../../images/ProfileMe/Profile7.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { LazyLoadImage } from 'react-lazy-load-image-component'


const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				{/* <img src={profileImage} className="rounded-lg w-96" alt="" /> */}
				<LazyLoadImage
					alt={"profile"}
					effect="blur"
					src={profileImage} 
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
