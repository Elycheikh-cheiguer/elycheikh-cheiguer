/* ============================================================
   Elycheikh Cheiguer — Portfolio
   script.js
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------- */

  const translations = {
    fr: {
      "meta.title": "Elycheikh Cheiguer — Élève-ingénieur Génie Minier",
      "meta.desc": "Portfolio d'Elycheikh Cheiguer, élève-ingénieur en génie minier (ENSMR / E.S. Polytechnique Nouakchott) — géotechnique, exploitation à ciel ouvert, minéralurgie.",

      "sidebar.role": "Génie Minier",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.education": "Parcours",
      "nav.experience": "Expérience",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.contact": "Contact",

      "hero.kicker": "Élève-ingénieur · Génie Minier",
      "hero.title1": "Bonjour, je suis",
      "hero.sub": "Élève-ingénieur en double diplôme (ENSMR Rabat / E.S. Polytechnique Nouakchott), spécialisé en génie minier et géotechnique. Expérience de terrain en exploitation à ciel ouvert, minéralurgie et études géotechniques — à la recherche d'un stage de fin d'études à partir de janvier 2027.",
      "hero.cta.cv": "Télécharger le CV",
      "hero.cta.contact": "Me contacter",
      "hero.stat1": "Stages terrain",
      "hero.stat2": "Camions / flotte pilotée",
      "hero.stat3": "Français DALF",
      "hero.badge.title": "Stage actuel",
      "hero.badge.sub": "SNIM — Siège Guelb El Rhein, Zouérate",

      "about.eyebrow": "À propos",
      "about.title": "Qui je suis",
      "about.lead": "Un profil technique formé à la fois en génie minier et en gestion des ressources, construit sur trois stages de terrain consécutifs dans l'industrie minière mauritanienne.",
      "about.p1": "Actuellement en dernière année du double diplôme d'ingénieur « Mines et Infrastructures » à l'École Nationale Supérieure des Mines de Rabat (ENSMR), après un premier diplôme d'ingénieur en Mines et Gestion des Ressources obtenu à l'École Supérieure Polytechnique de Nouakchott, spécialisé en géotechnique et en génie minier.",
      "about.p2": "Mon expérience de terrain couvre l'ensemble de la chaîne minière : exploitation à ciel ouvert (optimisation du cycle de chargement-roulage, systèmes de gestion de flotte, planification sous Surpac), minéralurgie et métallurgie extractive (optimisation de procédés de traitement), ainsi que les études géotechniques (Plaxis, Rocscience). Je complète ces compétences par la programmation (Python, JavaScript) et la vision par ordinateur appliquées à l'ingénierie minière.",
      "about.p3": "Je recherche actuellement un stage de fin d'études de 4 à 6 mois à partir de janvier 2027.",
      "about.fact1.title": "Localisation",
      "about.fact1.sub": "Rabat, Maroc",
      "about.fact2.title": "Disponibilité",
      "about.fact2.sub": "Stage de fin d'études — à partir de janvier 2027 (4 à 6 mois)",
      "about.fact3.title": "Langues",
      "about.fact3.sub": "Arabe (natif), Français (C1), Anglais (B2)",
      "about.fact4.title": "Bourse",
      "about.fact4.sub": "GMEF — Geotechnical Center of Excellence, University of Arizona",

      "edu.eyebrow": "Formation",
      "edu.title": "Parcours académique",
      "edu.lead": "Un double diplôme d'ingénieur construit entre la Mauritanie et le Maroc, complété par une formation spécialisée en géotechnique souterraine.",
      "edu.item1.title": "Double Diplôme d'Ingénieur — Mines et Infrastructures",
      "edu.item1.org": "École Nationale Supérieure des Mines de Rabat (ENSMR), Rabat, Maroc",
      "edu.item1.desc": "Filière AE3S — Département Mines. Dernière année du double diplôme.",
      "edu.item2.date": "Sept. 2026 — Fév. 2027 (en cours)",
      "edu.item2.title": "Geotechnical Fundamentals for Underground Mining",
      "edu.item2.org": "Geotechnical Center of Excellence, University of Arizona — en ligne",
      "edu.item2.desc": "Formation en ligne, boursier GMEF (Geotechnical Mining Education Fund).",
      "edu.item3.title": "Diplôme d'Ingénieur — Mines et Gestion des Ressources",
      "edu.item3.org": "E.S. Polytechnique Nouakchott, Mauritanie",
      "edu.item3.desc": "Spécialisation géotechnique et génie minier.",
      "edu.item4.title": "Classes Préparatoires — Concours National d'Ingénieurs (CNIM)",
      "edu.item4.org": "E.S. Polytechnique Nouakchott, Mauritanie",
      "edu.item4.desc": "Admis au CNIM 2023.",
      "edu.item5.date": "—",
      "edu.item5.title": "Baccalauréat, série Mathématiques",
      "edu.item5.org": "Lycée Militaire, Nouakchott, Mauritanie",

      "exp.eyebrow": "Expérience",
      "exp.title": "Stages &amp; expérience de terrain",
      "exp.lead": "Trois stages consécutifs couvrant l'exploitation à ciel ouvert, la minéralurgie et la géotechnique.",

      "exp.snim.badge": "Stage le plus récent",
      "exp.snim.title": "Stagiaire Ingénieur Production",
      "exp.snim.org": "SNIM — Siège Minier de Guelb El Rhein, Zouérate, Mauritanie",
      "exp.snim.stat1": "Objectif / mois",
      "exp.snim.stat2": "Camions CAT 789D",
      "exp.snim.stat3": "Pelles PH / RH",
      "exp.snim.stat4": "Cycles chronométrés",
      "exp.snim.stat5": "Efficacité opérationnelle",
      "exp.snim.tab1": "Contexte",
      "exp.snim.tab2": "Outil développé",
      "exp.snim.tab3": "Diagnostic",
      "exp.snim.tab4": "Actions &amp; résultats",

      "exp.snim.ctx.p1": "Stage assistant ingénieur (juillet–septembre 2026) sur le secteur PB2-Est de la mine à ciel ouvert de Guelb El Rhein, le gisement de magnétite le plus riche de la SNIM et désormais le principal moteur de production du siège. Objectif fixé par la direction : une cadence de 3 Mt/mois (minerai et stérile confondus), soutenue par une flotte de 45 camions rigides CAT 789D couplée à des pelles électriques à câble (PH) et hydrauliques (RH).",
      "exp.snim.ctx.p2": "Le suivi existant de la section Roulage/Chargement reposait uniquement sur les données du système de gestion de flotte (Dispatch FMS, Modular Mining) agrégées à l'échelle de toute la fosse. Cette approche masquait trois limites structurelles : des indicateurs calculés globalement sans distinction par secteur, une couverture réseau et des écrans embarqués partiellement défaillants sur plus de la moitié de la flotte, et une incapacité à qualifier la nature réelle des temps d'arrêt. Résultat : en juillet 2026, les indicateurs globaux affichaient une performance conforme, voire supérieure aux objectifs, alors que la production réelle du secteur ne représentait qu'une fraction de l'objectif — signe que ces indicateurs ne permettaient ni de diagnostiquer, ni de prévoir l'écart de production.",
      "exp.snim.gal1": "Sur site, Guelb El Rhein",
      "exp.snim.gal2": "Chargement — pelle &amp; camions CAT 789",
      "exp.snim.gal3": "Sondeuse de production, PB2-Est",

      "exp.snim.tool.h1": "Chrono Cycle Camion — plateforme de mesure développée pendant le stage",
      "exp.snim.tool.p1": "Face aux limites du dispatching automatique, j'ai conçu et déployé sur le terrain une plateforme de chronométrage dédiée, baptisée <strong>Chrono Cycle Camion</strong>, afin de mesurer objectivement les temps de cycle réels des camions et les retards opérationnels qui les composent. L'interface (HTML/CSS avec Bootstrap, JavaScript) permet d'enregistrer, étape par étape, le cycle complet d'un camion — chargement, trajet chargé, bennage, trajet à vide — avec un traitement des données en Python côté back-end et une consolidation dans un fichier Excel exploitable statistiquement.",
      "exp.snim.tool.p2": "La collecte a nécessité une présence physique prolongée sur le terrain, y compris de nuit, afin de couvrir l'ensemble des conditions d'exploitation (relève, éclairage, trafic) susceptibles d'influencer les temps de cycle. Le tableau de bord intégré calcule automatiquement les indicateurs clés (ACT moyen, efficacité opérationnelle TCT/ACT, tonnage total) ainsi qu'un diagramme de Pareto des causes de retard, outil central du diagnostic présenté dans l'onglet suivant.",
      "exp.snim.gal4": "Interface de saisie — Chrono Cycle Camion",
      "exp.snim.gal5": "Poste de conduite — terminal Dispatch embarqué",
      "exp.snim.tool.chip1": "Dispatch / Modular Mining FMS",

      "exp.snim.diag.p1": "Sur 42 cycles chronométrés, le temps de cycle réel moyen (ACT) atteint 37 min 17 s pour un temps de cycle théorique (TCT) calculé à partir de la géométrie exacte des pistes (Surpac) de 17 min 53 s — une perte moyenne de plus de 8 minutes par cycle. Le diagramme de Pareto des retards détaillés fait ressortir trois causes qui concentrent, à elles seules, 80 % des pertes de temps cumulées :",
      "exp.snim.diag.li1": "<strong>TQL — temps de queue au chargement (45 %) :</strong> présent dans 31 des 41 cycles valides. Cause première identifiée : défaillance du dispatching automatique (couverture réseau incomplète, écrans embarqués en panne sur plus de 50 % de la flotte), aggravée par l'hétérogénéité mécanique des pelles — la pelle PH5, dégradée, immobilisait le couple pelle-camion près du double du temps d'une pelle en bon état.",
      "exp.snim.diag.li2": "<strong>TQT — temps de queue au bennage (23 %) :</strong> lié au même mécanisme de file d'attente côté concasseurs (CC1/CC2), amplifié par leurs arrêts inopinés.",
      "exp.snim.diag.li3": "<strong>TGW-R — cédez-le-passage en ligne droite :</strong> cause directement géométrique. La largeur mesurée des rampes en lacet (22 à 34 m) descend, sur une portion significative du tracé, sous le minimum requis pour un croisement bidirectionnel (≈ 30 m pour un CAT 789D), contraignant les camions à s'arrêter pour se céder le passage.",
      "exp.snim.diag.li4": "<strong>Retards liés à la vitesse :</strong> résistance au roulement recalibrée à partir des pentes réelles (2,2 à 3,4 % selon la rampe, contre 2 % en piste idéale), couche de roulement non compactée, et effet de convoi causé par des camions vieillissants plafonnant à 60–85 % de leur puissance nominale.",

      "exp.snim.act.p1": "Pour chaque cause identifiée, j'ai chiffré l'impact attendu d'une action corrective ciblée, à partir des données mesurées sur le terrain :",
      "exp.snim.act.li1": "<strong>Double spotting au chargement :</strong> faire chevaucher la manœuvre de mise en position du camion suivant avec le chargement en cours élimine le TST du chemin critique — gain démontré de 5,6 min sur une file de 6 camions.",
      "exp.snim.act.li2": "<strong>Fiabilisation de la pelle PH5 :</strong> ramener son temps de chargement au niveau des pelles PH9/PH10 réduit le TQL en 6<sup>e</sup> position de 26,4 à 13,75 min, soit un gain de 12,65 min par camion affecté.",
      "exp.snim.act.li3": "<strong>Équilibrage actif du dispatching entre concasseurs :</strong> répartir le flux entre CC1 et CC2 plutôt que de laisser le dispatching orienter les camions indifféremment réduit le TQT d'environ 60 % pour une file de 6 camions.",
      "exp.snim.act.li4": "<strong>Élargissement des pistes en lacet :</strong> porter la largeur à ≥ 30 m sur l'ensemble du tracé éliminerait, en théorie, la totalité du TGW-R mesuré — soit 17,3 s par cycle en moyenne.",
      "exp.snim.act.li5": "<strong>Réhabilitation de la couche de roulement :</strong> ramener la résistance au roulement à ≤ 2 % (mélange stérile concassé + sable, CBR &gt; 80, compactage &gt; 95 %) et remettre en état les camions plafonnés en puissance.",
      "exp.snim.act.quote": "« La démarche actuelle permet de constater l'écart de production, mais pas de diagnostiquer avec précision la part imputable aux pertes opérationnelles du cycle de roulage/chargement — c'est de ce constat qu'est né le sujet du stage. »",

      "exp.fqm.title": "Stagiaire Ingénieur Métallurgiste",
      "exp.fqm.org": "First Quantum Minerals (MCM) — Akjoujt, Mauritanie",
      "exp.fqm.meta": "Juillet 2025 — Septembre 2025",
      "exp.fqm.desc": "Optimisation des paramètres opératoires du broyeur semi-autogène (SAG) et identification exhaustive des arrêts et pertes de temps sur les circuits de l'usine de traitement. Suivi opérationnel de l'usine visant à améliorer l'efficacité de la comminution et le débit de traitement.",
      "exp.fqm.tag1": "Optimisation broyeur SAG",
      "exp.fqm.tag2": "Analyse des arrêts",
      "exp.fqm.tag3": "Suivi des procédés",

      "exp.smh.title": "Stagiaire Ingénieur Géotechnicien",
      "exp.smh.org": "SMH — Société Mauritanienne des Hydrocarbures, Nouakchott",
      "exp.smh.meta": "Juillet 2024 — Septembre 2024",
      "exp.smh.desc": "Rédaction de rapports de géologie de forage ; identification, classification et essais mécaniques des sols ; interprétation sismique et exploitation de données d'archives.",
      "exp.smh.tag1": "Géologie de forage",
      "exp.smh.tag2": "Interprétation sismique",
      "exp.smh.tag3": "Classification des sols",

      "proj.eyebrow": "Projets académiques",
      "proj.title": "Projets de recherche &amp; conception",
      "proj.lead": "Deux études appliquées : mesurer la granulométrie des minerais par vision par ordinateur et optimiser une fosse à ciel ouvert sous contraintes de pente.",
      "proj.p1.title": "Estimation automatisée de la granulométrie sur micrographies",
      "proj.p1.meta": "Oct. 2025 — Janv. 2026 · ENSMR, Rabat",
      "proj.p1.desc": "Conception d'une chaîne reproductible de traitement d'images pour segmenter les grains d'un minerai et estimer leur distribution granulométrique à partir de micrographies.",
      "proj.p1.tag": "Vision par ordinateur",
      "proj.p1.imageAlt": "Exemple d'analyse granulométrique : image de référence, grains segmentés et mesures individuelles",
      "proj.p1.imageCaption": "Exemple de segmentation et de mesure des grains",
      "proj.p1.methodTitle": "Méthode",
      "proj.p1.method": "Prétraitement et calibration pixel–micron, comparaison de segmentations classiques (seuillage et gradient Canny), détection de contours HED et expérimentation d'un U-Net combinant l'image et des cartes de contours. Les masques sont évalués avec Dice, IoU, précision et rappel.",
      "proj.p1.outputTitle": "Mesures &amp; résultats",
      "proj.p1.output": "Les composantes segmentées alimentent des mesures par grain : aire, périmètre, diamètre équivalent, axes principaux et secondaires, circularité et rapport d'aspect. Le notebook rassemble 7&nbsp;623 enregistrements et produit des tableaux et distributions granulométriques, en pixels comme en unités physiques.",
      "proj.p1.report": "Lire le rapport complet (PDF)",
      "proj.p2.title": "Optimisation d'une fosse ultime à ciel ouvert",
      "proj.p2.meta": "Mars — Mai 2025 · E.S. Polytechnique Nouakchott · avec Hajar Elghelmani et Ismael Benchelh · rapport daté du 10 janv. 2026",
      "proj.p2.desc": "Étude collaborative d'optimisation de fosse par Lerchs–Grossmann : formulation d'un modèle de blocs et résolution de la limite économique sous une contrainte de pente de 45°.",
      "proj.p2.imageAlt": "Visualisation 3D d'un modèle minier pour l'étude de fosse à ciel ouvert",
      "proj.p2.imageCaption": "Visualisation 3D du modèle minier",
      "proj.p2.methodTitle": "Modélisation",
      "proj.p2.method": "Un gisement simplifié de 5 lignes × 8 colonnes attribue un profit à chacun des 40 blocs. Les relations de précédence représentant la pente relient les blocs qui doivent être extraits ensemble. Un graphe de flot maximal/coupe minimale (NetworkX) détermine l'ensemble optimal.",
      "proj.p2.outputTitle": "Résultat du cas étudié",
      "proj.p2.output": "Pour ce jeu de données pédagogique, la solution satisfait les contraintes de précédence, sélectionne 16 blocs et atteint un objectif de profit de 19 unités du modèle. Les blocs et la matrice de fosse sont exportés pour vérification et visualisation.",
      "proj.p2.tag1": "Lerchs–Grossmann",
      "proj.p2.tag2": "Pente 45°",
      "proj.p2.report": "Lire le rapport complet (PDF)",

      "skills.eyebrow": "Compétences",
      "skills.title": "Compétences &amp; outils",
      "skills.lead": "Planification minière, géotechnique, et outils de développement appliqués à l'ingénierie minière.",
      "skills.technical": "Compétences techniques",
      "skills.t1": "Planification minière (Surpac, Datamine)",
      "skills.t2": "Mécanique des roches et des sols",
      "skills.t3": "Génie des procédés",
      "skills.t4": "Géostatistique",
      "skills.t5": "Géotechnique",
      "skills.software": "Logiciels",
      "skills.other": "Autres compétences",
      "skills.o1": "Vision par ordinateur",
      "skills.o2": "Gestion de projet",
      "skills.o3": "Travail en équipe",
      "skills.o4": "Rédaction technique",
      "skills.languages": "Langues",
      "skills.lang.ar": "Arabe",
      "skills.lang.ar.lvl": "Langue maternelle",
      "skills.lang.fr": "Français",
      "skills.lang.en": "Anglais",
      "skills.certs": "Certifications",
      "skills.cert1": "Google Project Management — Coursera, 2022",

      "contact.eyebrow": "Contact",
      "contact.title": "Travaillons ensemble",
      "contact.lead": "À la recherche d'un stage de fin d'études à partir de janvier 2027. N'hésitez pas à me contacter.",
      "contact.email": "E-mail",
      "contact.phone": "Téléphone",
      "contact.location": "Localisation",
      "contact.location.val": "Rabat, Maroc",
      "contact.cv.fr": "Télécharger le CV (Français)",
      "contact.cv.en": "Download CV (English)",

      "footer.built": "Conçu &amp; développé avec HTML, CSS et JavaScript."
    },

    en: {
      "meta.title": "Elycheikh Cheiguer — Mining Engineering Student",
      "meta.desc": "Portfolio of Elycheikh Cheiguer, mining engineering student (Rabat School of Mines / E.S. Polytechnique Nouakchott) — geotechnics, open pit mining, mineral processing.",

      "sidebar.role": "Mining Engineering",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.education": "Career",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.kicker": "Mining Engineering Student",
      "hero.title1": "Hi, I'm",
      "hero.sub": "Double-degree mining engineering student (Rabat School of Mines / E.S. Polytechnique Nouakchott), specialized in mining and geotechnical engineering. Hands-on field experience in open pit operations, mineral processing and geotechnical studies — searching for a final-year internship starting January 2027.",
      "hero.cta.cv": "Download CV",
      "hero.cta.contact": "Get in touch",
      "hero.stat1": "Field internships",
      "hero.stat2": "Trucks in managed fleet",
      "hero.stat3": "French — DALF",
      "hero.badge.title": "Current internship",
      "hero.badge.sub": "SNIM — Guelb El Rhein Mining Site, Zouerate",

      "about.eyebrow": "About",
      "about.title": "Who I am",
      "about.lead": "A technical profile trained in both mining engineering and resource management, built on three consecutive field internships in the Mauritanian mining industry.",
      "about.p1": "Currently in my final year of the double-degree \"Mines and Infrastructure Engineering\" program at the Rabat School of Mines (ENSMR), after completing a first engineering degree in Mines and Resource Management at E.S. Polytechnique Nouakchott, specialized in geotechnics and mining engineering.",
      "about.p2": "My field experience spans the full mining chain: open pit operations (haulage/loading cycle optimization, fleet management systems, short- and long-term planning in Surpac), mineral processing and extractive metallurgy (processing optimization), and geotechnical studies (Plaxis, Rocscience). I complement these skills with programming (Python, JavaScript) and computer vision applied to mining engineering.",
      "about.p3": "I am currently looking for a final-year internship of 4 to 6 months starting January 2027.",
      "about.fact1.title": "Location",
      "about.fact1.sub": "Rabat, Morocco",
      "about.fact2.title": "Availability",
      "about.fact2.sub": "Final-year internship — from January 2027 (4 to 6 months)",
      "about.fact3.title": "Languages",
      "about.fact3.sub": "Arabic (native), French (C1), English (B2)",
      "about.fact4.title": "Scholarship",
      "about.fact4.sub": "GMEF — Geotechnical Center of Excellence, University of Arizona",

      "edu.eyebrow": "Education",
      "edu.title": "Academic background",
      "edu.lead": "A double engineering degree built between Mauritania and Morocco, complemented by specialized training in underground geotechnics.",
      "edu.item1.title": "Double Degree M.Eng — Mines and Infrastructure Engineering",
      "edu.item1.org": "Rabat School of Mines (ENSMR), Rabat, Morocco",
      "edu.item1.desc": "AE3S track — Mines Department. Final year of the double degree.",
      "edu.item2.date": "Sep 2026 — Feb 2027 (ongoing)",
      "edu.item2.title": "Geotechnical Fundamentals for Underground Mining",
      "edu.item2.org": "Geotechnical Center of Excellence, University of Arizona — online",
      "edu.item2.desc": "Online program, GMEF (Geotechnical Mining Education Fund) scholarship recipient.",
      "edu.item3.title": "Engineering Degree (M.Eng) — Mines and Resource Management",
      "edu.item3.org": "E.S. Polytechnique Nouakchott, Mauritania",
      "edu.item3.desc": "Specialization in geotechnical and mining engineering.",
      "edu.item4.title": "Preparatory Classes — National Engineering Exam (CNIM)",
      "edu.item4.org": "E.S. Polytechnique Nouakchott, Mauritania",
      "edu.item4.desc": "Admitted via CNIM 2023.",
      "edu.item5.date": "—",
      "edu.item5.title": "Baccalaureate, Mathematics track",
      "edu.item5.org": "Lycée Militaire, Nouakchott, Mauritania",

      "exp.eyebrow": "Experience",
      "exp.title": "Internships &amp; field experience",
      "exp.lead": "Three consecutive internships spanning open pit operations, mineral processing and geotechnics.",

      "exp.snim.badge": "Most recent internship",
      "exp.snim.title": "Production Engineer Intern",
      "exp.snim.org": "SNIM — Guelb El Rhein Mining Site, Zouerate, Mauritania",
      "exp.snim.stat1": "Target / month",
      "exp.snim.stat2": "CAT 789D trucks",
      "exp.snim.stat3": "PH / RH shovels",
      "exp.snim.stat4": "Cycles timed",
      "exp.snim.stat5": "Operational efficiency",
      "exp.snim.tab1": "Context",
      "exp.snim.tab2": "Tool I built",
      "exp.snim.tab3": "Diagnosis",
      "exp.snim.tab4": "Actions &amp; results",

      "exp.snim.ctx.p1": "Assistant engineer internship (July–September 2026) on the PB2-East sector of the Guelb El Rhein open pit mine — SNIM's richest magnetite deposit and now the main production driver of the site. Target set by management: a rate of 3 Mt/month (ore and waste combined), supported by a fleet of 45 CAT 789D rigid haul trucks paired with electric cable shovels (PH) and hydraulic shovels (RH).",
      "exp.snim.ctx.p2": "The existing monitoring of the Haulage/Loading section relied solely on data from the fleet management system (Dispatch FMS, Modular Mining), aggregated across the entire pit. This approach hid three structural limitations: indicators computed globally with no sector-level breakdown, a local network and onboard-screen coverage that was partially down across more than half the fleet, and an inability to characterize the real nature of downtime. The result: in July 2026, the global indicators showed performance at or above target, while actual production in the sector was only a fraction of the goal — a sign that these indicators could neither diagnose nor predict the production gap.",
      "exp.snim.gal1": "On site, Guelb El Rhein",
      "exp.snim.gal2": "Loading — shovel &amp; CAT 789 trucks",
      "exp.snim.gal3": "Production drill rig, PB2-East",

      "exp.snim.tool.h1": "Chrono Cycle Camion — a measurement platform I built during the internship",
      "exp.snim.tool.p1": "Facing the limits of the automatic dispatching system, I designed and deployed a dedicated time-study platform in the field, named <strong>Chrono Cycle Camion</strong>, to objectively measure real truck cycle times and the operational delays that make them up. The interface (HTML/CSS with Bootstrap, JavaScript) records a truck's full cycle step by step — loading, hauling loaded, dumping, hauling empty — with data processing in Python on the back end and consolidation into an Excel file ready for statistical analysis.",
      "exp.snim.tool.p2": "Data collection required an extended physical presence in the field, including night shifts, to cover the full range of operating conditions (shift changes, lighting, traffic) likely to affect cycle times. The built-in dashboard automatically computes key indicators (average ACT, TCT/ACT operational efficiency, total tonnage) along with a Pareto chart of delay causes — the central diagnostic tool covered in the next tab.",
      "exp.snim.gal4": "Data-entry interface — Chrono Cycle Camion",
      "exp.snim.gal5": "Driver's cab — onboard Dispatch terminal",
      "exp.snim.tool.chip1": "Dispatch / Modular Mining FMS",

      "exp.snim.diag.p1": "Across 42 timed cycles, the average real cycle time (ACT) reached 37 min 17 s, against a theoretical cycle time (TCT) of 17 min 53 s computed from the exact haul-road geometry (Surpac) — an average loss of over 8 minutes per cycle. The Pareto chart of detailed delays shows that three causes alone account for 80% of cumulative time losses:",
      "exp.snim.diag.li1": "<strong>TQL — queue time at loading (45%):</strong> present in 31 of 41 valid cycles. Root cause identified: failures in the automatic dispatching system (incomplete network coverage, onboard screens down on over 50% of the fleet), compounded by mechanical variability between shovels — the degraded PH5 shovel tied up the shovel-truck pair for nearly twice as long as a well-maintained shovel.",
      "exp.snim.diag.li2": "<strong>TQT — queue time at dumping (23%):</strong> driven by the same queueing mechanism at the crushers (CC1/CC2), amplified by their unplanned stoppages.",
      "exp.snim.diag.li3": "<strong>TGW-R — give-way on straight sections:</strong> a directly geometric cause. The measured width of the switchback ramps (22 to 34 m) drops, over a significant portion of the route, below the minimum required for two-way crossing (≈30 m for a CAT 789D), forcing trucks to stop and give way to each other.",
      "exp.snim.diag.li4": "<strong>Speed-related delays:</strong> rolling resistance recalibrated from the actual grades (2.2 to 3.4% depending on the ramp, versus 2% on an ideal road), an uncompacted wearing course, and a convoy effect caused by aging trucks capped at 60–85% of rated power.",

      "exp.snim.act.p1": "For each identified cause, I quantified the expected impact of a targeted corrective action, based on field-measured data:",
      "exp.snim.act.li1": "<strong>Double spotting at the loading face:</strong> overlapping the next truck's spotting maneuver with the shovel's ongoing loading removes spotting time from the critical path — a demonstrated gain of 5.6 min across a queue of 6 trucks.",
      "exp.snim.act.li2": "<strong>Reliability fix on shovel PH5:</strong> bringing its loading time down to the level of PH9/PH10 cuts the 6<sup>th</sup>-position queue time from 26.4 to 13.75 min — a gain of 12.65 min per truck assigned to it.",
      "exp.snim.act.li3": "<strong>Active dispatch balancing between crushers:</strong> actively splitting the flow between CC1 and CC2, instead of letting dispatch route trucks indiscriminately, cuts dumping queue time by roughly 60% for a queue of 6 trucks.",
      "exp.snim.act.li4": "<strong>Widening the switchback ramps:</strong> bringing the width to ≥30 m along the full route would, in theory, eliminate the entire measured give-way delay — about 17.3 s per cycle on average.",
      "exp.snim.act.li5": "<strong>Wearing-course rehabilitation:</strong> bringing rolling resistance down to ≤2% (a crushed-waste-rock and sand mix, CBR &gt; 80, compaction &gt; 95%) and servicing the power-capped trucks.",
      "exp.snim.act.quote": "\"The current approach can observe the production gap, but it cannot precisely diagnose how much of it is caused by operational losses in the haulage/loading cycle — that gap is exactly what this internship topic grew out of.\"",

      "exp.fqm.title": "Metallurgical Engineer Intern",
      "exp.fqm.org": "First Quantum Minerals (MCM) — Akjoujt, Mauritania",
      "exp.fqm.meta": "July 2025 — September 2025",
      "exp.fqm.desc": "Optimization of semi-autogenous (SAG) mill operating parameters and comprehensive delay detection across the processing plant's circuits. Operational plant monitoring aimed at improving comminution efficiency and throughput.",
      "exp.fqm.tag1": "SAG mill optimization",
      "exp.fqm.tag2": "Delay analysis",
      "exp.fqm.tag3": "Process monitoring",

      "exp.smh.title": "Geotechnical Engineer Intern",
      "exp.smh.org": "SMH — Mauritanian Hydrocarbons Company, Nouakchott",
      "exp.smh.meta": "July 2024 — September 2024",
      "exp.smh.desc": "Drilling geology reports; soil identification, classification and mechanical testing; seismic interpretation and archival data analysis.",
      "exp.smh.tag1": "Drilling geology",
      "exp.smh.tag2": "Seismic interpretation",
      "exp.smh.tag3": "Soil classification",

      "proj.eyebrow": "Academic projects",
      "proj.title": "Research &amp; design projects",
      "proj.lead": "Two applied studies: measuring ore grain size with computer vision and optimizing an open pit under slope constraints.",
      "proj.p1.title": "Automated grain-size estimation from micrographs",
      "proj.p1.meta": "Oct 2025 — Jan 2026 · ENSMR, Rabat",
      "proj.p1.desc": "A reproducible image-processing pipeline to segment ore grains and estimate their size distribution from micrographs.",
      "proj.p1.tag": "Computer vision",
      "proj.p1.imageAlt": "Grain-size analysis example showing the reference image, segmented grains, and individual measurements",
      "proj.p1.imageCaption": "Example of grain segmentation and measurement",
      "proj.p1.methodTitle": "Method",
      "proj.p1.method": "Image preprocessing and pixel-to-micron calibration; comparison of classical segmentation (thresholding and Canny gradients); HED edge detection; and experiments with a U-Net that combines the image with edge maps. Masks are evaluated using Dice, IoU, precision, and recall.",
      "proj.p1.outputTitle": "Measurements &amp; results",
      "proj.p1.output": "Connected components from the masks are used to measure grain area, perimeter, equivalent diameter, major and minor axes, circularity, and aspect ratio. The notebook brings together 7,623 records and produces tables and grain-size distributions in pixels and physical units.",
      "proj.p1.report": "Read the full report (PDF)",
      "proj.p2.title": "Ultimate open-pit optimization",
      "proj.p2.meta": "Mar — May 2025 · E.S. Polytechnique Nouakchott · with Hajar Elghelmani and Ismael Benchelh · report dated 10 Jan 2026",
      "proj.p2.desc": "A collaborative Lerchs–Grossmann pit-optimization study: building a block model and solving for its economic limit under a 45° slope constraint.",
      "proj.p2.imageAlt": "3D mining-model visualization for an open-pit study",
      "proj.p2.imageCaption": "3D visualization of the mining model",
      "proj.p2.methodTitle": "Model",
      "proj.p2.method": "A simplified deposit of 5 rows × 8 columns assigns a profit to each of 40 blocks. Slope precedence relationships connect blocks that must be mined together. A maximum-flow/minimum-cut graph (NetworkX) determines the optimal set.",
      "proj.p2.outputTitle": "Result for the studied case",
      "proj.p2.output": "For this academic dataset, the solution satisfies the precedence constraints, selects 16 blocks, and reaches a model profit objective of 19 units. The block list and pit matrix are exported for verification and visualization.",
      "proj.p2.tag1": "Lerchs–Grossmann",
      "proj.p2.tag2": "45° slope",
      "proj.p2.report": "Read the full report (PDF)",

      "skills.eyebrow": "Skills",
      "skills.title": "Skills &amp; tools",
      "skills.lead": "Mine planning, geotechnics, and development tools applied to mining engineering.",
      "skills.technical": "Technical skills",
      "skills.t1": "Mine planning (Surpac, Datamine)",
      "skills.t2": "Rock and soil mechanics",
      "skills.t3": "Process engineering",
      "skills.t4": "Geostatistics",
      "skills.t5": "Geotechnics",
      "skills.software": "Software",
      "skills.other": "Other skills",
      "skills.o1": "Computer vision",
      "skills.o2": "Project management",
      "skills.o3": "Teamwork",
      "skills.o4": "Technical writing",
      "skills.languages": "Languages",
      "skills.lang.ar": "Arabic",
      "skills.lang.ar.lvl": "Native language",
      "skills.lang.fr": "French",
      "skills.lang.en": "English",
      "skills.certs": "Certifications",
      "skills.cert1": "Google Project Management — Coursera, 2022",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's work together",
      "contact.lead": "Searching for a final-year internship starting January 2027. Feel free to reach out.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.location": "Location",
      "contact.location.val": "Rabat, Morocco",
      "contact.cv.fr": "Télécharger le CV (Français)",
      "contact.cv.en": "Download CV (English)",

      "footer.built": "Designed &amp; built with HTML, CSS and JavaScript."
    }
  };

  /* ----------------------------------------------------------
     2. LANGUAGE ENGINE
     ---------------------------------------------------------- */

  const STORAGE_KEY = "ec_portfolio_lang";
  const root = document.documentElement;
  const langButtons = document.querySelectorAll("[data-lang-btn]");
  const cvHeroLink = document.querySelector("[data-cv-link]");

  function getPreferredLang() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "en") return saved;
    } catch {
      /* localStorage unavailable (private mode, etc.) — fall through to default */
    }
    return "fr";
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.fr;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("alt", dict[key]);
      }
    });

    document.title = dict["meta.title"] || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

    root.setAttribute("lang", lang);

    langButtons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    if (cvHeroLink) {
      if (lang === "en") {
        cvHeroLink.setAttribute("href", "assets/cv/Elycheikh_Cheiguer_CV_EN.pdf");
      } else {
        cvHeroLink.setAttribute("href", "assets/cv/Elycheikh_Cheiguer_CV_FR.pdf");
      }
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore persistence failure — language still applies for this view */
    }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang-btn"));
    });
  });

  applyLanguage(getPreferredLang());

  /* ----------------------------------------------------------
     3. MOBILE NAV: close offcanvas on link click
     ---------------------------------------------------------- */

  const offcanvasEl = document.getElementById("appSidebar");
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (offcanvasEl && offcanvasEl.classList.contains("show") && window.bootstrap) {
        const instance = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instance) instance.hide();
      }
    });
  });

  /* ----------------------------------------------------------
     4. PAGE NAVIGATION: mark the current document
     ---------------------------------------------------------- */

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    const isCurrentPage = linkPath === currentPath;
    link.classList.toggle("active", isCurrentPage);
    if (isCurrentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  /* ----------------------------------------------------------
     5. REVEAL ON SCROLL
     ---------------------------------------------------------- */

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const reveal = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { reveal.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ----------------------------------------------------------
     6. CASE STUDY TABS (SNIM experience)
     ---------------------------------------------------------- */

  const caseTabs = document.querySelectorAll("[data-case-tab]");
  const casePanes = document.querySelectorAll("[data-case-pane]");

  caseTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-case-tab");

      caseTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");

      casePanes.forEach(function (pane) {
        pane.classList.toggle("active", pane.getAttribute("data-case-pane") === target);
      });
    });
  });

  /* ----------------------------------------------------------
     7. FOOTER YEAR
     ---------------------------------------------------------- */

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
