import React from 'react';

const Description = () => {
    return (
        <section className='description' style={{height: '50rem', backgroundColor: '#81A1C1'}}>
            <h2 className='description__heading'>What we offer</h2>
            <div className='description__grid'>
                <div className='description__grid-item'>
                    Number 1
                </div>
                <div className='description__grid-item'>
                    Number 2
                </div>
                <div className='description__grid-item'>
                    Number 3
                </div>
                <div className='description__grid-item'>
                    Number 4
                </div>
                <div className='description__grid-item'>
                    Number 5
                </div>
                <div className='description__grid-item'>
                    Number 6
                </div>
            </div>
        </section>
    );
}

export default Description;