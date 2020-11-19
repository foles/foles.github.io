import React from 'react'
import './card.css'

function card() {
    return (
        <div className="cardContainer">
            <div className="card discord">
                <div className="card--hover">
                    <div className="card__tools">
                        <img src={require('../images/react.png')} alt="" />
                        <img src={require('../images/redux.png')} alt="" />
                        <img src={require('../images/js.png')} alt="" />
                        <img src={require('../images/css.png')} alt="" />
                        <img src={require('../images/firebase.png')} alt="" />

                    </div>
                    <h2>Discord Clone</h2>
                    <div className="links">
                        <a className="links__target" target="_blank" href="https://github.com/foles/discord-clone">
                            <p>Repo </p>
                            <img src={require('../images/github.png')} alt="" />
                        </a>


                        <a className="links__target" target="_blank" href="https://discord-clone-5cba7.web.app/">
                            <p>Link </p>
                            <img src={require('../images/link.png')} alt="" />
                        </a>


                    </div>
                </div>

            </div>

            <div className="card google">
                <div className="card--hover">
                    <div className="card__tools">
                        <img src={require('../images/css.png')} alt="" />
                        <img src={require('../images/html.png')} alt="" />

                    </div>
                    <h2>Google Clone</h2>
                    <div className="links">
                        <a className="links__target" target="_blank" href="https://github.com/foles/google-clone">
                            <p>Repo </p>
                            <img src={require('../images/github.png')} alt="" />
                        </a>


                        <a className="links__target" target="_blank" href="https://foles.github.io/google-clone/">
                            <p>Link </p>
                            <img src={require('../images/link.png')} alt="" />
                        </a>


                    </div>
                </div>

            </div>


            <div className="card batata">
                <div className="card--hover">
                    <div className="card__tools">

                        <img src={require('../images/css.png')} alt="" />
                        <img src={require('../images/html.png')} alt="" />

                    </div>
                    <h2>Batatabit</h2>
                    <div className="links">
                        <a className="links__target" target="_blank" href="https://github.com/foles/batatabit">
                            <p>Repo </p>
                            <img src={require('../images/github.png')} alt="" />
                        </a>


                        <a className="links__target" target="_blank" href="https://foles.github.io/batatabit/">
                            <p>Link </p>
                            <img src={require('../images/link.png')} alt="" />
                        </a>


                    </div>
                </div>

            </div>

            <div className="card futbol">
                <div className="card--hover">
                    <div className="card__tools">
                        <img src={require('../images/css.png')} alt="" />
                        <img src={require('../images/html.png')} alt="" />
                        <img src={require('../images/react.png')} alt="" />
                        <img src={require('../images/redux.png')} alt="" />

                    </div>
                    <h2>Futbol Alineación</h2>
                    <div className="links">
                        <a className="links__target" target="_blank" href="https://github.com/foles/FutbolAlineaci-n_react-reduxt">
                            <p>Repo </p>
                            <img src={require('../images/github.png')} alt="" />
                        </a>


                        <a className="links__target" target="_blank" href="https://foles.github.io/FutbolAlineaci-n_react-redux/">
                            <p>Link </p>
                            <img src={require('../images/link.png')} alt="" />
                        </a>


                    </div>
                </div>

            </div>


            <div className="card hospital">
                <div className="card--hover">
                    <div className="card__tools">
                        <img src={require('../images/angular.png')} alt="" />
                        <img src={require('../images/mongo.png')} alt="" />
                        <img src={require('../images/node.png')} alt="" />
                        <img src={require('../images/css.png')} alt="" />
                        <img src={require('../images/html.png')} alt="" />
                        <img src={require('../images/flutter.png')} alt="" />



                    </div>
                    <h2>Gestión de Activos Fijos - Hospital</h2>
                    <div className="links">
                        <a className="links__target" target="_blank" href="https://github.com/foles/FutbolAlineaci-n_react-reduxt">
                            <p>Repo </p>
                            <img src={require('../images/github.png')} alt="" />
                        </a>


                        <a className="links__target" target="_blank" href="https://foles.github.io/FutbolAlineaci-n_react-redux/">
                            <p>Link </p>
                            <img src={require('../images/link.png')} alt="" />
                        </a>


                    </div>
                </div>

            </div>
        </div >

    )
}

export default card
