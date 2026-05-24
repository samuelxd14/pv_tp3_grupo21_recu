import { useState } from "react"
import proyectoService from "../services/proyectoService"
import "../css/listaProyectos.css";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("En curso");
    const [buscar, setBuscar] = useState("");
    
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }

    const handleBuscar = (e) => {
        const valor = e.target.value;
        setBuscar(valor);
        setProyectos(proyectoService.buscarProyecto(valor));
    }

    const handleAgregar = (e) => {
        e.preventDefault();
        const nuevoProyecto = {
            id: Date.now(),
            titulo: titulo,
            categoria: categoria,
            estado: estado
        };
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
        setTitulo("");
        setCategoria("");
        setEstado("En curso");
    }

   return (
    <div className="container">
        <h2>
         Gestión de Proyectos Educativos
        </h2>
        
        <section className="form-section">
            <h3>Agregar Nuevo Proyecto</h3>
            <form className="project-form" onSubmit={handleAgregar}>
                <input
                    type="text"
                    placeholder="Título del proyecto"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="input-field"
                    required
                />
                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="input-field"
                >
                    <option value="En curso">En curso</option>
                    <option value="Finalizado">Finalizado</option>
                </select>
                <button type="submit" className="btn-agregar">Agregar Proyecto</button>
            </form>
        </section>

        <section className="search-section">
            <h3>Buscar Proyectos</h3>
            <input
                type="text"
                placeholder="Buscar por título..."
                value={buscar}
                onChange={handleBuscar}
                className="input-field"
            />
        </section>

        <section className="grid-proyectos">
            {proyectos.map(p => (
                <article key={p.id} className="card">
                    <div className="card-content">
                        <h3>{p.titulo}</h3>
                        <span
                            className={`badge ${p.estado === "Finalizado" ? "done" : "process"}`}>{p.estado}
                        </span>
                        <p>
                            <strong>Categoría:</strong> {p.categoria}
                        </p>
                    </div>
                    <button 
                        className="btn-delete" onClick={() => handleEliminar(p.id)}>Eliminar proyecto
                    </button>
                </article>
            ))}
        </section>
    </div>
    );
}

export default ListaProyectos;