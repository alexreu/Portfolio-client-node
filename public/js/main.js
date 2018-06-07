var etoile = function(nbStars){
    stars = '<i class="fas fa-star"></i>';
    noStars = '<i class="far fa-star"></i>';

    var result ="";
    var rest = 0;
    reste = 6 - nbStars;
    result = stars.repeat(nbStars) + noStars.repeat(reste);
    
    return result;
}
$.ajax({
    url: "http://localhost:3012/public/data/data.json",
    success : function(data){

        var tab = [];
        var stars = '<i class="fas fa-star"></i>';
        var noStars = '<i class="far fa-star"></i>';

        console.log(data[0].competence.niveau);

        data.sort(function(a, b){
            return b.competence.niveau - a.competence.niveau;
        });
        
        for (var id in data){
            var tmp = '<li>'+ data[id].competence.competence_name + " " + etoile(data[id].competence.niveau) + '</li>';
            // etoile(data[id].competence.niveau)
            tab.push(tmp);
        }
        
        $("#liste").html(tab);

    }
});



// ma fonction(4){
//  etoile = <i>etoile</i>

//  retourn : 4*etoile + 4-6noetoile
