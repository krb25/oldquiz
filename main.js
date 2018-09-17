var good = 0;
var bad = 0;

$(document).ready(function() {

  var originalList = getList();
  var target = getRandomItem(originalList)
  buildQuiz(target, originalList);
});

function getList() {
  var list = []
  $.ajax({
      url : '/fotos',
      async: false,
      success: function (data) {
          $(data).find("a").attr("href", function (i, val) {
              if( val.match(/\.(jpe?g|PNG|gif)$/) ) {
                var name = val.split("/");
                var name = name[2].split(".")
                var name = name[0].split("_")
                var name = name.join(' ')
                list.push({url: val, name: name});
                //$("#kop").prepend("<img src='"+ val +"'>");

              }
          });
      }
  });
  return list;
}

function getRandomItem(list) {
  var randomItem = list[Math.floor(Math.random()*list.length)];
  return randomItem;
}

function postImage(item) {
  $("#kop").prepend("<img src='"+ item.url +"'>");

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

function buildQuiz(target, originalList) {
  document.getElementById("goodscore").innerHTML = "Goed :" + good;
  document.getElementById("badscore").innerHTML = "Fout :" + bad;

  postImage(target);
  removeItem(originalList, target);
  buttonList = originalList.slice();
  console.log(target.name)

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
        var newTarget = getRandomItem(originalList)
        $('.btn').off('click');
        buildQuiz(newTarget, originalList);

      });
    }
    if($(this).text() == target.name) {
      good += 1;
      $('#kop').append('<p align=center id="netjes">Netjes!</p>');
      $('#netjes').css({
        'font-size': '80px',
        'text-align': 'center'
      }).fadeIn("800").fadeOut("400", function() {
        var newTarget = getRandomItem(originalList)
        $('.btn').off('click');
        buildQuiz(newTarget, originalList);

      });
    }

    //
    // buildQuiz(newTarget, originalList);
  })
}
