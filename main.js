


class Clock {
    constructor(template , id) {
        this.template = template;
        this.display = document.getElementById(id);
        this.msecs = 0;
        this.second = 0;
        this.minute = 0;
    }
    StopWatch() {


            this.msecs++;
     
            if (this.msecs == 100) {
                this.second++;
                this.msecs = 0;
            }
     
            if (this.second == 60) {
                this.minute++;
                this.second = 0;
            }
     
            if (this.minute == 60) {
                this.minute = 0;
                this.second = 0;
            }

            let countString = this.msecs ;
            let secString = this.second;
            let minString = this.minute;
     
            if (this.minute < 10) {
                minString = "0" + this.minute;
            }
     
            if (this.second < 10) {
                secString = "0" + this.second;
            }
     
            
            
            let output = this.template
                .replace('m', minString)
                .replace('s', secString)
                .replace('ms', countString)

            // console.log( output );
            this.display.innerHTML = output;
           

        
    }


    start() {

            
            this.StopWatch();
            this.timer = setInterval( () => {
                this.StopWatch();
            }, 10 )
        
    }

    stop() {
        clearInterval(this.timer);
    }
    reset(){
        this.stop();
        this.minute = 0;
        this.second = 0;
        this.msecs = 0;
        this.display.innerHTML = '00:00.00';
    }
}


let stopwatch = new Clock('m:s.ms',"clock-1")
let stopwatch2 = new Clock('m:s.ms',"clock-2")
let stopwatch3 = new Clock('m:s.ms',"clock-3")
let stopwatch4 = new Clock('m:s.ms',"clock-4")
let stopwatch5 = new Clock('m:s.ms',"clock-5")


// let StopAll = new Clock('m:s.ms',"clock-"+i)

// for (let i = 1; i < 6; i++){
//     document.getElementById("clock-"+i).innerHTML = "00:00:00";
// }




