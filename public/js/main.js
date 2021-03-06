function etoile(nbStars){
    stars = '<i class="fas fa-star"></i>';
    switch (nbStars) {
        case 1:
        case 2:
            stars = '<i class="fas fa-star rouge"></i>'
            break;
        case 3:
        case 4:
            stars = '<i class="fas fa-star vert-clair"></i>'
            break;
        default:
            stars = '<i class="fas fa-star vert"></i>'
            break;
    }
    noStars = '<i class="far fa-star"></i>';
    switch (nbStars) {
        case 1:
        case 2:
            noStars = '<i class="far fa-star rouge"></i>'
            break;
        case 3:
        case 4:
            noStars = '<i class="far fa-star vert-clair"></i>'
            break;
        default:
            noStars = '<i class="far fa-star vert"></i>'
            break;
    }

    var result ="";
    var reste = 0;

    reste = 6 - nbStars;
    result = stars.repeat(nbStars) + noStars.repeat(reste);
    
    return result;
}


$.ajax({
    url: "http://localhost:3012/public/data/data.json",
    success : function(data){

        data.sort(function(a, b){
            return b.competence.niveau - a.competence.niveau;
        });
        

        for (var i=0; i<data.length; i++){
            if(i<5){
                $("#liste").append("<li class='list-group-item text-uppercase'>"+ data[i].competence.competence_name + " " + etoile(data[i].competence.niveau) + "</li>")
            }else {
                $("#liste2").append("<li class='list-group-item text-uppercase'>"+ data[i].competence.competence_name + " " + etoile(data[i].competence.niveau) + "</li>")
            }

            // essaie pour dynamiser la creation des liste
            // if (i<5){
            //     $("#liste").append("<li id="+ i +" class='list-group-item text-uppercase'>"+ data[i].competence.competence_name + " " + etoile(data[i].competence.niveau) + "</li>")
            // }else{
            //     $("#liste-container").append("<ul id=liste"+ i +"></ul>");
            //     $("#liste"+i).append("<li id="+ i +" class='list-group-item text-uppercase'>"+ data[i].competence.competence_name + " " + etoile(data[i].competence.niveau) + "</li>");
            // }
        }
        
    }
});