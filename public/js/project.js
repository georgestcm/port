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
var $kmer = [];


$smallJobs.on('click',(e)=>{
  e.preventDefault()
  $('div.main_page div.project_display').css({
    transition:'1s',
    display:"block"
  })
  for(let i= 0; i < $smallJobs.length; i++){
    $imgsArray.push($smallJobs[i])
  }
 $('body').css({
   overflow:"hidden"
 })
  console.log("this is smallJobs button")
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
