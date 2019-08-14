jQuery(function($) {
	
	
	var transitionAnimationObject;
	
	var invisibleImg = 'img/invisible.gif';
	
	var win = window;
	var $win = $(win);
	var $body = $('body');
	
	// set ink animation
	var $transition = $('.transition-anim-wrapper');
	var $transitionAnim = $('.anim', $transition);
	var $modal = $('.video-modal');
	var $trailerBtn = $('.trailer-btn');
	
	
	var $app = $('.app');
	var $loading = $('.loading');
	
	var $header = $('.header');
	var $headerContent = $('.content', $header);
	var $headerContainer = $('.container', $header);
	
	// FatNav
    $.fatNav({
		appendContainer: $headerContainer,
		onToggle: function(b){
			toggleLocked(b);
		}
	});
	
	// scrollbar offset hack
	/*var scrollbarWidth = (function getScrollBarWidth () {
	  var inner = document.createElement('p');
	  inner.style.width = "100%";
	  inner.style.height = "200px";

	  var outer = document.createElement('div');
	  outer.style.position = "absolute";
	  outer.style.top = "0px";
	  outer.style.left = "0px";
	  outer.style.visibility = "hidden";
	  outer.style.width = "200px";
	  outer.style.height = "150px";
	  outer.style.overflow = "hidden";
	  outer.appendChild (inner);

	  document.body.appendChild (outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 == w2) w2 = outer.clientWidth;

	  document.body.removeChild (outer);

	  return (w1 - w2);
	})();
	
	var sbOffsetHackElements = (
		$modal
		.add($app)
		.add($('.fat-nav ul'))
		.add($('.title-wrapper', $header))
		.addClass('sb-offset-hack')
	);
	sbOffsetHackElements.css({
		paddingRight: scrollbarWidth
	});*/
	
	
	// Sticky header
	var stickyOffset = 30;
	var isSticky = false;
	var refreshSticky = function(){
		var shouldStick = $win.scrollTop() > stickyOffset;
		if(shouldStick != isSticky) {
			$headerContent.toggleClass('sticky', shouldStick);
			isSticky = shouldStick;
		}
	}
	$win.on('scroll', refreshSticky);
	refreshSticky();
	
	// whether to use animations (for debug to simulate old browser)
	var useAnimations = true;
	var noCssAnimations = false;
	
	// preset animations
	var animations = {
		flourish_5: {
			gif: 'img/flourish_5.gif',
			sprite: 'img/flourish_5_sprite-min.png',
			image: 'img/flourish_5_static.png',
			size: [394, 560],
			responsive: false
		},
		flourish_5_alt: {
			gif: 'img/flourish_5_alt.gif',
			sprite: 'img/flourish_5_alt_sprite-min.png',
			image: 'img/flourish_5_alt_static.png',
			size: [394, 560],
			responsive: false
		},
		flourish_7: {
			gif: 'img/flourish_7.gif',
			sprite: 'img/flourish_7_sprite-min.png',
			image: 'img/flourish_7_static.png',
			size: [395, 480],
			responsive: false
		},
		flourish_7_alt: {
			gif: 'img/flourish_7_alt.gif',
			sprite: 'img/flourish_7_alt_sprite-min.png',
			image: 'img/flourish_7_alt_static.png',
			size: [395, 480],
			responsive: false
		},
		ink: {
			sprite: 'img/ink-min.png',
			size: [640, 360],
			responsive: true
		}
	};
		
	// detect css animation support
	var supportCssAnimations = !noCssAnimations && (function(){
		var animation = false,
			animationstring = 'animation',
			keyframeprefix = '',
			domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
			pfx  = '',
			elm = document.createElement('div');

		if( elm.style.animationName !== undefined ) { animation = true; }    

		if( animation === false ) {
		  for( var i = 0; i < domPrefixes.length; i++ ) {
			if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
			  pfx = domPrefixes[ i ];
			  animationstring = pfx + 'Animation';
			  keyframeprefix = '-' + pfx.toLowerCase() + '-';
			  animation = true;
			  break;
			}
		  }
		}
		
		return !!animation;
	})();
		
	// Set initial state
	$body.toggleClass('no-cssanimations', !supportCssAnimations);
	$body.toggleClass('no-animations', !useAnimations);
	
	// set animation on specified element
	var setAnimation = function(el, animation, index){
		
		// use sprite animation if a sprite is specified
		var useSprite = supportCssAnimations && !!animation.sprite,
			responsive = animation.responsive,
			size = animation.size,
			width = size[0],
			height = size[1],
			animEl = $('.anim', el),
			played = false,
			img;
		
		// if we are not using animations or if we have no animation supported (sprite or gif)
		if(!useAnimations || (!useSprite && !animation.gif)) {
			
			// if we have a fallback image
			if(animation.image) {
				// use image as background-image on anim element
				animEl.css({
					background: 'url("'+animation.image+'") no-repeat center center'
				});
			}
			
			// noopify control methods
			var play = $.noop;
			var stop = $.noop;
			var reset = $.noop;
		}
		// if we have an animation
		else {
			// add custom animation class
			animEl.addClass((useSprite ? 'sprite' : 'gif') + '-animation');
			
			// when using sprite
			if(useSprite && responsive) {
				
				var container = el,// layer container
					frameProportion = width/height, //png frame aspect ratio
					frames = 25, //number of png frames
					
					setLayerDimensions = function() {
						
						var containerWidth = el.width(),
							containerHeight = el.height(),
							layerHeight, layerWidth;

						if( containerWidth/containerHeight > frameProportion ) {
							layerWidth = containerWidth;
							layerHeight = layerWidth/frameProportion;
						} else {
							layerHeight = containerHeight*1.2;
							layerWidth = layerHeight*frameProportion;
						}
						
						animEl.css({
							'width': layerWidth*frames+'px',
							'height': layerHeight+'px'
						});
					};
				
				//set animEl dimensions
				setLayerDimensions();
				
				// add resize handler
				addResizeHandler(setLayerDimensions)
			}
			
			// play animation
			var play = function(reverse, delay){
				
				// default delay to zero
				delay || (delay = 0);
				
				// if already played
				if(played) {
					// stop animation
					stop();
				}
				
				// using sprite
				if(useSprite) {
					
					animEl.css({
						backgroundImage: 'url('+animation.sprite+')'
					});
					
					setTimeout(function(){
						el
						.toggleClass('opening', !reverse)
						.toggleClass('closing', !!reverse)
						.addClass('visible');
					}, delay);
				} 
				// using GIF
				else {
					
					img || (img = $('<img />'));
					
					// show with a delay
					setTimeout(function(){
							
						// BUG : on chrome when loading the image from cache, a gif won't replay twice, event when loaded in a different image
						// to prevent this, we use unique urls for each animation based on animation index.
						img.attr('src', animation.gif+'?'+index);
						
						// append to anim element
						animEl.append(img);
						
						// make visible
						el.addClass('visible');
						
					}, delay);
				}
				
				// enable played flag
				played = true;
			}
			
			// stop animation
			var stop = function(){
				
				el.removeClass('visible');
				
				// using sprite
				if(useSprite) {
					el.removeClass('opening closing');
				} 
				// using GIF
				else {
					img.attr('src', invisibleImg);
				}
				
				// disable played flag
				played = false;
			}
			
			// reset animation
			var reset = function(cb){
				
				el.addClass('reset');
				
				// set delay to the duration of our reset animation, zero if not supported
				var delay = supportCssAnimations ? 1200 : 0;
			
				// once reset animation is complete
				setTimeout(function(){
					
					// stop animation to reinitialize
					stop();
					
					// remove reset animation
					el.removeClass('reset');
					
					// call callback function if specified
					cb && cb();
					
				}, delay);
			}
		}
		
		return {
			play: play,
			stop: stop,
			reset: reset
		}
	}
	
	// only used by sprite animation
	var resizeHandlers = [],
		resize = false;
	
	// add a resize handler to call
	var addResizeHandler = function(handler) {
		resizeHandlers.push(handler);
	}
	
	// on resize callback function
	var onWindowResize = function(){
		
		// call all resize handlers
		var i = resizeHandlers.length;
		while(i--) {
			resizeHandlers[i]();
		}
		
		// disable resize flag
		resize = false;
	}
	
	
	// set anim wrapper animation
	var initAnimWrapper = function(index, el) {
		
		// get anim element and id
		var $el = $(el);
		var id = $el.attr('rel');
		
		// if animation exists
		if(id && animations[id]) {
			
			var animationObject = setAnimation($el, animations[id], index);
			
			// check if anim wrapper is located in app
			var isAppAnim = $el.closest('.app').length;
			
			// set control event bindings
			$el
			.bind('play', function(e, data){
				animationObject.play(data.reverse, data.delay);
			})
			.bind('stop', function(){
				animationObject.stop();
			})
			.bind('reset', function(){
				animationObject.reset();
			});
			
			// if anim wrapper belongs to app
			if(isAppAnim) {
				// bind to 'wow' event
				$el.bind('wow', function(){
					// if intro app or intro video is not complete yet, we add a significant to delay to make sure animation is visible from user.
					// Note : by default we use a small delay to prevent animation from being played to quickly when scrolling with wow
					animationObject.play(false, hasIntroApp || hasIntroVideo ? 1200 : 250);
				});
			}
		}
	}
	
	// init animation wrappers
	var $animWrappers = $('.gfx-anim-wrapper');
	$animWrappers.each(initAnimWrapper);
	
	// if supporting css animtions
	if(supportCssAnimations) {
		
		// set ink animation
		transitionAnimationObject = setAnimation($transition, animations.ink);
	}
	
	// if we have resize handlers
	if(resizeHandlers.length) {
		
		// bind to window resize
		$(window).on('resize', function(){
			
			// if not already resizing
			if( !resize ) {
				
				// enable resize flag
				resize = true;
				
				// call resize handlers 
				(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(onWindowResize);
			}
		});
	}
	
	
	// preload an animation sprite / gif
	var preloadAnimation = function(animation){
		
		var dfd = $.Deferred();
		var image = new Image();
		
		image.onload = function(){
			image.onload = null;
			// force browser to free up resource by replacing src with a tiny non empty src
			image.src = invisibleImg;
			image = null;
			dfd.resolve();
		};
		
		image.onerror = function(){
			dfd.reject();
		}
		
		image.src = animation.sprite || animation.gif;
		
		return dfd;
	}
	
	// Execute a callback only after all deferreds have been resolved
	// The main difference with $.when is that $.when stops when it receives the first rejected promise. 
	// This extension treats all successes and failures as progress events. After all the promises have completed, 
	// the global promise is resolved if there were no errors. Otherwise the global promise is rejected.
	// from : https://github.com/soundcloud/jquery-whenall
	var whenAll = function (deferreds) {
		
		if (deferreds && deferreds.length) {
			
			var deferred = $.Deferred(),
				toResolve = deferreds.length,
				someFailed = false,
				always = function () {
					if (!--toResolve) {
					  deferred[someFailed ? 'reject' : 'resolve']();
					}
				},
				fail = function () {
					someFailed = true;
				};
				
			deferreds.forEach(function (d) {
				d.fail(fail).always(always);
			});
			
			return deferred;
		} 
		else {
			return $.Deferred().resolve();
		}
	}
	
	// init app
	var initApp = function(){
		
		// show page content
		$app.addClass('show');
		
		// create wow instance with live disabled
		var wow = new WOW({
			live: false
		});
		
		// init wow
		wow.init();
	}
	
	// show app
	var showApp = function(cb){
		
		// if transition animation object is available (meaning that css animation is enabled and supported)
		if(transitionAnimationObject) {
			// start transition animation
			transitionAnimationObject.play();
		}
		
		// set delay to the duration of our transition animation, zero if not supported
		var delay = transitionAnimationObject ? 1000 : 0;
		
		// once transition is complete (immediate if we are not using sprite animation)
		setTimeout(function(){
			
			// init app
			initApp();
			
			// if transition object is available
			if(transitionAnimationObject) {
				
				// reset transition object
				transitionAnimationObject.reset(function(){
					// disable intro capp flag
					hasIntroApp = false;
				});
			} 
			// not using transition object
			else {
				// disable intro app flag
				hasIntroApp = false;
			}
			
			// call callback if specified
			cb && cb();
			
		}, delay);
	}
	
	var toggleLocked = function(b) {
		
		// update body overflow
		$body.toggleClass('locked', b).toggleClass('unlocked', !b);
	}
	
	// show / remove video
	var $video;
	
	// remove video element
	var removeVideoElement = function(){
		
		// if a video element is cached
		if($video) {
			
			// remove video element
			$video.remove();
			
			// nullify
			$video = null;
		}
	}
	
	// show video
	var showVideo = function(id, cb){
		
		// make sure previous video was removed
		removeVideoElement();
		
		// remove forced visibility hidden on sub elements to prevent conflicts with Wow
		$modal.removeClass('force-visibility-hidden');
		
		// if transition animation object is available (meaning that css animation is enabled and supported)
		if(transitionAnimationObject) {
			
			// start transition animation
			transitionAnimationObject.play();
		}
		
		// complete callback
		var complete = function(){
			
			// lock
			toggleLocked(true);
			
			// update page content
			$app.toggleClass('invisible', true);
			
			// create youtube iframe from id
			$video = $('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>');
			
			// append to modal video wrapper
			$('.video-wrapper', $modal).append($video);
			
			// open modal window
			$modal.addClass('visible');
			
			// if we are using animations
			if(useAnimations) {
				// play modal anim wrapper animation
				$('.gfx-anim-wrapper', $modal).trigger('play', {
					delay: 800
				});
			}
			
			// call callback function if specified
			cb && cb();
		}
		
		// if using animations
		if(useAnimations && supportCssAnimations) {
			
			// once transition is complete (immediate if we are not using sprite animation)
			// bind css transition complete event
			$transitionAnim.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				
				// unbind css transition complete event
				$transitionAnim.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
				
				// call complete callback
				complete();
			});
		} 
		// no animation
		else {
			// call complete callback immediately
			complete();
		}
			
		//}, delay);
	}
	
	// set trailer btn behaviour 
	$trailerBtn.on('click', function(event){
		
		event.preventDefault();
		
		var $btn = $(this),
			videoId = $btn.attr('rel');
		
		// if we have a video id
		if(videoId) {
			// show modal video with specified youtube id
			showVideo(videoId);
		}
	});

	//close modal window
	$modal.on('click', '.video-modal-close', function(event){
		
		event.preventDefault();
		
		if(hasIntroApp) {
			$app.addClass('show');
		}
		
		// make sure previous video was removed
		removeVideoElement();
		
		// update page content
		$app.toggleClass('invisible', false);
			
		// close modal window
		$modal.removeClass('visible');
		
		// if transition animation object is available (meaning that css animation is enabled and supported)
		if(transitionAnimationObject) {
			// add delay to prevent flickering
			setTimeout(function(){
				// start reverse transition animation
				transitionAnimationObject.play(true);
			}, 100);
		}
		
		// complete callback
		var complete = function(){
			
			// if we are using animations
			if(useAnimations) {
				// stop modal anim wrapper animation
				$('.gfx-anim-wrapper', $modal).trigger('stop');
			}
			
			// force visibility hidden on sub elements to prevent conflicts with Wow
			$modal.addClass('force-visibility-hidden');
				
			// unlock body
			toggleLocked(false);
			
			// disable intro video flag
			hasIntroVideo = false;
		}
		
		// if transition animation object is available
		if(transitionAnimationObject) {
			
			// bind css transition complete event
			$transitionAnim.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				
				// unbind css transition complete event
				$transitionAnim.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
				
				// stop transition to reinitialize
				transitionAnimationObject.stop();
				
				// call complete callback
				complete();
			});
			
			// if we haven't played intro (this is the case when showing a video at start)
			// Note : do this AFTER initializing transition to prevent flickering BUG
			if(hasIntroApp) {
				
				// init app
				initApp();
				
				// disable intro app flag
				hasIntroApp = false;
			}
			
		}
		else {
			
			// if we haven't played intro (this is the case when showing a video at start)
			if(hasIntroApp) {
				
				// init app
				initApp();
				
				// disable intro app flag
				hasIntroApp = false;
			}
			
			// call complete callback immediately
			complete();
		}
		
	});
	
	// prevent touch body scroll on modal
	$modal.on('touchmove', function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	
	
	
	// start app intro
	var introVideoId = win.introVideoId;
	var hasIntroApp = true;
	var hasIntroVideo = !!introVideoId;
	var startIntro = function() {
		
		var complete = function(){
			// remove loading
			$loading.remove();
			$loading = null;
		}
		
		setTimeout(function(){
			
			// if an intro video is specified
			if(introVideoId) {
				// show intro video
				showVideo(introVideoId, complete);
			}
			// no intro video specified
			else {
				// show app
				showApp(complete);
			}
		}, 1000);
	}
	
	// when using animations
	if(useAnimations) {
		
		// preload all animations
		var deferreds = [];
		$.each(animations, function(key, animation) {
			deferreds.push(preloadAnimation(animation));
		});
		
		// start intro once all animations have been loaded
		whenAll(deferreds).done(startIntro);
	}
	// not using animations
	else {
		// start intro immediately
		startIntro();
	}
});