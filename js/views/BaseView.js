/**
 * =====================================================
 * BaseView
 * -----------------------------------------------------
 * Todas las vistas de la aplicación heredarán de aquí.
 * =====================================================
 */

export default class BaseView {

    constructor() {

        this.container = null;

    }

    /**
     * Devuelve el HTML de la vista.
     */
    render() {

        return "";

    }

    /**
     * Se ejecuta cuando la vista aparece.
     */
    mount() {

    }

    /**
     * Se ejecuta antes de abandonar la vista.
     */
    unmount() {

    }

}