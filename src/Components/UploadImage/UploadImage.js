import React, { useState } from "react";
import Style from './UploadImage.module.scss';
import ImageUploading from 'react-images-uploading';
import SlideItem from './SlideItem';
import Slider from "react-slick";

export default function Upload() {
    const [images, setImages] = useState([]);
    const maxNumber = 10;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const renderUI = images !== [] ? images.map((item, index) => {
        return <SlideItem key={index} image={ item['data_url'] } />
    }) : false;
    
    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        padding: "60px",
      };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className={ Style.Upload }>
                        <div className={ `${Style.Upload_box} text-center h-100 position-relative` }>
                            <div><i className="fas fa-upload"></i></div>
                            <span className="d-block">Uploud pictures</span>
                            <p>Video must be less than <span>30 MB</span> and photos must be less than <span>2 MB</span> in size.</p>
                            <ImageUploading multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url">
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    <button className="position-absolute"
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >Uploud</button>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="timeline-carousel">
                        <Slider {...settings}>
                            { renderUI }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}