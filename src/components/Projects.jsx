import { projects } from "../data/projects"

function Projects() {
return (
    <section id="projetos">
    <h2>Meus Projetos</h2>

    <p>Esses são alguns dos meus projetos:</p>

    <div className="projetos-container">
        {projects.map((projeto) => (
        <article key={projeto.id} className="card-projeto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">
            Ver Projeto no GitHub
            </a>
        </article>
        ))}
    </div>
    </section>
)
}

export default Projects