import Config from "../../config.js";

export default class StatusBar{

    render(){

        return`

        <footer class="workspace-status">

            <span>

                Aurora ${Config.version}

            </span>

            <span>

                DEBUG

            </span>

            <span>

                Storage OK

            </span>

            <span>

                Router OK

            </span>

        </footer>

        `;

    }

}