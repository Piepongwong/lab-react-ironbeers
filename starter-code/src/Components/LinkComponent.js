import React from 'react';

function LinkComponent(props) {
    return (
        // <div className="col-xs-12 col-sm-4 col-lg-6">
            <div className="card">
                <img src={props.image} />
                <div className="card-content">
                    <h4 className="card-title">
                        {props.name}
                    </h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ex? Nihil consequuntur accusantium earum deleniti minus culpa et consectetur rem, perferendis, sint, fuga ratione ullam veniam. Molestias delectus accusamus molestiae?</p>
                </div>
            </div>
        // </div>
    );
}

export default LinkComponent;