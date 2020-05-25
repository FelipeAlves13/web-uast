


function definido(){
   
}

$(document).ready(function(){
    var tempo;
    var string ="";
    var lista=[];
    var jogando;

    var minutos = $("#minutos");
    var segundos = $("#segundos");
    var npalavras = $("#Palavras");
    var np=$("#palavras");
    var restante = $("#restante");
    tempo = $("#Tempo");

    var seg=0;
    var min=0;
    var p=0;
    var temporaria=0
    $("#texto").on("keyup",function(e){
        if(p>0){
            if (temporaria<$("#texto").val().split(" ").length){
                p--;
                temporaria=$("#texto").val().split(" ").length;
                console.log(temporaria)
            } 
            restante.text(p)
        }
    });

    $("#Tempo").change(function(){
        string = tempo.val()+""
        lista=string.split(":")
        minutos.text(""+lista[0])
        segundos.text(""+lista[1])
        seg=parseInt(lista[1])
        min= parseInt(lista[0])      
    });


    var decrementador=setInterval(
        function(){
        if(jogando){
            if(p==0){
                alert("Parabens você terminou antes de acabar o tempo")
                npalavras.val("")
                tempo.val("")
                seg=0
                min=0
                minutos.text(00)
                segundos.text(00)
                np.text(0)
                $("input").show();
                $("#texto").val("")
                jogando=false
            }else if(seg==0){
                if(min==0){
                    if(p==0){
                        alert("Parabens você ganhou!!")
                        npalavras.val("")
                        tempo.val("")
                        seg=0
                        min=0
                        minutos.text(00)
                        segundos.text(00)
                        np.text(0)
                        $("input").show();
                        $("#texto").val("")
                        jogando=false
                    }else{
                        alert("Você Perdeuu!! Mais sorte na proxima")
                        npalavras.val("")
                        tempo.val("")
                        seg=0
                        min=0
                        minutos.text(""+00)
                        segundos.text(""+00)
                        np.text(0)
                        $("input").show();
                        $("#texto").val("")
                        jogando=false
                    }
                }else{
                    seg=59;
                    min--;
                    
                    if(min>=10){
                        minutos.text(min)
                    } else{
                        minutos.text("0"+min)
                    } 
                    segundos.text(seg);
                } 
                
                
            }else{
                seg--;
                if(seg>=10){
                    segundos.text(seg)
                } else{
                    segundos.text("0"+seg)
                } 
            }
        } 
    },1000);

    $("button").click(function(){
        
        if(tempo.val()==""&&npalavras.val()==""){
            
        }else{
            jogando=true
            p=parseInt(npalavras.val());
            np.text(npalavras.val()+"")
            restante.text(npalavras.val()+"")
            $("input").hide();
            decrementador
        }
            
        });
  
});
