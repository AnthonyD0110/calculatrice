var calcul = " "
$(document).ready(function(){
        $(".chiffre, .operation").click(function(){ // Fonction clic
            if(this.value!="C" && this.value!="="){ // Condition pour remplir la saisie
                calcul += this.value;
            }

            if(this.value=="C"){ // Condition de la touche C
                calcul = " ";
            }

            if(this.value=="="){ // Condition de la touche égale
                calcul = eval(calcul);
            }

            for (let i = -1; i < 2; i++){ // Boucle de la condition de la division par 0
                if(calcul==i/0){
                    calcul = "Division par 0 impossible";
                }
            }
            
            $("#saisie").val(calcul); // Affichage de la saisie
        });
    });