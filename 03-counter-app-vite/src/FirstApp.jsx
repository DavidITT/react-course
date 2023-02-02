import PropTypes from 'prop-types';

const getResult = (a, b) => a + b;

export const FirstApp = ( {title, subtitle, name} ) => {
    return (
        <>
            <h1>Reultado: { getResult(3,5) + subtitle }</h1>
            <h1>{ title }</h1>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            <p>Hola soy un dev</p>
            <p>Name: {name}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.number.isRequired
}

//Entran antes de los proptypes
FirstApp.defaultProps = {
    title: 'Sin titutlo',
    subtitle: 1,
    name:'Davicho'
}
