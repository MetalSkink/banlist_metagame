import './App.css'
import { archetypes } from './assets/decks'
import { banned, limited } from './assets/limits'
import cornerImage from './assets/logo_meta.png';

function App() {


  return (
    <>
      <div className="container mb-3">
        <img src={cornerImage} alt="Corner" className="corner-image" />
        <h1>Banlist Metagame Collector</h1>
        <h3>Arqueotipos baneados</h3>
        <p>
          Toda carta que forme parte de este arqueotipo esta prohibida
        </p>
        <div className='row'>
        {archetypes.map((archetype,index) => ( 
          <div className='col-md-3' key={index}>
            <img src={archetype.img} alt={archetype.name}  className='img-archetype'/>
            <p>
              {archetype.name}
            </p>
          </div>
          ))
        }
        <h3>Cartas prohibidas</h3>
        <table className="table cardlist centertable">
          <tbody>
            <tr align="center" className="cardlist_atitle">
              <td width="137" height="40"><strong>Card Type</strong></td>
              <td width="350"><strong>Card Name</strong></td>
              <td width="139" align="center"><strong>Fun Format</strong></td>
              <td width="240"><strong>Remarks</strong></td>
            </tr>
            {banned.map((card, index) => (
                <tr className={card.class} key={index}>
                  <td>{card.tipo}</td>
                  <td>{card.nombre}</td>
                  <td>Forbidden</td>
                  <td>&nbsp;</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h3>Cartas limitadas</h3>
        <table className="table cardlist centertable">
          <tbody>
            <tr align="center" className="cardlist_atitle">
              <td width="137" height="40"><strong>Card Type</strong></td>
              <td width="350"><strong>Card Name</strong></td>
              <td width="139" align="center"><strong>Fun Format</strong></td>
              <td width="240"><strong>Remarks</strong></td>
            </tr>
            {limited.map((card, index) => (
                <tr className={card.class} key={index}>
                  <td>{card.tipo}</td>
                  <td>{card.nombre}</td>
                  <td>Limited</td>
                  <td>&nbsp;</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default App
