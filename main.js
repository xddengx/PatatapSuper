window.onload = function(){

    let canvas = this.document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* --------------- SUPER FORMULA --------------- */

    // variables for drawing super shape
    let radius;
    let maxPoints;
    let startX = Math.sin(0);
    let startY = Math.cos(0);
    // let a = 1, b = 1;
    // let m = 5, n1 = 1, n2 = 1, n3 = 1;
    let a, b, m, n1, n2, n3;
    let incValue;
    var patSuper;
    const centerX = Math.random() * canvas.width;
    const centerY = Math.random() * canvas.height;


    var superShapes = [];
    /*var sShape = {
        radius: radius,
        maxPoints: maxPoints,
        a:a,
        b:b,
        m:m,
        n1:n1,
        n2:n2,
        n3:n3,
        centerX: centerX,
        centerY: centerY,
        incValue: incValue,
        alpha: 1
    }*/


    const superShape = function(phi,sShape){
        
        let t1 = Math.cos(sShape.m * phi/4)/sShape.a;
        t1 = Math.abs(t1);
        t1 = Math.pow(t1, sShape.n2);

        let t2 = Math.sin(m * phi/4)/sShape.b;
        t2 = Math.abs(t2);
        t2 = Math.pow(t2,sShape.n3);

        let r = Math.pow(t1 + t2, 1/sShape.n1);
        r = 1 / r;
        let x = r * Math.cos(phi) * radius;
        let y = r * Math.sin(phi) * radius;

        return[x,y];
    }

    function draw(){
        // console.log('drawing')
        requestAnimationFrame(draw);
        // random position on canvas

        fadeAway();
    
    clearCanvas();

        for( let sShape of superShapes ) {
            const startPoint = superShape(0, sShape);

            ctx.beginPath();
            ctx.moveTo(sShape.centerX + startPoint[0], sShape.centerY + startPoint[1]);
            const increment = (Math.PI * sShape.incValue)/sShape.maxPoints;
        
            for(let i = 0; i < sShape.maxPoints; i++){
                let [x,y] = superShape(i * increment, sShape);
                ctx.lineTo(sShape.centerX + x, sShape.centerY + y);
        
                // let x = Math.sin(i * increment) * radius;
                // let y = Math.cos(i * increment) * radius;
                // ctx.lineTo(centerX + x, centerY + y);
            }

            ctx.strokeStyle = sShape.color;
            ctx.lineWidth= 2;
            ctx.stroke();

            //superShapes.push()

            
            // console.log(sShape.radius, sShape.a, sShape.b, sShape.n1 );
        }
    }

    function fadeAway(){
        //requestAnimationFrame(fadeAway);
        superShapes.forEach(function(s)
        {
            s.alpha -= .01
            //var fade = 'rgba(' + s.red + ',' + s.g + ',' + s.b + ', ' + 1 + ')'  
            //s.fill = fade
             
            if(s.alpha < 0)
            {
                var index = superShapes.indexOf(s)
                superShapes.splice(index,1)
            }
        })

        // console.log(sShape.alpha);
    }

    // function fadeAway(){
    //     requestAnimationFrame(fadeAway);
    //     ctx.fillStyle = 'rgba(0, 0, 0, 0.001)';
    //     ctx.fillRect(0, 0,  window.innerWidth, window.innerHeight);
    // }

    /* --------------- PATATAP  --------------- */
    let soundFile = '../sound/'
    
    // dictionary for letters. 
    // contains audio and values changing the superformula

    let values = {
        incValue: 50,
        radius: 50,
        maxPoints: 512
    }

     letters = {
        a: { soundfile:'boomKick.wav', a:1, b:1, m:7, n1:1, n2:1.70, n3: 1.70, incValue: 50, radius: 50, maxPoints: 512},
        b: { soundfile: 'acmeSiren.wav', a:3, b:4, m:3, n1:1.5, n2:0.70, n3: 2.70, incValue: 50, radius: 50, maxPoints: 512},
        c: { soundfile: 'clap.wav', a:0.2, b:0.76, m:20, n1:5, n2:-1.70, n3: 3.70, incValue: 50, radius: 50, maxPoints: 512},
        d: { soundfile: 'laser.wav', a:0.45, b:.22, m:5, n1:11, n2:15, n3: 17.70, incValue: 50, radius: 50, maxPoints: 512},
        e: { soundfile: 'poweron.wav', a:0.88, b:3, m:9, n1:83, n2:33.2, n3: 40, incValue: 50, radius: 50, maxPoints: 512},
        f: { soundfile: 'whoosh.wav', a:1, b:1, m:7, n1:1, n2:25.7, n3:-13.4, incValue: 2, radius: 50, maxPoints: 512},
        g: { soundfile: 'bubbles.wav', a:1, b:1, m:7, n1:1, n2:17.00, n3: 3, incValue: 2, radius: 50, maxPoints: 512},
        h: { soundfile: 'ebeeps.wav', a:1, b:1, m:7, n1:-16.6, n2:50.00, n3: 30, incValue: 2, radius: 50, maxPoints: 512},
        i: { soundfile: 'jingle.wav', a:1, b:1, m:7, n1:1, n2:1.7, n3: 21.7, incValue: 14, radius: 50, maxPoints: 512},
        j: { soundfile: 'persian.wav', a:1, b:1, m:-22, n1:-5.8, n2:4, n3: 22.4, incValue: 2, radius: 50, maxPoints: 512},
        k: { soundfile: 'robotic.wav', a:1, b:96.5, m:8.7, n1:67.2, n2:51, n3: 41.2, incValue: 41, radius: 50, maxPoints: 512},
        l: { soundfile: 'snare.wav', a:1, b:96.5, m:8.7, n1:67.2, n2:51, n3: 5.5, incValue: 41, radius: 50, maxPoints: 512},
        m: { soundfile: 'vinyl.wav', a:1, b:-6.9, m:-22, n1:-5.8, n2:4, n3: 22.4, incValue: 2, radius: 50, maxPoints: 512},
        n: { soundfile: 'rev.wav', a:1, b:96.5, m:8.7, n1:67.2, n2:51, n3: 5.5, incValue: 22, radius: 50, maxPoints: 512},
        o: { soundfile: 'magicBells.wav', a:1, b:1, m:-10.8, n1:28.2, n2: 28.2, n3: -53.1, incValue: 18, radius: 32, maxPoints: 512},
        p: { soundfile: 'kickSnare.wav', a:1, b:1, m:2.2, n1:12, n2: 47.7, n3: -53.1, incValue: 18, radius: 32, maxPoints: 512},
        q: { soundfile: 'glassShatter.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: 50, maxPoints: 512},
        r: { soundfile: 'jingles.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius:50, maxPoints: 512},
        s: { soundfile: 'iceSpell.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: 50, maxPoints: 512},
        // t: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // u: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // v: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // w: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // x: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // y: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        // z: { soundfile: 'kickSnare.wav', a:1.60, b:1.2, m:4, n1:23, n2:4.70, n3: 3.70, incValue: values.incValue, radius: values.radius, maxPoints: 512},
        

        
    }

    // Function to detect which key is pressed and draw super shape
     window.addEventListener("keypress", function(e){
        // console.log(e);
        let letter = letters[ e.key ]
        // console.log(letter);

        // Play audio
        playAudio(letter.soundfile);
        a = letter.a
        b = letter.b
        m = letter.m
        n1 = letter.n1
        n2 = letter.n2
        n3 = letter.n3
        incValue = values.incValue
        radius = values.radius
        maxPoints = values.maxPoints
        
        // console.log(a,b,m,n1,n2,n3);

        for( let sShape of superShapes ) {
        var red = Math.round(Math.random()*200+55);
        var green = Math.round(Math.random()*200+55);
        var blue=Math.round(Math.random()*200+55);
        // var color='rgb('+red+','+green+','+blue+')';
        // OR	if you want to change alpha
        var color='rgba('+red+','+green+','+blue+', '+ sShape.alpha+')'; 
        }
        
        // creates an object and assigns the object all the letter attributes and adding extra attributes
        superShapes.push( Object.assign({}, letter, { alpha:1, centerX: Math.random() * canvas.width, 
            centerY: Math.random() * canvas.height, color: color }) )
        
        // UNDO HERE
        //draw();
        //fadeAway();
     })

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Function to play audio files
    function playAudio(audioFile){
        var audio = new Audio("sound/" + audioFile);
        audio.play()
    }

    var gui = new dat.GUI();
    gui.add(values, 'incValue', 0, 450);
    gui.add(values, 'radius', 0, 150);
    gui.add(values, 'maxPoints', 0, 700);

    draw()
}