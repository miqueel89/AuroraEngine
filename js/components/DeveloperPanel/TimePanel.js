import Config from "../../config.js";

export default class TimePanel {

    render() {

        return `

<div class="time-panel">

    <h1>📅 Tiempo Aurora</h1>

    <div class="time-card">

        <span>Fecha Aurora</span>

        <strong id="auroraDate"></strong>

    </div>

    <div class="time-card">

        <span>Hora Madrid</span>

        <strong id="auroraClock"></strong>

    </div>

    <div class="time-card">

        <span>Día desbloqueado</span>

        <strong id="auroraDay"></strong>

    </div>

    <div class="time-card">

        <span>Próximo recuerdo</span>

        <strong id="nextUnlock"></strong>

    </div>

    <div class="time-buttons">

        <button id="todayButton">Hoy</button>

        <button id="plusDay">+1 Día</button>

        <button id="minusDay">-1 Día</button>

        <button id="resetTime">Reiniciar</button>

    </div>

</div>

`;

    }

}