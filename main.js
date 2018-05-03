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
    let a, b, m, n1, n2, n3;
    let incValue;
    var patSuper;
    const centerX = Math.random() * canvas.width;
    const centerY = Math.random() * canvas.height;


    var superShapes = [];

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
        requestAnimationFrame(draw);
        fadeAway();
        clearCanvas();

        for( let sShape of superShapes ) {
            const startPoint = superShape(0, sShape);

            ctx.beginPath();
            ctx.moveTo(sShape.centerX + startPoint[0], sShape.centerY + startPoint[1]);
            const increment = (Math.PI * incValue)/maxPoints;
        
            for(let i = 0; i < maxPoints; i++){
                let [x,y] = superShape(i * increment, sShape);
                ctx.lineTo(sShape.centerX + x, sShape.centerY + y);
            }

            ctx.strokeStyle = sShape.color;
            ctx.lineWidth= 2;
            ctx.stroke();
        }
    }

    function fadeAway(){
        superShapes.forEach(function(s)
        {
            s.alpha -= .01             
            if(s.alpha < 0)
            {
                var index = superShapes.indexOf(s)
                superShapes.splice(index,1)
            }
        })
    }

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
        a: { soundfile:'boomKick.wav', a:1, b:1, m:7, n1:1, n2:1.7, n3: 8.7, incValue: 20, radius: 50, maxPoints: 512},
        b: { soundfile: 'acmeSiren.wav', a:3, b:4, m:3, n1:1.5, n2:0.70, n3: 2.70, incValue: 50, radius: 50, maxPoints: 512},
        c: { soundfile: 'clap.wav', a:0.2, b:0.76, m:20, n1:5, n2:-1.70, n3: 3.70, incValue: 50, radius: 50, maxPoints: 512},
        d: { soundfile: 'laser.wav', a:0.45, b:.22, m:5, n1:11, n2:15, n3: 17.70, incValue: 50, radius: 50, maxPoints: 512},
        e: { soundfile: 'poweron.wav', a:0.88, b:3, m:9, n1:83, n2:33.2, n3: 40, incValue: 50, radius: 50, maxPoints: 512},
        f: { soundfile: 'whoosh.wav', a:1, b:1, m:7, n1:1, n2:25.7, n3:-13.4, incValue: 2, radius: 50, maxPoints: 512},
        g: { soundfile: 'bubbles.wav', a:1, b:1, m:7, n1:1, n2:17.00, n3: 3, incValue: 2, radius: 50, maxPoints: 512},
        h: { soundfile: 'ebeeps.wav', a:1, b:1, m:7, n1:-16.6, n2:50.00, n3: 30, incValue: 2, radius: 50, maxPoints: 512},
        i: { soundfile: 'jingle.wav', a:1, b:1, m:7, n1:1, n2:1.7, n3: 21.7, incValue: 14, radius: 50, maxPoints: 512},
        j: { soundfile: 'persian.wav', a:1, b:1, m:41, n1:38, n2:-20.6, n3: 1.7, incValue: 20, radius: 50, maxPoints: 512},
        k: { soundfile: 'robotic.wav', a:1, b:96.5, m:8.7, n1:67.2, n2:51, n3: 41.2, incValue: 41, radius: 50, maxPoints: 512},
        l: { soundfile: 'snare.wav', a:1, b:1, m:38, n1:64, n2:-17.3, n3: 60.7, incValue: 20, radius: 50, maxPoints: 249},
        m: { soundfile: 'vinyl.wav', a:1, b:-6.9, m:-22, n1:-5.8, n2:4, n3: 22.4, incValue: 2, radius: 50, maxPoints: 512},
        n: { soundfile: 'rev.wav', a:1, b:-17.3, m:34.7, n1:34.7, n2:41.2, n3: 5.5, incValue: 50, radius: 50, maxPoints: 512},
        o: { soundfile: 'magicBells.wav', a:1, b:1, m:-10.8, n1:28.2, n2: 28.2, n3: -53.1, incValue: 18, radius: 32, maxPoints: 512},
        p: { soundfile: 'kickSnare.wav', a:1, b:1, m:2.2, n1:12, n2: 47.7, n3: -53.1, incValue: 18, radius: 32, maxPoints: 512},
        q: { soundfile: 'glassShatter.wav', a:1, b:1, m:-43.3, n1:1, n2:1.7, n3: -10.8, incValue: 37, radius: 32, maxPoints: 332},
        r: { soundfile: 'jingles.wav', a:1, b:1, m:9, n1:64, n2:-49.8, n3: 60.7, incValue: 20, radius: 50, maxPoints: 408},
        s: { soundfile: 'iceSpell.wav', a: 2.2, b:1, m:7, n1:1, n2:1.7, n3: 1.7, incValue: 20, radius: 31, maxPoints: 158},
        t: { soundfile: 'fusionFlash.wav', a:1, b:1, m:7, n1:1, n2:1.70, n3: 25, incValue: 102, radius: 47, maxPoints: 568},
        u: { soundfile: 'robot.wav', a:25, b:-36.8, m: 57.5, n1: 60.7, n2: 21.7, n3: 15.2, incValue: 37, radius: 71, maxPoints: 522},   
        v: { soundfile: 'slurp.wav', a:1, b:1, m: 7, n1: 1, n2: 1.7, n3: -46.6, incValue: 79, radius: 73, maxPoints: 150}, 
        w: { soundfile: 'drums.wav', a:1, b:1, m:7, n1:1, n2:1.7, n3: 25, incValue: 102, radius: 47, maxPoints: 568},
        x: { soundfile: 'zoopid.wav', a:1, b:1, m:38, n1:31.5, n2:99.8, n3: 67.2, incValue: 26, radius: 78, maxPoints: 257},
        y: { soundfile: 'funkyElectric.wav', a:1, b:5.5, m:7, n1:1, n2:1.70, n3: 1.70, incValue: 20, radius: 21, maxPoints: 105},
        z: { soundfile: 'strongRock.wav', a:73.7, b:51, m:-46.6, n1:73.7, n2:34.7, n3: 21.7, incValue: 60, radius: 34, maxPoints: 378},
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
        incValue = letter.incValue
        radius = letter.radius
        maxPoints = letter.maxPoints
        
        // console.log(a,b,m,n1,n2,n3);

        for( let sShape of superShapes ) {
        var red = Math.round(Math.random()*200+55);
        var green = Math.round(Math.random()*200+55);
        var blue=Math.round(Math.random()*200+55);
        // var color='rgb('+red+','+green+','+blue+')';
        var color='rgba('+red+','+green+','+blue+', '+ sShape.alpha+')'; 
        }
        
        // creates an object and assigns the object all the letter attributes and adding extra attributes
        superShapes.push( Object.assign({}, letter, { alpha:1, centerX: Math.random() * canvas.width, 
            centerY: Math.random() * canvas.height, color: color }) )
     })

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Function to play audio files
    function playAudio(audioFile){
        var audio = new Audio("sound/" + audioFile);
        audio.play()
    }

    // var gui = new dat.GUI();
    // gui.add(values, 'incValue', 1, 450);
    // gui.add(values, 'radius', 1, 150);
    // gui.add(values, 'maxPoints', 1, 700);
    draw()
}