import React, { useEffect, useRef } from "react";
import "./projectCommerce.scss";
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';
import desktop from './img/Desktop.png';
import form from './img/form.png';
import contact from './img/contact.png';
export default function ProjectCommerce() {
  const container = useRef();
  const element = useRef();


useEffect(() => {
  const page = container.current.parentElement;
  gsap.registerPlugin(ScrollTrigger);

 
})

  const out = function () {
    console.log("ll");
  };
  return (
    <div className="projectCommerce" ref={container}>
      <Exit exits={out} />
      <div className="projectCommerce__header">
        <div className="projectCommerce__header--title">
          <h1 className="main">ecommerce</h1>
          <h3 className="secondary">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="projectCommerce__header--content">
          <div className="sectionFirst">
            <dl>
              <dt>date</dt>
              <dd>2021</dd>
            </dl>
            <dl>
              <dt>credits</dt>
              <dd>
                <p>
                  <span>brands : </span> Lorem ipsum dolor sit.
                </p>
                <p>
                  <span>art direction : </span> Lorem ipsum dolor sit.
                </p>
                <p>
                  <span>Photographie {"&"} edition : </span>Lorem ipsum dolor
                  sit.
                </p>
              </dd>
            </dl>
          </div>
          <div className="sectionSecond">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              placeat cumque modi? Modi aut magni expedita voluptatibus
              recusandae reiciendis cupiditate?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              dolores voluptate? Ex est, quae praesentium nihil itaque nesciunt
              dicta ratione?
            </div>
          </div>
        </div>
      </div>
      <div className="projectCommerce__content" ref={element}>
        <header className="projectCommerce__content--header">
          <div>
            <h3>client</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <h3>my role</h3>
            <p>Illum quaerat itaque repudiandae.</p>
          </div>
          <div>
            <h3>type {'&'} year</h3>
            <p>Cum dolores quod ipsa.</p>
          </div>
          <div>
            <h3>collabs</h3>
            <p>Vitae illum rem accusamus.</p>
          </div>
        </header>
        <div className="projectCommerce__content--introduction">
          <h1>introduction</h1>
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, architecto.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolor.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt possimus beatae dolor atque impedit fugit dignissimos assumenda aliquam at ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque nostrum est, error distinctio nihil similique earum iusto sapiente facere.
          </p>
        </div>
      </div>
      <div className="projectCommerce__image">
        <div className="projectCommerce__image--one">
          <img src={desktop} alt="la premier image de mes project" />
        </div>
        <div className="projectCommerce__image--two">
          <img src={form} alt="le second image de mes projet" />
        </div>
        <div className="projectCommerce__image--three">
          <img src={contact} alt="le troisieme image de mes projet" /></div>
      </div>
      <div className="projectCommerce__next">
        <div>
        <h3>next Projet</h3>
        <h1>project name</h1>
      </div>
        </div>
    </div>
  );
}

const Exit = function ({ exits }) {
  return (
      <button className="button-close"  onClick={exits}></button>
  );
};
