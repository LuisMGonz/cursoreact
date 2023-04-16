import "./Formulario.css"
import CampoTexto from "../CampoTextoForm"
import ListaOpciones from "../listaOpciones"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo = "Nombre" placeholder = "Ingrese nombre"/>
            <CampoTexto titulo = "Puesto" placeholder = "Ingresar puesto"/>
            <CampoTexto titulo = "Foto" placeholder = "Ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario