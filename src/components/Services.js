import React from 'react';
import Title from './Title';
import services from '../constants/services';
const Services = ({}) => {
	return (
		<section className='section bg-grey'>
			<Title title='services' />
			<div className='section-center services-center'>
				{services.map((service) => {
					return (
						<article key={service.id} className='service'>
							<div className='service-icon'></div>
							{service.icon}
							<h4>{service.title}</h4>
							<div className='underline'></div>
							<p>{service.text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
