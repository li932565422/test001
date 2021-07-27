$(window).load(function () {
    // 文物旋转
    document.onclick = function(){
        controls.autoRotate = false
    }
    // 拆解按钮
    var rotate = true
    $('.ww-btn1').click(function () {
        if (rotate) {
            new TWEEN.Tween(mesh1.position)
                .to({ y: -3.5 }, 1000).easing(TWEEN.Easing.Linear.None).start();
            new TWEEN.Tween(mesh2.position)
                .to({ y: -0.5 }, 1000).easing(TWEEN.Easing.Linear.None).start();
           
         
            rotate = !rotate
        } else {
            new TWEEN.Tween(mesh1.position).to({  x:0,y: -2 }, 1000).easing(TWEEN.Easing.Linear.None).onComplete(function () {}).start()
            new TWEEN.Tween(mesh2.position).to({  x:0,y: -2}, 1000).easing(TWEEN.Easing.Linear.None).onComplete(function () {}).start()
           
            rotate = !rotate
        }
    })

})