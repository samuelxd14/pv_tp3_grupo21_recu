const proyectoService = ( () => {
    let proyectos = [
        {id: 1, titulo: "Turnos online", categoria: "Web", estado: "En curso"},
        {id: 2, titulo: "App control de asistencia", categoria: "Mobile", estado: "En curso"},
        {id: 3, titulo: "Gestion de biblioteca", categoria: "Escritorio", estado: "Finalizado"},
        {id: 4, titulo: "Sistema de cuentas", categoria: "Web", estado: "En curso"},
        {id: 5, titulo: "App de fotoshop", categoria: "Mobile", estado: "Finalizado"},
        {id: 6, titulo: "Sistema de ventas", categoria: "Escritorio", estado: "En curso"},
    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (p) => {
        proyectos.push(p);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
    };

    return {obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto};
})();

export default proyectoService;