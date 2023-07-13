import {Navigation, Pagination, Scrollbar, A11y, Controller} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import prevArrow from "../../../../public/images/arrleft.svg";
import nextArrow from "../../../../public/images/arrownew.svg";
import Link from 'next/link'
import "swiper/css";
import arrownew from "../../../../public/images/arrownew.svg";
import arrleft from "../../../../public/images/arrleft.svg";
import img from "../../../../public/images/psychologytalk.svg";


const Slider = (props: {
    carouselContainer?: string;
    arrows: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
    title?: boolean;
    date?: boolean;
    name?: string;
    description?: string;
    isNew?: boolean;
    isImage?: boolean;
    imageClassName?: string;
    logo?: boolean;
    swiperSlider?: string;
    arrowsClassName?: string;
    data?: any[];
    isLabel?: boolean;
}) => {
    const [swiper, setSwiper] = useState<any>();
    const prevRef = useRef<any>([]);
    const nextRef = useRef<any>();

    useEffect(() => {

        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper, props.data, props.isNew]);


    return (

        <div className={`${props.carouselContainer ? props.carouselContainer : "carousel-container  flex justify-center items-center " }`}>
            {
                props.arrows ?
                    <div className={`cursor-pointer ml-[20px] lg:w-[120px] w-[200px] ${props.arrowsClassName}`} ref={prevRef}>
                        <Image src={arrleft} alt={"prevArrow"}/>
                    </div> : null
            }

            <Swiper
                className={' w-[2000px] '}
                modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                spaceBetween={props.spaceBetween ? props.spaceBetween : 10}
                breakpoints={{
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }}
                navigation={{
                    prevEl: nextRef?.current,
                    nextEl: nextRef?.current
                }}
                updateOnWindowResize
                observer
                observeParents
                onSlideChange={(e) => setSwiper(e)}
            >
                {props?.data?.map((each: any, index: number) => (
                    <SwiperSlide key={each.id || index}
                                 className={` ${!props.swiperSlider ? 'flex items-center justify-center h-[345px]' : props.swiperSlider}`}>
                        {
                            props?.isNew && !props?.isImage ?
                                <Link href={`/partners/${each.id}`} passHref>

                                </Link> :
                                !props?.isImage ?
                                    <Link href={`/partners/details/${each.id}`} passHref>

                                    </Link>

                                    : <Image src={img} alt={"gallery"} className={props.imageClassName}/>
                        }

                    </SwiperSlide>
                ))}
            </Swiper>
            {
                props.arrows ?
                    <div className={`cursor-pointer ml-[30px] lg:w-[120px] w-[200px] ${props.arrowsClassName}`} ref={nextRef}>
                        <Image src={arrownew} alt={"nextArrow"} className={'max-md:ml-[-20px] max-sm:ml-[15px]'}/>
                    </div>
                    : null
            }

        </div>
    );
};

export default Slider;