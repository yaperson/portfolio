---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'FeedBack - Self'
pubDate: 2023-03-18
description: 'FeedBack - Self est un logiciel métier de notation de self. Il permet de récolter, grâce à un système de
            notation simple des avis.'
author: 'Yanis Legrand'
image:
    url: '/images/feedback-self/feedbackself.PNG' 
    alt: 'FeedBack self main page.'
tags: ["symfony", "css", "HTML", "Twigg", "Web"]
---

<style>
    h2,h3 { margin-top:2em; }
    h2, p, hr { margin: 1em; }
    img { max-width:40em; }
    a { color: #0066ff;
        text-decoration:none; }
</style>

<p>
FeedBack - Self est un logiciel métier de notation du self réalisé en php avec symfony. Il permet de récolter, grâce à un système de notation simple, des avis à l'aide d'un panel administrateur, munis des informations essentielles, retranscris dans les tableaux et graphiques mis à disposition dans un objectif de productivité.
</p>

<img src="/images/feedback-self/backoffice.PNG" alt="interface d'administration">
<span>Nous avons utiliser char.js pour les graphiques</span>
<p>
Le logiciel a été éffectué dans le cadre de mon <a href="https://www.onisep.fr/ressources/univers-formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers">BTS SIO option SLAM</a>, au <a href="https://ndlpavranches.fr/" >lycée Notre Dame de La Providence à Avranches</a>. L'idée était d'avoir un contexte et un besoin réel pour réaliser un TP. Il s'avère que le lycée faisait appel à un prestataire pour la restauration et tous les trois mois avaient lieu une réunion afin de noter les points d'améliorations potentielle. Un sondage était généralement fait : une feuille était distribuée aux usagers du self (élèves, enseignants et personnel administratif) à l'entrée du self, peu la remplissaient.

Il est donc venu l'idée de créer une application pour que les usagers du self puissent donner leur avis plus simplement.

<img src="/images/feedback-self/phone-app.PNG" alt="interface utilisateur" width="200px">

L'application se devait accessible sous forme de site web responsive, grace à un QR code disposé a la sortie du self. L'objectif de Feedback - self étais d’avoir un retour direct chaques jour, à l’instar des retours trimestriels déjà en place. 

Pour réaliser le projet, nous étions 6 et avons utilisé git et différentes méthodes organisationelles (kanban, gant...) afin de répartir convenablement les taches à réaliser.
</p>