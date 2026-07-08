/**
 * =====================================================
 * Aurora Storage
 * -----------------------------------------------------
 * Gestiona el almacenamiento local de la aplicación.
 * =====================================================
 */

class Storage {

    /**
     * Guarda un valor.
     */
    save(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }

    /**
     * Obtiene un valor.
     */
    load(key) {

        const data = localStorage.getItem(key);

        if (!data) {

            return null;

        }

        return JSON.parse(data);

    }

    /**
     * Elimina un elemento.
     */
    remove(key) {

        localStorage.removeItem(key);

    }

    /**
     * Comprueba si existe.
     */
    exists(key) {

        return localStorage.getItem(key) !== null;

    }

    /**
     * Vacía completamente el almacenamiento.
     */
    clear() {

        localStorage.clear();

    }

    /**
     * Actualiza un objeto sin tener que volver a escribirlo.
     */
    update(key, callback) {

        const currentValue = this.load(key);

        const updatedValue = callback(currentValue);

        this.save(key, updatedValue);

    }

}

export default new Storage();