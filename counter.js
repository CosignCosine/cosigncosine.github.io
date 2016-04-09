var l = 0;
$.getJSON("websiteconfig.json", function(data){
  l = data.hits;
})
$.post("websiteconfig.json", {'hits', (l + 1)}, function(data,status,xhr){void(0);}, 'json');
$(".counter").each(function(){
  $(this).html(l);
})
