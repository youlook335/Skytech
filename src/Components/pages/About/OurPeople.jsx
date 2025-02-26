import React, { useEffect, useRef } from 'react'
import './Ourpeople.css'
import pfp1 from '../../../../public/assets/About/profile1.jpg';
import pfp2 from '../../../../public/assets/About/profile2.jpg';
import pfp3 from '../../../../public/assets/About/profile3.jpg';

const OurPeople = () => {

    useEffect(() => {
        const persons = document.getElementsByClassName('person');
        if (persons.length > 0) {
            for (let i = 0; i < persons.length; i++) {
                persons[i].addEventListener('mouseenter', () => {
                    const btn = persons[i].firstChild;
                    if (btn) {
                        btn.style.display = "flex";
                    }
                });
                persons[i].addEventListener('mouseleave', () => {
                    const btn = persons[i].firstChild;
                    if (btn) {
                        btn.style.display = "none";
                    }
                });
            }
        }
    }, []);

    const peopleList = [
        {
            name: "First",
            position: "abc",
            image: pfp1
        },
        {
            name: "Second",
            position: "def",
            image:pfp2
        },
        {
            name: "Third",
            position: "ghi",
            image: pfp3
        },
        {
            name: "Fourth",
            position: "qwe",
            image: pfp1
        }
    ];

    return (
        <>
            <div className="people-list">
                <div className="people-container">
                    <h1>Our People</h1>
                    <div className="people-grid">
                        {
                            peopleList.map((person, index) => {
                                return (
                                    <div key={index} className={`person person${index}`}>
                                        <div className={`invisble-btn invisible-btn${index}`}>
                                            <a href="#"><i className='linkedIn fa-brands fa-linkedin'></i></a>
                                            <button className='read-more-invisible'>Read More</button>
                                        </div>
                                        <img src={person.image} alt="" />
                                        <h4 className='name'>{person.name}</h4>
                                        <h4 className='position'>{person.position}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPeople