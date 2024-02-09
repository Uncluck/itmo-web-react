import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';




function Reviews() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId_lte=2')
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
        >
            {reviews.map((item) => (
                <SwiperSlide>
                <div key={item.id}>
                    <div className="div-review-name">
                        <span className="bold-span">Name: </span>
                        {item.name}
                    </div>
                    <div className="div-review-email">
                        <span className="bold-span">Email: </span>
                        {item.email}
                    </div>
                    <div className="div-review-body">
                        <span className="bold-span">Body: </span>
                        {item.body}
                    </div>
                </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default Reviews