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
            var tmp = '<li>'+ data[id].competence.competence_name + " " + stars.repeat(3)+ noStars.repeat(2)+ " " + data[id].competence.niveau + '</li>';
            tab.push(tmp);
        }
        
        $("#liste").html(tab);
    }
})