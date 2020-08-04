import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://radiopeaobrasil.com.br/wp-content/uploads/2019/03/albert-einstein-head-1024x768.jpg" alt="Einstein"/>
                <div>
                    <strong>Marcelo</strong>
                    <span>Sociologia</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat placeat officia, molestiae dolorem in nostrum ipsa reprehenderit consectetur laborum quidem eligendi ipsum dolor error odio accusamus nobis minus totam. 
                Nostrum.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato 
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;