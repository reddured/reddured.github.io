'use strict';

const _Math = Math,
    random = _Math.random,
    cos = _Math.cos,
    sin = _Math.sin,
    abs = _Math.abs,
    max = _Math.max,
    min = _Math.min,
    PI = _Math.PI;

const NUM_ITEMS_PER_GRID = 48;

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstElementChild;
  }

function repeat(v, n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += v;
    }
    return s;
}

function pad(v, n) {
    const l = ('' + v).length;
    return l < n ? repeat('0', n - l) + v : v;
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = (prng_random() * currentIndex) << 0;
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function getGridItems(id) {

    const configItem = CONFIG[id];
    const imgDir = configItem.img_dir;
    const numCovers = configItem.num_covers;
    const offset = configItem.offset || 0;
    
    const items = [];

    for(let i = 0; i < NUM_ITEMS_PER_GRID; i++) {
        items.push(
            createElementFromHTML([
                '<div class="grid__item">',
                    '<div class="grid__item-inner">',
                        '<div class="grid__item-cover" style="background-image:url(' + (imgDir + pad(((i + offset)%numCovers)+1, 2)) + '.jpg)"></div>',
                    '</div>',
                '</div>'
            ].join(''))
        );
    }

    return items;
}

function initGrid(id, grid) {
    const gridItems = getGridItems(id);
    const gridWrap = grid.querySelector('.grid-wrap');
    gridWrap.append.apply(gridWrap, gridItems);
}


function getGridAnimation(grid) {
    
    // Child elements of grid
    const gridWrap = grid.querySelector('.grid-wrap');
    const gridItems = grid.querySelectorAll('.grid__item');
    const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
    
    var params = {

        // animation
        duration: 1,
        easeType: 'power2',

        // grid
        perspective: '2000px',
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,

        // item
        itemTranslateX: 0,
        itemTranslateY: 0,
        itemTranslateZ: 800,
        itemRotationX: 0,
        itemRotationY: 0,
        itemRotationZ: 0
    };

    /*var params = {

        // animation
        duration: 1,
        easeType: 'power2',

        // grid
        perspective: '1000px',
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotationX: 0,
        rotationY: -10,
        rotationZ: 0,

        // item
        itemTranslateX: 0,
        itemTranslateY: 0,
        itemTranslateZ: 0,
        itemRotationX: 0,
        itemRotationY: 0,
        itemRotationZ: 0
    };*/

    // animation
    var duration = params.duration;
    const easeType = params.easeType;
    const easeIn = gsap.parseEase("power1.inOut");
    const easeOut = gsap.parseEase("power1.inOut");

    // grid
    var translateX = params.translateX;
    var translateY = params.translateY;
    var translateZ = params.translateZ;
    var rotationX = params.rotationX;
    var rotationY = params.rotationY;
    var rotationZ = params.rotationZ;

    // item
    var itemTranslateX = params.itemTranslateX;
    var itemTranslateY = params.itemTranslateY;
    var itemTranslateZ = params.itemTranslateZ;
    var itemRotationX = params.itemRotationX;
    var itemRotationY = params.itemRotationY;
    var itemRotationZ = params.itemRotationZ;

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
        //repeat: -1,
        defaults: {
            //ease: 'none'
            ease: easeType+'.out'
        },
        /*scrollTrigger: {
            trigger: gridWrap,
            start: 'top bottom+=5%',
            end: 'bottom top-=5%',
            scrub: true
        }*/
    });

    // Set some CSS related style values
    //grid.style.transform = 'scale(0.15)';
    //grid.style.marginTop = '-1200px';
    grid.style.setProperty('--grid-width', '50%');
    grid.style.setProperty('--perspective', params.perspective);
    grid.style.setProperty('--grid-item-ratio', '0.63');
    grid.style.setProperty('--grid-columns', '3');
    grid.style.setProperty('--grid-gap', '1vw');
    
    var items = Array.from(gridItems)
    var firstItems = items.slice(0, items.length >> 1);
    var lastItems = items.slice(items.length >> 1);

    var numFirstItems = firstItems.length;
    var numLastItems = firstItems.length;

    timeline
        .set(gridWrap, {
            transformOrigin: '0% 50%',
            x: translateX,
            y: translateY,
            z: translateZ,
            rotationX: rotationX,
            rotationY: rotationY,
            rotationZ: rotationZ,
            xPercent: -75,
            yPercent: -50
        })
        .to(gridWrap, {
            duration: duration,
            //translateZ: -360
            yPercent: 0
        }, 0)
        .set(gridItems, {
            //transformOrigin: '50% 0%'
        })
        // first
        .fromTo(firstItems, {
            x: (index) => { return easeIn((index / numFirstItems)) * itemTranslateX; },
            z: (index) => { return easeIn((index / numFirstItems)) * itemTranslateZ; },
            //rotationX: (index) => { return easeIn((index / numFirstItems)) * itemRotationX; }
            //opacity: (index) => { return easeIn((index / numFirstItems)); }
        }, {
            duration: max(0, duration),
            ease: easeType+'.inOut',
            x: (index) => { return easeOut(1 - (index / numFirstItems)) * itemTranslateX; },
            z: (index) => { return easeOut(1 - (index / numFirstItems)) * itemTranslateZ; },
            //rotationX: (index) => { return easeOut(1 - (index / numFirstItems)) * itemRotationX; },
            //opacity: (index) => { return easeOut(1 - (index / numFirstItems)); },
            //stagger: { from: '0', each: min(1, max(0, duration-1))/numFirstItems }
        }, 0)
        // last
        .fromTo(lastItems, {
            x: (index) => { return easeOut(1 - (index / numLastItems)) * itemTranslateX; },
            z: (index) => { return easeOut(1 - (index / numLastItems)) * itemTranslateZ; },
            //rotationX: (index) => { return easeOut(1 - (index / numLastItems)) * itemRotationX; },
            //opacity: (index) => { return easeOut(1 - (index / numLastItems)); }
        }, {
            duration: max(0, duration),
            ease: easeType+'.inOut',
            x: (index) => { return easeIn((index / numLastItems)) * itemTranslateX; },
            z: (index) => { return easeIn((index / numLastItems)) * itemTranslateZ; },
            //rotationX: (index) => { return easeIn((index / numLastItems)) * itemRotationX; },
            //opacity: (index) => { return easeIn((index / numLastItems)); },
            //stagger: { from: 'end', each: min(1, max(0, duration-1))/numLastItems }
        }, 0)
        // first
        .fromTo(firstItems, {
            rotationX: (index) => { return easeIn((index / numFirstItems)) * itemRotationX; },
            rotationY: (index) => { return easeIn((index / numFirstItems)) * itemRotationY; },
            //filter: (index) => { return 'brightness(' + (easeIn((index / numFirstItems)) * 100 << 0) + '%)'; },
            //opacity: (index) => { return easeIn((index / numFirstItems)); }
        }, {
            duration: max(0, duration-1),
            ease: easeType+'.inOut',
            rotationX: (index) => { return easeOut(1 - (index / numFirstItems)) * itemRotationX; },
            rotationY: (index) => { return easeOut(1 - (index / numFirstItems)) * itemRotationY; },
            //filter: (index) => { return 'brightness(' + (easeIn(1 - (index / numFirstItems)) * 100 << 0) + '%)'; },
            //opacity: (index) => { return easeOut(1 - (index / numFirstItems)); },
            //stagger: { from: 'end', each: 0.0416 }
        }, 0)
        // last
        .fromTo(lastItems, {
            rotationX: (index) => { return easeOut(1 - (index / numLastItems)) * itemRotationX; },
            rotationY: (index) => { return easeOut(1 - (index / numLastItems)) * itemRotationY; },
            //filter: (index) => { return 'brightness(' + (easeIn(1 - (index / numLastItems)) * 100 << 0) + '%)'; },
            //opacity: (index) => { return easeOut(1 - (index / numLastItems)); }
        }, {
            duration: max(0, duration-1),
            ease: easeType+'.inOut',
            rotationX: (index) => { return easeIn((index / numLastItems)) * itemRotationX; },
            rotationY: (index) => { return easeIn((index / numLastItems)) * itemRotationY; },
            //filter: (index) => { return 'brightness(' + (easeIn((index / numLastItems)) * 100 << 0) + '%)'; },
            //opacity: (index) => { return easeIn((index / numLastItems));},
            //stagger: { from: '0', each: 0.0416 }
        }, 0)
        
    

    return timeline;
}

function init() {

    var container = document.getElementsByClassName('container')[0];
    
    // init animations
    var wrappers = Array.from(document.getElementsByClassName('wrapper'));
    wrappers.forEach(function(node, i) {

        var grid = node.getElementsByClassName('grid')[0];
        var animation = getGridAnimation(grid)
       
        node.addEventListener('mouseenter', function(timelines) {
            var isLeft = node.classList.contains('wrapper-left');
            node.classList.add("is-hover");
            container.classList.add("is-hover-" + (isLeft ? 'left' : 'right'));
            animation && animation.play(0);
        });

        node.addEventListener('mouseleave', function(timelines) {
            var isLeft = node.classList.contains('wrapper-left');
            node.classList.remove("is-hover");
            container.classList.remove("is-hover-" + (isLeft ? 'left' : 'right'));
            animation && animation.reverse();
        });
    });

    // init parallax
    let rect = container.getBoundingClientRect();
    var mouse = {x: 0, y: 0, moved: false, leave: false};

    function updateRect() {
        rect = container.getBoundingClientRect();
    }
    
    function updateElement(target, movementX, movementY, speed, easing) {
        gsap.to(target, {
            duration: speed,
            ease:easing,
            x: (mouse.x - rect.width / 2) / rect.width * movementX,
            y: (mouse.y - rect.height / 2) / rect.height * movementY
        });
    }

    container.addEventListener('mousemove', function(e) {
        mouse.moved = true;
        mouse.leave = false;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    container.addEventListener('mouseleave', function(e) {
        mouse.moved = true;
        mouse.leave = true;
    });

    gsap.ticker.add(function() {
        if (mouse.moved) {

            wrappers.forEach(function(wrapper) {
                const parallaxEl = wrapper.getElementsByClassName('grid__item');
                const items = Array.from(parallaxEl);
                const numCols = 3;
                const numRows = items.length / 3 << 0;
                items.forEach((element, i) => {
                    const row = i / 3 << 0;
                    const col = i % 3;
                    const movementX = mouse.leave ? 0 : -(col - (numCols >> 1)) * 20;
                    const movementY = mouse.leave ? 0 : (row - (numRows >> 1)) * 20;
                    const easing = mouse.leave ? "elastic.out" : "power2";
                    const speed = mouse.leave ? 1 : 3.5;
                    updateElement(element, movementX, movementY, speed, easing);
                })
            })
        }
        mouse.moved = false;
    });

    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
}

function initGrids() {
    
    const ids = Object.keys(CONFIG);
    ids.forEach(function(id, i){
        const wrapper = document.getElementById(id);
        const grid = wrapper.getElementsByClassName('grid')[0];
        initGrid(id, grid);
    });

    //return Promise.resolve();
    return preloadImages('.grid__item-inner');
}

initGrids().then(() => {
    setTimeout(function(){
        document.body.classList.remove('loading');
        init();
    }, 1000);
});