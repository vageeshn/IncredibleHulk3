class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("");
        this.button = createButton('START GAME');
        
        this.reset = createButton('reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.html("ENTER USERNAME:");
        this.title.position(displayWidth/2-110,displayHeight/2-150);
        
        this.input.position(displayWidth/2-110,displayHeight/2-80);
        this.input.class("customInput");
        this.button.position(displayWidth/2-55,displayHeight/2);
        this.button.class("customButton");
        this.reset.position(displayWidth-100,20);
    }
}