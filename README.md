# Tuvan Shamanism: The Semantic Shaman

## 📖 Overview

**Tuvan Shamanism** is an immersive web application dedicated to the digital preservation and interactive exploration of the ancient spiritual traditions of Tuva. Based on the anthropological works of **M.B. Kenin-Lopsan** (specifically "Tuvan Shamans"), this project bridges the gap between ethnographic research and modern web technologies.

The application allows users to explore the "Mystery of Kamlanie" (rituals), examine the symbolic anatomy of the shamanic costume, and interact with a virtual altar.

## ✨ Features

*   **Immersive Storytelling:** A narrative-driven experience guiding users through the theory and practice of Tuvan shamanism.
*   **The Mystery (Ritual):** A detailed breakdown of the *Kamlanie* process, including types of rituals (Mirror, Drum, Staff) and the step-by-step procedure based on Chapter III of Kenin-Lopsan's work.
*   **Interactive Attributes:** An "anatomical" exploration of the Shaman's costume (*Khamnaar Ton*), Headdress (*Bort*), and Drum (*Dungur*), visually explaining the function of every feather, fringe, and metal pendant (Chapter IV).
*   **Virtual Altar:** An interactive section allowing users to explore sacred objects.
*   **Responsive Design:** Fully optimized for desktop and mobile viewing, ensuring accessibility for all users.

## 🛠️ Tech Stack

*   **Framework:** [Angular 17+](https://angular.io/) (Standalone Components)
*   **Language:** TypeScript
*   **Styling:** SCSS (Sass) with responsive Flexbox and Grid layouts
*   **Routing:** Angular Router for seamless single-page application (SPA) navigation
*   **Assets:** Curated ethnographic photography and archival materials

## 📂 Project Structure

```bash
src/
├── app/
│   ├── components/
│   │   ├── home/           # Landing page with introduction
│   │   ├── shaman/         # Chapter III: The Mystery (Rituals & Procedure)
│   │   │   └── clothes/    # Chapter IV: Attributes (Costume, Headdress, Drum)
│   │   └── altar/          # Interactive Altar (Items)
│   ├── app.component.ts    # Main layout & scroll restoration logic
│   └── app.routes.ts       # Routing configuration
└── assets/                 # Global styles and fonts
public/
└── img/                    # Static image assets (cloaks, drums, shamans)
