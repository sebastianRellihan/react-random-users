import React from 'react';

function Filters(props) {
  // console.log(props);
  return (
    <section className={"filters " + ( props.filterShow === false ? 'hide' : '')} >
        {/* Filter by */}
        <div className="filter">
        <p>Filtrar por:</p>
        <select name="filter-field" onChange={(e) => {props.filterBy(e)}}>
            <option value="first-name">Nombre</option>
            <option value="last-name">Apellido</option>
            <option value="age">Edad</option>
        </select>
        <input type="text" id="filter-input" onChange={(e) => {props.filterKeyword(e)}}/>
        </div>
        {/* Order by */}
        <div className="order">
        <p>Ordenar por:</p>
        <select name="order-field" onChange={(e) => {props.orderBy(e)}}>
            <optgroup label="Nombre">
            <option value="first-name-asc">Nombre ascendente</option>
            <option value="first-name-desc">Nombre descendente</option>
            </optgroup>
            <optgroup label="Apellido">
            <option value="last-name-asc">Apellido ascendente</option>
            <option value="last-name-desc">Apellido descendente</option>
            </optgroup>
            <optgroup label="Edad">
            <option value="age-asc">Edad ascendente</option>
            <option value="age-desc">Edad descendente</option>
            </optgroup>
        </select>
        </div>
        <div className="card-adition">
        <p>Tarjetas:</p>
        <input type="number" name="add-card" id="add-card"/>
        <button onClick={() => props.addCard(document.querySelector('#add-card').value)}>Agregar</button>
        <button onClick={() => props.resetCards()}>Resetear</button>
        </div>
        <div className="card-display">
        <p>Disposición:</p>
        <button><i className="fas fa-th-list" /></button>
        <button><i className="fas fa-th-large" /></button>
        </div>
    </section>    
  );
}

export default Filters;
