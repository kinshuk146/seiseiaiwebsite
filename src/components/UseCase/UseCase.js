import React from 'react'
import './UseCase.css'

function UseCase(props) {
    const data = props.content
    return (
        <div className='usecase'>
            <div className='usecase-section'>
                <section>
                    <h1>{data.one.heading}</h1>
                    <p>{data.one.paragraph1}</p>
                    <br />
                    <p>{data.one.paragraph2}</p>
                    <br />
                    {/* <div>
                        <h1>{data.one.divleft}</h1>
                        <p>{data.one.divright}</p>
                    </div> */}
                </section>
                <div className='usecase-image-container'>
                    <img src='/assets/sales2.png'></img>
                </div>
            </div>

            <div className='usecase-section'>
                <div className='usecase-image-container'>
                    <img src='/assets/sales2.png'></img>
                </div>
                <section>
                    <h1>{data.two.heading}</h1>
                    <p>{data.two.paragraph1}</p>
                    <br />
                    <p>{data.two.paragraph2}</p>
                    <br />
                    {/* <div>
                        <h1>{data.two.divleft}</h1>
                        <p>{data.two.divright}</p>
                    </div> */}
                </section>
            </div>

            <div className='usecase-section'>
                <section>
                    <h1>{data.three.heading}</h1>
                    <p>{data.three.paragraph1}</p>
                    <br />
                    <p>{data.three.paragraph2}</p>
                    <br />
                    {/* <div>
                        <h1>{data.three.divleft}</h1>
                        <p>{data.three.divright}</p>
                    </div> */}
                </section>
                <div className='usecase-image-container'>
                    <img src='/assets/sales2.png'></img>
                </div>
            </div>
        </div>
    )
}

export default UseCase
