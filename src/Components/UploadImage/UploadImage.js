import React from "react";
import Style from './UploadImage.module.scss';

export default function Upload() {  

    return (
        <>
            <div className="col-6">
                <div className={ Style.Upload }>
                    <div className={ `${Style.Upload_box} text-center h-100 position-relative` }>
                        <div><i className="fas fa-upload"></i></div>
                        <span className="d-block">Uploud pictures</span>
                        <p>Video must be less than <span>30 MB</span> and photos must be less than <span>2 MB</span> in size.</p>
                        <div className={ `text-center position-absolute ${ Style.Uploud_File }` }>
                            <span>Uploud</span>
                            <input className="w-100 h-100 position-absolute" type="file" title="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}