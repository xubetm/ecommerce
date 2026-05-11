Login UOC: xubetm

Nom: MIQUEL XUBET ALBERT

S’ha creat una aplicació d’ecommerce amb Angular on es mostren articles mitjançant components com article-item i article-list. També s’ha implementat la gestió de quantitats amb comunicació entre components (@Input i @Output).

S’ha afegit un servei (ArticleService) per gestionar els articles de forma centralitzada, aplicant BehaviorSubject de RxJS per actualitzar la llista en temps real.

S’han implementat dos tipus de formularis: template-driven i reactius. En el formulari reactiu s’han utilitzat validacions d’Angular, FormBuilder i una validació personalitzada.

També s’ha creat un sistema de navegació amb navbar per mostrar o amagar components amb \*ngIf.

Les principals dificultats han estat la configuració de components standalone, la comunicació entre components i l’ús de formularis reactius amb validacions.

Els articles es guarden en memòria dins d’un servei, no en una base de dades, per tant es perden en recarregar la pàgina.
