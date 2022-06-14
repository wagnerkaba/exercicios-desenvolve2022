

export default function Card({ children }) {

    const estilo = {
        width: '200px',
        heigh: '200px',
        border: '1.5px solid lightgrey',
        borderRadius: '2px',
        padding: '4px',
        margin: '4px'
    };

    return (
        <div style={estilo}>
            {children}
        </div>
    );
}