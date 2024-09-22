import { Idea } from '../../../entities/Idea';
import { ideaConst } from '../../../shared/lib/consts/IdeaConst/ideaConst';
import { ProductListTitle } from '../../../shared/ui/ProductListTitle';
import { Join } from '../../../widgets/join';

export const AboutPage = () => {
	return (
		<div>
			<ProductListTitle
				title='A brand built on the love of craftmanship,quality and outstanding customer service'
				className='text-center mt-30 mb-32'
			/>

			{ideaConst.map((item, index) => (
				<Idea
					className='hidden'
					MainText={item.MainText}
					firstIdeaText={item.firstIdeaText}
					secondIdeaText={item.secondIdeaText}
					image={item.image}
					key={index}
					position={item.position}
				/>
			))}

			<Join />
		</div>
	);
};
