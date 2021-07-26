import React from "react";
import { Link } from "gatsby";

export default function IntroBoxes() {
  return (
    <section className="intro-boxes">
      <Link to="/jamstack">
        <div className="box">
          <div className="box-header">
            <h2>JAMstack</h2>
            <div className="box-header_arrow">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
          <p>
            Innowacyjne strony internetowe JAMstack, to przede wszystkim
            szybkość, dzięki której wyprzedzisz konkurencję!
          </p>
        </div>
      </Link>
      <Link to="wordpress">
        <div className="box">
          <div className="box-header">
            <h2>WordPress</h2>
            <div className="box-header_arrow">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
          <p>
            WordPress to wciąż bardzo popularny i intuicyjny system zarządzania
            treścią. Tworzymy strony dostosowane do Ciebie.
          </p>
        </div>
      </Link>
      <Link to="technologia">
        <div className="box">
          <div className="box-header">
            <h2>Technologia</h2>
            <div className="box-header_arrow">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
          <p>
            Przez ostatnie kilka lat pracowaliśmy z różnymi technologiami,
            potrafimy idealnie dobrać odpowiednie rozwiązania dla Twoich
            potrzeb.
          </p>
        </div>
      </Link>
      <Link to="wydajnosc">
        <div className="box">
          <div className="box-header">
            <h2>Wydajność</h2>
            <div className="box-header_arrow">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
          <p>
            Nasze strony internetowe to przede wszystkim wysokiej jakości kod
            źródłowy, stawiamy na szybkość oraz wydajność.
          </p>
        </div>
      </Link>
    </section>
  );
}
