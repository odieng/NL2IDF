This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





graph LR
    subgraph "Acteurs / Utilisateurs"
        A1[Éleveur / Détenteur]
        A2[Agent Communautaire]
        A3[Vétérinaire / Agent DSV]
        A4["Administrateur Système (SNITB/ADIE)"]
        A5["Forces de Sécurité (Police/Gend.)"]
        A6["Acteurs Privés (Marchés, Abattoirs)"]
        A7["Décideurs (Ministère, DSV, Régions)"]
        A8["Partenaires Techniques / Financiers"]
    end

    subgraph "Infrastructure Terrain & Données Source"
        D1["Animaux (NIU) <br> - Bovins, Ovins, Caprins, Équins..."]
        D2[Propriétaires / Détenteurs]
        D3["Sites (NIS) <br> - Exploitations, Marchés, Abattoirs..."]
        T1["Dispositifs Terrain <br> - Boucles/Puces/Bolus RFID <br> - Lecteurs RFID"]
        T2["Dispositifs Suivi Actif (Optionnel) <br> - Colliers GPS/LoRaWAN/GSM"]
    end

    subgraph "Plateforme SNITB (Web & Mobile)"
        P[SNITB Platform Core]
        M1["Module Identification <br> (NIU, NIS, Propriétaires)"]
        M2["Module Mouvements & Traçabilité <br> (Naiss., Vente, Déplac., Abatt., Mort.)"]
        M3["Module Suivi Sanitaire <br> (Vaccins, Traitements, Tests)"]
        M4[Module Gestion des Vols]
        M5["Module Alertes <br> (Vol, Sanitaire, Géo-barrière)"]
        M6[Module Recherche & Consultation]
        M7[Module Rapports & Tableau de Bord]
        M8["Module Administration & Gouvernance <br> (Utilisateurs, Rôles, Paramètres)"]

        P --> M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8
    end

    subgraph "Base de Données & Infrastructure IT"
        DB["Base de Données SNITB <br> (Centralisée / Distribuée - Blockchain?)"]
        INFRA["Infrastructure Serveurs <br> (Hébergement ADIE / Cloud)"]
    end

    subgraph "Contexte Externe & Support"
        E1[Cadre Légal & Réglementaire]
        E2[Gouvernance (Ministère/DSV)]
        E3["Interopérabilité <br> (Systèmes Régionaux CEDEAO/UEMOA)"]
        E4[Formation & Sensibilisation]
    end

    %% Liaisons Données Source vers Plateforme
    D1 -- Enregistrement/MàJ --> M1
    D2 -- Enregistrement/MàJ --> M1
    D3 -- Enregistrement/MàJ --> M1
    T1 -- Lecture ID --> P
    T2 -- Données GPS/Statut --> P

    %% Liaisons Acteurs vers Plateforme (Exemples)
    A1 -- "Déclare Naissance/Vente/Mort..." --> M2
    A1 -- Consulte ses données --> M6
    A2 -- Saisit données terrain --> M1 & M2 & M3
    A3 -- Enregistre Interventions Sanitaires --> M3
    A3 -- "Valide/Consulte Données" --> M6
    A4 -- "Gère Utilisateurs/Paramètres" --> M8
    A5 -- "Déclare Vol / Consulte Alertes" --> M4 & M5
    A6 -- "Enregistre Entrées/Sorties" --> M2
    A7 -- "Consulte Rapports/Tableaux de Bord" --> M7

    %% Liaisons Plateforme vers Acteurs/Extérieur (Exemples)
    M5 -- Notifie Alertes --> A1 & A3 & A5 & A6
    M7 -- Fournit Rapports --> A7
    M4 -- Partage Infos Vols --> A5
    P -- Échange Données --> E3

    %% Liaisons Plateforme et Infrastructure IT
    P <--> DB
    P -- Hébergé sur --> INFRA

    %% Liaisons Contexte Externe
    E1 -- Encadre --> P
    E2 -- Supervise --> P
    A8 -- Supporte --> P & E4
    E4 -- Cible --> A1 & A2 & A3

    %% Style
    style A1 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A2 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A3 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A4 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A5 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A6 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A7 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style A8 fill:#c9ffc9,stroke:#333,stroke-width:1px
    style P fill:#lightblue,stroke:#333,stroke-width:2px
    style DB fill:#lightgrey,stroke:#333,stroke-width:1px
    style INFRA fill:#lightgrey,stroke:#333,stroke-width:1px
    style T1 fill:#f9f,stroke:#333,stroke-width:1px
    style T2 fill:#f9f,stroke:#333,stroke-width:1px
    style D1 fill:#ffffcc,stroke:#333,stroke-width:1px
    style D2 fill:#ffffcc,stroke:#333,stroke-width:1px
    style D3 fill:#ffffcc,stroke:#333,stroke-width:1px
