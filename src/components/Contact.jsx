import { useState } from "react"

function Contact() {
const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [mensagem, setMensagem] = useState("")

function handleSubmit(e) {
    e.preventDefault()

    if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos do formulário.")
    return
    }

    alert("Mensagem enviada com sucesso!")
    setNome("")
    setEmail("")
    setMensagem("")
}

return (
    <section id="contato">
    
    <h2>Contato</h2>

    <form onSubmit={handleSubmit}>
        <div className="campo">
        <label>Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="campo">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="campo">
        <label>Mensagem</label>
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </div>

        <button type="submit">Enviar</button>
    </form>
    </section>
)
}

export default Contact