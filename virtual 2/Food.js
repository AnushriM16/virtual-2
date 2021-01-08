class Food {
    constructor(){
        this.foodStock=0;
        this.loadImage = ('Images/Milk.png');
    }
    updateFoodStock(foodStock){
        this.foodStock
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }
    getFoodStock(){
        return this.foodStock;
    }
    display(){
        varx = 80,y=100;
        imageMode(CENTER);

        if(this.FoodStock!=0){
            for(var i = 0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
            }
        }
    }
    
}