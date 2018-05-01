window.onload = function(){

    let canvas = this.document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* --------------- SUPER FORMULA --------------- */

    // variables for drawing super shape
    let radius = 50;
    let maxPoints = 512;
    let startX = Math.sin(0);
    let startY = Math.cos(0);
    // let a = 1, b = 1;
    // let m = 5, n1 = 1, n2 = 1, n3 = 1;
    let a;
    let b;
    let m;
    let n1;
    let n2;
    let n3;

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
        const increment = (Math.PI * 2)/maxPoints;
    
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

     letters = {
        a: { soundfile:'boomKick.wav', a:1, b:1, m:7, n1:1, n2:1.70, n3: 1.70 },
        b: { soundfile: 'acmeSiren.wav', a:3, b:4, m:3, n1:1.5, n2:0.70, n3: 2.70 },
        c: { soundfile: 'clap.wav', a:0.2, b:0.76, m:20, n1:5, n2:-1.70, n3: 3.70 },
        d: { soundfile: 'laser.wav', a:0.45, b:.22, m:5, n1:11, n2:15, n3: 17.70 },
        e: { soundfile: 'poweron.wav', a:0.88, b:3, m:9, n1:83, n2:33.2, n3: 40 },
        f: { soundfile: 'whoosh.wav', a:0.60, b:0.2, m:4, n1:33, n2:4.70, n3: 3.70 }
     }

    // Function to detect which key is pressed and draw super shape
     window.addEventListener("keypress", function(e){
        // console.log(e);
        let letter = letters[ e.key ]
        console.log(letter);

        // Play audio
        playAudio(letter.soundfile);
        a = letter.a
        b = letter.b
        m = letter.m
        n1 = letter.n1
        n2 = letter.n2
        n3 = letter.n3
        
        console.log(a,b,m,n1,n2,n3);

        draw();
     })

    // Function to play audio files
    function playAudio(audioFile){
        var audio = new Audio("sound/" + audioFile);
        audio.play()
    }
}