
 //get data from json file
 $('a').on('click', function (e) {
        var id = $(this).attr('id');
        $.ajax({
            type: 'GET',
            url: 'index.php',
            data:{gameId:id},        
            success: function(data) {
                var res=JSON.parse(data);
                createTableGames(res);
            },
            error: function(xhr, status, error) {
                 alert(status);
            }
           
        });
    });

 function createTableGames(data) {
        var showData = document.getElementById("showData"); 
        $('.row').remove();
        var index = 0;
        while (index < data.length )
        {
            row = document.createElement("div");
            row.className = "row";
            showData.appendChild(row);
            for (var i=0; i < 3;i++){
                 //create col class each game
                 col = document.createElement("div");
                 col.className="col-s-6 col-md-4";          
                 row.appendChild(col); 
                  //create title name each game
                 var h3=document.createElement("h3");
                 h3.className = "nameGame";
                 col.appendChild(h3);
                 h3.setAttribute("id", data[index]["game_name"]);
                 h3.innerText = h3.id;
                //create thumbnail each game
                 a = document.createElement("a");
                 a.className="thumbnail";
                 col.appendChild(a);
                 img = document.createElement("img");
                 img.setAttribute("id",h3.id.toLowerCase().replace(/\W/g,''));
                 a.appendChild(img);    
                 index++;

            }


        }
        //add img each game
        var namesGames=document.getElementsByClassName("nameGame");
            for (var i=0;i< namesGames.length;i++){
                namesGames[i].innerText=namesGames[i].id;
                nameImg=namesGames[i].id.toLowerCase().replace(/\W/g, '');
                type =".jpg";
                urlImg= "img/"+ nameImg+type;
                img= document.getElementById(nameImg).id;
                idImg='img#'+img;
                $(idImg).attr('src',urlImg);
            }


           
        }

