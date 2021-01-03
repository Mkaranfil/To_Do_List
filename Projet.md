# Création de projet

## Arborescence
==public==
* css
* font
	* NomDePolice
* img

==src==
* sass
	* app.sass
	* _font.sass
	* modules
		* 	_style.sass
		* _header.sass

==index.html==


## Google Font

choisir font => Télécharger en local
Créer un dossier "NomDePolice"
unzip dans ce dossier, extraire
Déplacer "NomDePolice" dans dossier font (dans public)

Dans _font.sass

    @font-face
		font-family: "NomDePolice"
		src: url("../../public/font/nomDePolice/static/npd.reg")


Dans app.sass

    @import ./_fonts
     
    @import ./_variable
    
    @import ../../node_modules/bootstrap/scss/bootstrap.scss
     
    $fa-font-path : "../../node_modules/@fortawesome/fontawesome-free/webfonts" 
    @import "../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss"
    @import "../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss"
    @import "../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss"
    @import "../../node_modules/@fortawesome/fontawesome-free/scss/regular.scss"
     
    @import ./module/_style

# Il faut watch

## watch
sass --watch src/sass/app.sass:public/css/app.css
  
## NPM

Une dépendance
Dans console

	
crée json

Télécharger une librairie d'icônes
Dans console

    npm init -y

	npm i @fortawesome/fontawesome-free

    npm install bootstrap

installer Jquery

    npm install jquery

Linker le script tout en bas de body

    <!-- Jquery -->
	<script src="./node_modules/jquery/dist/jquery.js"></script> 
	<!-- Bootstrap --> 
	<script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script> 
	<script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script>



==/!\ Très important !
Tous mes bouts de styles seront décomposés dans dossier "modules". Et on mets aussi _style.sass dans dossier "modules".
_style.sass reprend tous les imports de styles
Dans app.sass, on importe le tout avec aussi _style.sass (qui reprend les fragments)==




> Written with [StackEdit](https://stackedit.io/).
