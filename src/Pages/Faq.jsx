
import React, { useState } from 'react';
const Faq = () => {
    const faqs = [
        {
            question: 'Who are your typical clients?',
            answer: 'We have clients from all walks of life. The common thread is that they all desire a space that will complement their lifestyle and taste. Regardless of what station you are in your life, we would be happy to work with you for your design needs.    The clients that we work best with are clients who see value in the creative process and value the experience, expertise and processes of a professional design team. They are typically clients who will trust us to do what we do best. They are decisive and ready to take action. They are willing to invest in what they truly want their space to look and feel like. They understand the value of high-quality design work.'
        },
        {
            question: 'What is Designcore studio’s Design style?',
            answer: 'We don’t subscribe to just one particular design style such as modern, transitional or traditional. As creative professionals, we enjoy working on a variety of project styles. This keeps business fresh and interesting. As such, we are always seeking out new artisans and vendors to help create new, custom pieces for you that complement your personalized style that we co-create with you.'
        },
        {
            question: 'What locations do you work in?',
            answer: 'We have multiple completed and ongoing projects across India such as in Mumbai, Jaipur, Udaipur, Raipur, Hyderabad, Agra, Gandhidham, Ahmedabad, etc to name a few. We have also undertaken projects in Congo and Australia. We provide virtual design consultations, email communications and occasional site visits where applicable in these case.'
        },
        {
            question: 'How does Designcore charge for their professional design time?',
            answer: 'Hiring DesignCore is an investment in saving you time and acquiring the peace of mind that your job is being executed professionally, in a cost-effective manner and to your liking.\n We charge a flat fee for the design, execution and completion of your Project. DesignCore Studio will work with you to develop a mutually agreeable estimated budget based on the size of your project.'
        },
        {
            question: 'Can you refer us to a good Contractor? Architect? Painter? Etc.?',
            answer: 'Absolutely! We have long standing relationships with the professionals who we trust. We’ve got high standards when it comes to keeping our clients happy, so we only work with the best. We don’t take referral kickbacks either; we just think they’re the best in the industry!'
        },
        {
            question: 'Will you work with my existing Architect? Contractor? Consultant?',
            answer: 'Absolutely! We value the power of collaboration and are constantly expanding our professional network. With our comprehensive range of services covering architecture, interior design, landscape, and execution, we have the ability to seamlessly integrate with your existing team and address any project requirements. By working together, we can ensure a holistic and streamlined approach, filling in any gaps and delivering exceptional results.'
        },
        {
            question: 'Why should I hire DesignCore?',
            answer: 'Unparalleled Expertise: Our team brings exceptional value to every design project. With accredited degrees in Architecture or Interior Design, our experienced designers possess the qualifications and deep understanding of industry standards, including health, safety, and accessibility codes. Their expertise ensures that your project is executed with precision and adherence to regulations'
        },
    ];

    const [visibleAnswers, setVisibleAnswers] = useState({});

    const toggleAnswer = (index) => {
        setVisibleAnswers((prevVisibleAnswers) => ({
            ...prevVisibleAnswers,
            [index]: !prevVisibleAnswers[index]
        }));
    };

    return (
        <>
            <div className="faqpage py-40 pt-48">
                <h1 className="text-[72px] text-center font-semibold mb-4">The Help Centre</h1>
            </div>
            <div className="container md:mx-auto space-y-4 mt-10">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded p-4">
                        <div
                            className="cursor-pointer flex justify-between items-center"
                            onClick={() => toggleAnswer(index)}>
                            <h2 className="text-lg font-semibold ">{faq.question}</h2>
                            <svg
                                className={`h-6 w-6 ${visibleAnswers[index] ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {visibleAnswers[index] && <p className="mt-2 tracking-wider">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </>

    );
};

export default Faq;
