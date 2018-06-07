$.ajax({
    url: "http://localhost:3012/public/data/data.json",
    success : function(data){

        var  tab = [];
        var competence = [];
        var stars = '<i class="fas fa-star"></i>';
        var noStars = '<i class="far fa-star"></i>';

        console.log(data[0].competence.niveau);

        
        for (var id in data){
            var tmp ='<li>' + data[id].competence.niveau + '</li>';
            tab.push(tmp);
        }

        console.log(tab);

        tab.sort()

        $("#liste").html(tab);
    }
})