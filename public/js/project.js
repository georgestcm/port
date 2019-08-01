$(function(){
var $smallJobs = $('a.proOne')
var $kmer = $('a.proTwo')
var $joshua = $('a.proThree')
var $church = $('a.proFour')
$('i.project_display_exit').on('click',(e)=>{
  $('div.main_page div.project_display').css({
    transition:'1s',
    display:"none"
  })
  $('body').css({
    overflow:"unset"
  })
})

var $imgsArray = [];
var $smalljobsImg = [
  'images/smallJ/1.png',
  'images/smallJ/2.png',
  'images/smallJ/3.png',
  'images/smallJ/4.png',
  'images/smallJ/5.png',
  'images/smallJ/6.png',
  'images/smallJ/7.png',
  'images/smallJ/8.png'
];
var $churchImgs = [];
var $joshuaImgs = [];
var $kmerImgs = [];
var count = 0;
$(".project_display_right").on('click',(e)=>{
if(count ===7){
  count = 0;
} else {
  ++count;
}
$('#project_pics').attr("src",$imgsArray[count])
})

//above is the code for the right click
//////////////
/////////////
////////////
$(".project_display_left").on('click',(e)=>{
  if(count ===0){
    count = 7;
  } else {
    --count;
  }
  $('#project_pics').attr("src",$imgsArray[count])
})
//above is the code for the left click
//////////////
/////////////
////////////


$smallJobs.on('click',(e)=>{
  e.preventDefault()
  $('div.main_page div.project_display').css({
    transition:'1s',
    display:"block"
  })

  for(let i= 0; i < $smalljobsImg.length; i++){
    $imgsArray.push($smalljobsImg[i])
  }
 $('body').css({
   overflow:"hidden"
 })

$('#project_pics').attr("src",$imgsArray[count])
})




 $kmer.on('click',(e)=>{
  e.preventDefault()
  console.log("this is kmer button")
})



$joshua.on('click',(e)=>{
  e.preventDefault()
  console.log("this is joshua button")
})


$church.on('click',(e)=>{
 e.preventDefault()
 console.log("this is church button")
})

})
