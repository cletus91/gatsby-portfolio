import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => {
	return (
		<Layout>
			<SEO title='Contact Page' description='Contact | CD Portfolio' />
			<section className='contact-page'>
				<article className='contact-form'>
					<h3>Drop by and say Hi</h3>
					<form method='post' action='https://formspree.io/f/xdopezne'>
						<div className='form-group'>
							<input
								type='text'
								name='name'
								placeholder='name'
								className='form-control'
								required
							/>
							<input
								type='email'
								name='email'
								placeholder='email'
								className='form-control'
								required
							/>
							<textarea
								name='message'
								placeholder='message'
								rows='5'
								className='form-control'
								maxLength='200'
								required></textarea>
							<button type='submit' className='submit-btn btn'>
								submit
							</button>
						</div>
					</form>
				</article>
			</section>
		</Layout>
	);
};

export default contact;
