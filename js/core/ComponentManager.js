/**
 * =====================================================
 * Aurora Engine
 * Component Manager
 * -----------------------------------------------------
 * Gestiona el ciclo de vida de todos los componentes.
 * =====================================================
 */

class ComponentManager {

    constructor() {

        /**
         * Componentes registrados.
         */
        this.components = new Map();

    }

    /**
     * Registra un componente.
     */
    register(name, component) {

        this.components.set(name, component);

    }

    /**
     * Devuelve un componente.
     */
    get(name) {

        return this.components.get(name);

    }

    /**
     * Comprueba si existe.
     */
    has(name) {

        return this.components.has(name);

    }

    /**
     * Elimina un componente.
     */
    remove(name) {

        const component = this.components.get(name);

        if (!component) return;

        if (component.unmount) {

            component.unmount();

        }

        this.components.delete(name);

    }

    /**
     * Destruye todos los componentes.
     */
    clear() {

        this.components.forEach(component => {

            if (component.unmount) {

                component.unmount();

            }

        });

        this.components.clear();

    }

    /**
     * Número de componentes.
     */
    count() {

        return this.components.size;

    }

}

export default new ComponentManager();