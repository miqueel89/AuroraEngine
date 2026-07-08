/**
 * =====================================================
 * Aurora Engine
 * EventBus
 * -----------------------------------------------------
 * Sistema de eventos interno.
 * =====================================================
 */

class EventBus {

    constructor() {

        this.events = {};

    }

    /**
     * Escucha un evento.
     */
    on(event, callback) {

        if (!this.events[event]) {

            this.events[event] = [];

        }

        this.events[event].push(callback);

    }

    /**
     * Escucha una sola vez.
     */
    once(event, callback) {

        const wrapper = (data) => {

            callback(data);

            this.off(event, wrapper);

        };

        this.on(event, wrapper);

    }

    /**
     * Emite un evento.
     */
    emit(event, data = null) {

        if (!this.events[event]) {

            return;

        }

        this.events[event].forEach(callback => {

            callback(data);

        });

    }

    /**
     * Elimina un listener.
     */
    off(event, callback) {

        if (!this.events[event]) {

            return;

        }

        this.events[event] = this.events[event].filter(listener => {

            return listener !== callback;

        });

    }

    /**
     * Elimina todos los eventos.
     */
    clear() {

        this.events = {};

    }

}

export default new EventBus();