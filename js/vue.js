var app = new Vue({
    el: '#app',
    data: {
        time : ["0","0","0","0","0","0"],
        count : 3600,
        active : true
    },
    beforeCreate: function () {
        setInterval( () => {this.timer() }, 1000)
    },
    methods : {
        timer :  function timer() {
    
             
        this.count = this.count - 1;
    if (this.count <= -1 ) {
        clearInterval(this.timer);
        return;
    }else{

    var seconds = this.count % 60;
    var minutes = Math.floor(this.count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;


    if(hours <= 9 ){
        this.time[0] = "0";
        this.time[1] = hours.toString()[0]
    }else{
        this.time[0] = hours.toString()[0]
        this.time[1] = hours.toString()[1]
    }

    if(minutes <= 9 ){
        this.time[2] = "0";
        this.time[3] = minutes.toString()[0]
    }else{
        this.time[2] = minutes.toString()[0]
        this.time[3] = minutes.toString()[1]
    }

    if(seconds<= 9 ){
        this.time[4] = "0";
        this.time[5] = seconds.toString()[0]
    }else{
        this.time[4] = seconds.toString()[0]
        this.time[5] = seconds.toString()[1]
    }
}
}
    }
})
