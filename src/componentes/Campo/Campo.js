import './Campo.css';

const Campo = ({label, type = 'text', valor, obrigatorio = false, placeholder, aoAlterar}) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={evento => aoAlterar(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Campo;