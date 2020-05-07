$(function () {
  $('.top__text').textillate({
    loop: true,               // ループ繰り返し
    minDisplayTime: 3000,     // アニメーションの間隔時間
    // initialDelay: 1000,    // アニメーション開始までの遅延時間
    autoStart: true,          // アニメーションの自動スタート
    
    in:{
      effect: 'rollIn',       // エフェクトの指定
      delayScale: 1.5,        // 遅延時間の指数
      delay: 100,             // 文字ごとの遅延時間
      // sync: false,         // アニメーションをすべての文字に同時に適用
      shuffle: false,         // 文字のランダム表示
    },  

    out:{
      effect: 'bounceOutRight',  
      delayScale: 1.5,  
      delay: 100,  
      shuffle: false,
      reverse: true,
    }
  });
})


$(function () {
  $('#content').textillate({
    loop: true,
    minDisplayTime: 3000,     
    autoStart: true, 
    
    in:{
      effect: 'bounceInDown', 
      delayScale: 1.5, 
      delay: 100, 
      shuffle: false, 
    },  

    out:{
      effect: 'bounceOutUp',  
      delayScale: 1.5,  
      delay: 100,  
      shuffle: false,
      reverse: true,
    }
  });
})