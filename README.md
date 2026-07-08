# 🌌 Aurora Engine

**Motor frontend para experiencias narrativas interactivas — 100% JavaScript Vanilla, 100% estático.**

Aurora Engine es un motor frontend desarrollado íntegramente en **JavaScript Vanilla** (sin React, Vue, Angular ni frameworks externos), diseñado para ejecutarse como una aplicación completamente estática en **GitHub Pages**.

Su propósito es crear **experiencias narrativas interactivas** centradas en recuerdos, cartas, fotografías, música, cupones, cápsulas del tiempo y regalos digitales.

> 🎁 **Primer proyecto construido sobre Aurora Engine:** *"Nuestro Viaje"* — un regalo compuesto por aproximadamente 999 recuerdos que se desbloquean con el paso del tiempo.

---

## 📖 Tabla de contenidos

- [Filosofía](#-filosofía)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Componentes principales](#-componentes-principales)
- [Services](#-services)
- [Managers](#-managers)
- [Formato de un recuerdo (Notas)](#-formato-de-un-recuerdo-notas)
- [Tipos de recuerdos](#-tipos-de-recuerdos)
- [Experiencia de usuario](#-experiencia-de-usuario)
- [Objetivo del proyecto](#-objetivo-del-proyecto)

---

## 🧭 Filosofía

Aurora Engine **no pretende ser un framework web tradicional**. Su filosofía se basa en unos pocos principios simples pero estrictos:

- ✅ Código limpio
- ✅ Arquitectura modular
- ✅ Componentes independientes
- ✅ Fácil mantenimiento
- ✅ Sin dependencias externas
- ✅ Compatible con GitHub Pages
- ✅ Todo generado desde archivos JSON

Cada recuerdo es un **archivo independiente**. Aurora construye automáticamente toda la interfaz leyendo esos archivos, sin necesidad de tocar el código del motor.

---

## 📁 Estructura del proyecto

```
AuroraEngine/
│
├── assets/
├── components/
├── css/
├── data/
│
├── js/
│   ├── components/
│   ├── core/
│   ├── managers/
│   ├── models/
│   ├── services/
│   └── views/
│
├── Project/
│   ├── Notes/
│   ├── Images/
│   ├── Music/
│   └── Videos/
│
├── index.html
├── manifest.json
└── README.md
```

---

## 🏗️ Arquitectura

El proyecto sigue una **arquitectura basada en vistas**, con un flujo de datos claro y unidireccional:

```
App
 ↓
Router
 ↓
View
 ↓
Componentes
 ↓
Servicios
 ↓
Managers
```

**Principio clave:** cada *View* únicamente genera HTML y registra sus eventos. Toda la lógica importante vive en los **Managers** y **Services**, manteniendo las vistas ligeras y fáciles de mantener.

---

## 🧩 Componentes principales

| Componente | Descripción |
|---|---|
| **Router** | Gestiona el cambio entre pantallas. |
| **HomeView** | Pantalla principal de la aplicación. |
| **NoteView** | Visualización de cartas y recuerdos. |
| **Workspace** | Herramienta interna para desarrollo (opcional). |
| **DeveloperPanel** | Panel interno de depuración. |

---

## 🔌 Services

Los *Services* tienen una única responsabilidad: **cargar información**. No contienen lógica de negocio ni manipulan el estado global.

| Service | Función |
|---|---|
| **NoteService** | Carga un JSON individual desde `Project/Notes`. |
| **NoteIndexService** | Devuelve el listado completo de notas disponibles. |

---

## ⚙️ Managers

Los *Managers* contienen la **lógica global** del sistema.

| Manager | Función |
|---|---|
| **ThemeManager** | Gestiona los temas claro, oscuro y amanecer. |
| **TimeManager** | Calcula el día desbloqueado, el próximo desbloqueo, el contador y las fechas asociadas. |
| **Storage** | Persistencia de datos mediante `LocalStorage`. |
| **EventBus** | Comunicación desacoplada entre módulos. |
| **ComponentManager** | Registro y ciclo de vida de los componentes. |

---

## 📝 Formato de un recuerdo (Notas)

Cada recuerdo se define como un **archivo JSON independiente**. Aurora genera automáticamente la interfaz correspondiente al leer ese archivo.

```json
{
  "id": "001",
  "day": 1,
  "type": "letter",
  "title": "Nuestro primer recuerdo",
  "subtitle": "El comienzo",
  "author": "Con todo mi cariño",
  "image": "001.jpg",
  "music": "001.mp3",
  "text": [
    "Primer párrafo...",
    "Segundo párrafo..."
  ]
}
```

---

## 🎨 Tipos de recuerdos

Aurora Engine soportará múltiples tipos de recuerdo, cada uno con su propio componente visual:

| Tipo | Descripción |
|---|---|
| `letter` | Carta tradicional. |
| `coupon` | Cupón canjeable. |
| `photo` | Fotografía especial. |
| `capsule` | Cápsula del tiempo. |
| `gift` | Regalo. |
| `video` | Vídeo. |
| `timeline` | Eventos importantes. |

---

## ✨ Experiencia de usuario

El usuario **nunca ve un editor**: solo ve la aplicación final.

Al abrir un recuerdo, la experiencia incluye:

1. Transición suave.
2. Imagen de portada.
3. Música asociada.
4. Texto con efecto máquina de escribir.
5. Firma del recuerdo.
6. Botón para volver.

> La prioridad absoluta de Aurora Engine es **transmitir emociones**.

---

## 🎯 Objetivo del proyecto

Aurora Engine no busca ser un framework genérico, sino un **motor especializado** en crear experiencias emocionales y narrativas interactivas, totalmente estáticas, capaces de funcionar durante años usando únicamente HTML, CSS y JavaScript.

Todo el contenido debe poder ampliarse simplemente **añadiendo nuevos archivos JSON, imágenes, música y vídeos**, sin necesidad de modificar el código fuente del motor.

---

<p align="center">Hecho con 💫 usando JavaScript Vanilla</p>