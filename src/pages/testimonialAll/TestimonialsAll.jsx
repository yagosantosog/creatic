import React from 'react';
import './testimonialsAll.css';
import { TestimonialCard } from '../../components';

const testimonialsData = [
    {
        image: 'https://picsum.photos/100?random=1',
        username: 'John Doe',
        email: 'john@example.com',
        testimonial_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum justo sit amet libero ultricies, sit amet aliquet magna accumsan.'
    },
    {
        image: 'https://picsum.photos/100?random=2',
        username: 'Jane Smith',
        email: 'jane@example.com',
        testimonial_text: 'Nullam feugiat felis ut magna dictum, sed feugiat ante molestie. Sed eget accumsan risus, et ultrices libero.'
    },
    {
        image: 'https://picsum.photos/100?random=3',
        username: 'Mark Johnson',
        email: 'mark@example.com',
        testimonial_text: 'Vivamus et nisi vitae nunc posuere efficitur. Phasellus lobortis ex ut aliquam fringilla. Proin tristique mauris in orci varius, nec gravida sem placerat.'
    },
    {
        image: 'https://picsum.photos/100?random=4',
        username: 'Emily Brown',
        email: 'emily@example.com',
        testimonial_text: 'Curabitur rhoncus nisi id sapien ultricies, at luctus velit dictum. Nulla nec pharetra mauris, eget egestas ex.'
    },
    {
        image: 'https://picsum.photos/100?random=5',
        username: 'David Wilson',
        email: 'david@example.com',
        testimonial_text: 'Integer id urna sed nunc finibus faucibus sit amet et orci. Duis lobortis turpis non sapien interdum aliquet.'
    },
    {
        image: 'https://picsum.photos/100?random=6',
        username: 'Sophia Miller',
        email: 'sophia@example.com',
        testimonial_text: 'Praesent auctor turpis eu lectus placerat tristique. Donec vel massa aliquam, malesuada tortor eu, dignissim odio.'
    },
    {
        image: 'https://picsum.photos/100?random=7',
        username: 'Michael Davis',
        email: 'michael@example.com',
        testimonial_text: 'Donec auctor magna id magna luctus, quis dapibus quam convallis. Maecenas id justo a ex hendrerit placerat.'
    },
    {
        image: 'https://picsum.photos/100?random=8',
        username: 'Olivia Martinez',
        email: 'olivia@example.com',
        testimonial_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer convallis vehicula magna, at pellentesque nunc vulputate sit amet.'
    },
    {
        image: 'https://picsum.photos/100?random=9',
        username: 'Ethan Taylor',
        email: 'ethan@example.com',
        testimonial_text: 'Ut vitae turpis nec lacus congue congue nec eget arcu. Nullam tincidunt, justo vel scelerisque vehicula, sem dui fermentum sapien, ac dapibus ipsum mauris nec lorem.'
    },
    {
        image: 'https://picsum.photos/100?random=10',
        username: 'Isabella Anderson',
        email: 'isabella@example.com',
        testimonial_text: 'Maecenas nec nibh fermentum, efficitur leo id, viverra magna. In vel turpis non tortor hendrerit venenatis vitae a purus.'
    }
];

const TestimonialAll = () => {
    return (
        <div className='creatic__testimonialAll'>
            <h1>Latest Testimonials</h1>
            <div className="wrapper creatic__testimonialAll-container">
                
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        image={testimonial.image}
                        username={testimonial.username}
                        email={testimonial.email}
                        testimonial_text={testimonial.testimonial_text}
                    />
                ))}
            </div>
        </div>
    );
}

export default TestimonialAll;
