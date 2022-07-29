function play(link){
    document.getElementById('view').innerHTML = "<iframe height='540' width='960' src='"+link+"&autoplay=1' title='' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}
function current_day(){
    const d = new Date();
    let day = d.getDay();
    const color = '#949494'
    if(day == 1){
        tabela = [1, 8, 14, 20, 26, 32, 38]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }

    }
    if(day == 2){
        tabela = [2, 9, 15, 21, 27, 33, 39]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }
    }
    if(day == 3){
        tabela = [3, 10, 16, 22, 28, 34, 40]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }
    }
    if(day == 4){
        tabela = [4, 11, 17, 23, 29, 35, 41]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }
    }
    if(day == 5){
        tabela = [5, 12, 18, 24, 30, 36, 42]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }
    }
    if(day == 6){
        tabela = [6, 13, 19, 25, 31, 37, 43]
        for (var x = 0; x <= 7 ; x++) {
            document.getElementById(tabela[x]).style.color = color;
        }
    }
    if(day == 7){
        document.getElementById('7').style.color = color;
        
    }
}

current_day()