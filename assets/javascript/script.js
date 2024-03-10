const slider = document.getElementById('slider-navbar');
const navbar = document.getElementById('navbar');
const logoone = document.getElementById('logoone');
const logotwo = document.getElementById('logotwo');
const hamberger = document.getElementById('hamberger');
const hamone = document.getElementById('hamone');
const hamtwo = document.getElementById('hamtwo');
const disp = document.getElementById('disp');

const links = document.getElementById('links');

let count = 0;
let scrollPosition = 0;
;
hamberger.addEventListener('click', function() {
    if (count % 2 === 0) 
    {
        console.log(scrollPosition)
        scrollPosition = window.scrollY;
        slider.style.zIndex = '0';
        slider.style.transform = 'translateY(0px)';

        setTimeout(function(){
            disp.style.opacity = 0;
            disp.style.transition = 'opacity 0.4s ease';
        },700)

        disp.style.display = 'none'

        slider.style.transition = 'transform 0.9s ease';
        setTimeout(function() {
            slider.querySelectorAll('a').forEach(function(tag) {
                tag.style.transition = 'opacity 0.5s ease-in-out';
                tag.style.opacity = '1';
                logoone.style.color = 'white';
                logotwo.style.color = 'white';
                logoone.style.transition = 'color 0.5s ease';
                logotwo.style.transition = 'color 0.5s ease';
                hamone.style.backgroundColor = 'white';
                hamtwo.style.backgroundColor = 'white';
                hamone.style.transition = 'color 0.5s ease';
                hamtwo.style.transition = 'color 0.5s ease';
            });
        }, 800);

        hamone.style.transform = 'rotate(-45deg)';
        hamone.style.position = 'relative';
        hamone.style.top = '5px';
        hamtwo.style.transform = 'rotate(45deg)';
        hamtwo.style.position = 'relative';
        hamtwo.style.top = '-5px';
    } 
    else {
            setTimeout(function() {
                slider.querySelectorAll('a').forEach(function(tag) {
                    tag.style.opacity = '0';
                    tag.style.transition = 'opacity 0.5s ease-in-out';
                    disp.style.display = 'block';
                });
            }, 200);

            setTimeout(function() {
                slider.style.transform = 'translateY(-100vh)';
                slider.style.transition = 'transform 1s ease';
            }, 800);
            slider.style.zIndex = '5';

            setTimeout(function(){
                disp.style.opacity = 1;
                disp.style.transition = 'opacity 0.4s ease';
            },700)
            
            window.scrollTo(0, scrollPosition);
            const animateScroll = () => {
            const distance = scrollPosition - window.scrollY;
            const step = distance / 2;
            if (Math.abs(distance) > 1) {
                window.scrollBy(0, step);
                requestAnimationFrame(animateScroll);
            } else {
                window.scrollTo(0, scrollPosition);
                }
            };


            requestAnimationFrame(animateScroll);

            setTimeout(function() {
                
                hamone.style.backgroundColor = 'black';
                hamtwo.style.backgroundColor = 'black';
                logoone.style.color = 'black';
                logotwo.style.color = 'black';
                logoone.style.transition = 'color 0.5s ease';
                logotwo.style.transition = 'color 0.5s ease';
                hamone.style.transition = 'color 0.5s ease';
                hamtwo.style.transition = 'color 0.5s ease';
            }, 1440);

            hamone.style.transform = 'rotate(0deg)';
            hamone.style.top = '0px';
            hamtwo.style.top = '0px';
            hamtwo.style.transform = 'rotate(0deg)';
    }
    count++;
});
