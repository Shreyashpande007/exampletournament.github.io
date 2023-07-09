var banner = document.querySelector('.banner');
var gifs = [
  'https://techcrunch.com/wp-content/uploads/2018/02/giphy.gif',
  'https://media.tenor.com/Y1ILKnGn-egAAAAd/cod-m-season11.gif',
  'https://thumbs.gfycat.com/UnselfishExaltedCoyote-max-1mb.gif',
  'https://thumbs.gfycat.com/SlimyInsignificantDolphin-max-1mb.gif',
  'https://thumbs.gfycat.com/SpecificTautIndigobunting-max-1mb.gif',
  'https://i.pinimg.com/originals/62/9c/14/629c146fa875160e7a8cef608a5806f3.gif',
  'https://i.pinimg.com/originals/4d/36/7c/4d367cfb28bee7aca41cc94780e3ccd5.gif'
];
var currentGifIndex = 0;

function changeBackgroundImage() {
  banner.style.backgroundImage = 'url(' + gifs[currentGifIndex] + ')';
  currentGifIndex = (currentGifIndex + 1) % gifs.length;
}

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);
