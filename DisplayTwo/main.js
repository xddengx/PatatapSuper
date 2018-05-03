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
    let a, b, m, n1, n2, n3, inc;
    let osc = 0;
    var patSuper;

    const superShape = function(phi){
        
        let t1 = Math.cos(m * phi/4)/a;
        t1 = Math.abs(t1);
        t1 = Math.pow(t1, n2);

        let t2 = Math.sin(m * phi/4)/b;
        t2 = Math.abs(t2);
        t2 = Math.pow(t2,n3);

        let r = Math.pow(t1 + t2, 1/n1);
        r = 1 / r;
        let x = r * Math.cos(phi) * radius;
        let y = r * Math.sin(phi) * radius;

        return[x,y];
    }

    function draw(){
        // random position on canvas
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;

        const startPoint = superShape(0);

        ctx.beginPath();
        ctx.moveTo(centerX + startPoint[0], centerY + startPoint[1]);
        const increment = (Math.PI * inc)/maxPoints;
    
        for(let i = 0; i < maxPoints; i++){
            let [x,y] = superShape(i * increment);
            ctx.lineTo(centerX + x, centerY + y);
    
            // let x = Math.sin(i * increment) * radius;
            // let y = Math.cos(i * increment) * radius;
            // ctx.lineTo(centerX + x, centerY + y);
        }
        ctx.strokeStyle = getRandomColor();
        ctx.lineWidth= 2;
        ctx.stroke();
    }

    /* --------------- PATATAP  --------------- */
    let soundFile = '../sound/'
    
    // dictionary for letters. 
    // contains audio and values changing the superformula

    osc += 0.01
    let values = {
        a: 1,
        b: 1,
        m: 7,
        n1: 1,
        n2: 1.70,
        n3: 1.70,
        inc: 20,
        radius: 50,
        maxPoints: 512
    }

     letters = {
        a: { soundfile:'boomKick.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3, inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
        b: { soundfile: 'acmeSiren.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3, inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
        c: { soundfile: 'clap.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3,inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
        d: { soundfile: 'laser.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3,inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
        e: { soundfile: 'poweron.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3,inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
        f: { soundfile: 'whoosh.wav', a: values.a, b: values.b, m: values.m, n1: values.n1, n2: values.n2, n3: values.n3,inc: values.inc, radius: values.radius, maxPoints: values.maxPoints},
     }

    // Function to detect which key is pressed and draw super shape
     window.addEventListener("keypress", function(e){
        // console.log(e);
        let letter = letters[ e.key ]
        console.log(letter);

        // Play audio
        playAudio(letter.soundfile);
        a =  values.a
        b =  values.b
        m =  values.m
        n1 = values.n1
        n2 = values.n2
        n3 = values.n3
        inc = values.inc
        radius = values.radius
        maxPoints = values.maxPoints
        
        // UNDO HERE
        draw();
     })

    // Function to play audio files
    function playAudio(audioFile){
        var audio = new Audio("sound/" + audioFile);
        audio.play()
    }

    var gui = new dat.GUI();
    gui.add(values, 'a', -150, 150);
    gui.add(values, 'b', -150, 150);
    gui.add(values, 'm', -150, 150);
    gui.add(values, 'n1', -150, 150);
    gui.add(values, 'n2', -150, 150);
    gui.add(values, 'n3', -150, 150);
    gui.add(values, 'inc', 0, 350);
    gui.add(values, 'radius', 0, 150);
    gui.add(values, 'maxPoints', 0, 700);

    // console.log(a,b,m,n1,n2,n3);
}