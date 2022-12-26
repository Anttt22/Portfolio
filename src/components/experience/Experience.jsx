import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill} from 'react-icons/bs'


function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>expirienced</small>
              </div>

            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>CSS</h4>
              <small className='text-light'>intermideate</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>JS</h4>
              <small className='text-light'>expirienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
           <div>   <h4>Boot Strap</h4>
              <small className='text-light'>expirienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>React</h4>
              <small className='text-light'>experienced</small></div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>BAckend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>Go</h4>
              <small className='text-light'>expirienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>NodeJs</h4>
              <small className='text-light'>intermideate</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experiense__details-icon' />
              <div><h4>C++</h4>
              <small className='text-light'>expirienced</small></div>
            </article>

          </div>
        </div>




      </div>
    </section>
  )
}

export default Experience