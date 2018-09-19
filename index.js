var good = 0;
var bad = 0;

$(document).ready(function() {

  var originalList = getList();
  buildQuiz(originalList);
});

function getList() {
  list = [{url: "/fotos/Amirun_Rahmat.PNG", name: "Amirun Rahmat"},
  {url: "/fotos/Casper_Metselaar.PNG", name: "Casper Metselaar"},
  {url: "/fotos/Chiara_te_Pas.PNG", name: "Chiara te Pas"},
  {url: "/fotos/Christina_Chan.PNG", name: "Christina Chan"},
  {url: "/fotos/Damaris_Scheper.PNG", name: "Damaris Scheper"},
  {url: "/fotos/Dionne_Buter.PNG", name: "Dionne Buter"},
  {url: "/fotos/Dominic_Istha.PNG", name: "Dominic Istha"},
  {url: "/fotos/Eduard_de_Jong.PNG", name: "Eduard de Jong"},
  {url: "/fotos/Elian_Engers.PNG", name: "Elian Engers"},
  {url: "/fotos/Eline_Teeuwen.PNG", name: "Eline Teeuwen"},
  {url: "/fotos/Eva_Boeijinga.PNG", name: "Eva Boeijinga"},
  {url: "/fotos/Fabio_Holtappels.PNG", name: "Fabio_Holtappels"},
  {url: "/fotos/Gijs_Eijgelaar.PNG", name: "Gijs Eijgelaar"},
  {url: "/fotos/Hedwig_Goudsmit.PNG", name: "Hedwig Goutsmit"},
  {url: "/fotos/Ianthe_Sosef.PNG", name: "Ianthe Sosef"},
  {url: "/fotos/Ibrahim_Bentouhami.PNG", name: "Ibrahim Bentouhami"},
  {url: "/fotos/Ida_Renden.PNG", name: "Ida Renden"},
  {url: "/fotos/Iris_Feije.PNG", name: "Iris Feije"},
  {url: "/fotos/Isa_Last.PNG", name: "Isa Last"},
  {url: "/fotos/Jarno_Wiggerts.PNG", name: "Jarno Wiggerts"},
  {url: "/fotos/Jessey_Vrossink.PNG", name: "Jessey Vrossink"},
  {url: "/fotos/Jessica_Eggen.PNG", name: "Jessica_Eggen"},
  {url: "/fotos/Jikke_Piqeur.PNG", name: "Jikke Piqeur"},
  {url: "/fotos/Job_Voskuilen.PNG", name: "Job Voskuilen"},
  {url: "/fotos/Joep_Fellinger.PNG", name: "Joep Fellinger"},
  {url: "/fotos/Joep_Kaptein.PNG", name: "Joep Kaptein"},
  {url: "/fotos/Joren_Overdiep.PNG", name: "Joren Overdiep"},
  {url: "/fotos/Josiah_Ramkisoen.PNG", name: "Josiah Ramkisoen"},
  {url: "/fotos/Kelly_Spaans.PNG", name: "Kelly Spaans"},
  {url: "/fotos/Laura_Bernard.PNG", name: "Laura Bernard"},
  {url: "/fotos/Lies_Welling.PNG", name: "Lies Welling"},
  {url: "/fotos/Linde_Derksen.PNG", name: "Linde Derksen"},
  {url: "/fotos/Linn_Widdershoven.PNG", name: "Linn Widdershoven"},
  {url: "/fotos/Madeleine_Kroeze.PNG", name: "Madeleine Kroeze"},
  {url: "/fotos/Maryse_Dubbelman.PNG", name: "Maryse Dubbelman"},
  {url: "/fotos/Maurits_Pasman.PNG", name: "Maurits Pasman"},
  {url: "/fotos/Nelanka_Horanagamage.PNG", name: "Nelanka Horanagamage"},
  {url: "/fotos/Nienke_Arends.PNG", name: "Nienke Arends"},
  {url: "/fotos/Quinten_Stassen.PNG", name: "Quinten Stassen"},
  {url: "/fotos/Romee_van_Erp.PNG", name: "Romee van Erp"},
  {url: "/fotos/Ronnie_Breewel.PNG", name: "Ronnie Breewel"},
  {url: "/fotos/Ruben_Wienema.PNG", name: "Ruben Wienema"},
  {url: "/fotos/Rutger_Steenhuisen.PNG", name: "Rutger Steenhuisen"},
  {url: "/fotos/Sanne_Moonen.PNG", name: "Sanne Moonen"},
  {url: "/fotos/Shams_Nedjat.PNG", name: "Shams Nedjat"},
  {url: "/fotos/Sophie_de_Ruiter.PNG", name: "Sophie de Ruiter"},
  {url: "/fotos/Steyn_Rijs.PNG", name: "Steyn Rijs"},
  {url: "/fotos/Teun_Zwemmer.PNG", name: "Teun Zwemmer"},
  {url: "/fotos/Tom_Alting.PNG", name: "Tom Alting"},
  {url: "/fotos/Yolien_Mulder.PNG", name: "Yolien Mulder"}]
  return list;
  // var list = []
  // $.ajax({
  //     url : '/fotos',
  //     async: false,
  //     success: function (data) {
  //       console.log(data)
  //         $(data).find("a").attr("href", function (i, val) {
  //             if( val.match(/\.(jpe?g|PNG|gif)$/) ) {
  //               var name = val.split("/");
  //               var name = name[2].split(".")
  //               var name = name[0].split("_")
  //               var name = name.join(' ')
  //               list.push({url: val, name: name});
  //             }
  //         });
  //     },
  //     error: function(xhr, error){
  //       console.log("error");
  //       console.log(xhr);
  //       console.log(error)
  //     }
  // });
  // return list;
}

function getRandomItem(list) {
  var randomItem = list[Math.floor(Math.random()*list.length)];
  return randomItem;
}

function postImage(item) {
  $("#kop").prepend("<img id='resize' src='"+ item.url +"'>");
  // $('#resize').css({
  //   'height': '10px',
  //   'width': '5px'
  // });

  $('#kop').each(function() {
    if ($(this).find('img').length) {
        $(this).html("<img src='"+ item.url +"'>");
    }
  });
}

function removeItem(list, item) {
  var index = list.indexOf(item);
  if (index > -1) {
    list.splice(index, 1);
  };
}

function buildQuiz(originalList) {
  document.getElementById("goodscore").innerHTML = "Goed :" + good;
  document.getElementById("badscore").innerHTML = "Fout :" + bad;

  var target = getRandomItem(originalList);
  postImage(target);
  buttonList = originalList.slice();
  removeItem(buttonList, target);
  console.log(target.name)
  console.log(originalList);
  console.log(buttonList);

  $($('.btn')[Math.floor(Math.random()*$('.btn').length)]).html(target.name);

  $('.btn').each(function(i, obj) {
    if(!(obj.innerHTML == target.name)){
      var itemm = getRandomItem(buttonList);
      obj.innerHTML = itemm.name;
      removeItem(buttonList, itemm)
    };
  });

  $('.btn').on('click', function () {
    if(!($(this).text() == target.name)) {
      bad += 1;
      $('#kop').append('<p align=center id="fout">FOUT!!!</p>');
      $('#fout').css({
        'font-size': '80px',
        'text-align': 'center'
      }).fadeIn("800").fadeOut("400", function() {
        $('.btn').off('click');
        $('.btn').each(function(i, obj) {
          obj.innerHTML = '';
        });
        buildQuiz(originalList);

      });
    }
    if($(this).text() == target.name) {
      good += 1;
      $('#kop').append('<p align=center id="netjes">Netjes!</p>');
      $('#netjes').css({
        'font-size': '80px',
        'text-align': 'center'
      }).fadeIn("800").fadeOut("400", function() {
        $('.btn').off('click');
        $('.btn').each(function(i, obj) {
          obj.innerHTML = '';
        });
        buildQuiz(originalList);
      });
    }

    //
    // buildQuiz(newTarget, originalList);
  })
}
