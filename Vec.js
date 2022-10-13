class Vec{
    constructor(x=0,y=0){
      this.x = x;
      this.y = y;
    }
  
    copy(pt){
      this.x = pt.x;
      this.y = pt.y;
  
      return this;
    }
  
    clone(){
      return new this.constructor().copy( this );
    }
  
    add(pt){
      this.x += pt.x;
      this.y += pt.y;
  
      return this;
    }
  
    sub(pt){
      this.x -= pt.x;
      this.y -= pt.y;
  
      return this;
    }
  
    // console.log(`distance from a to c is ${a.distanceTo(c).toFixed(2)}`); -> first define delta as clone of Vec(0,0 *default values*) then use the method .sup which subtracts the last Vec, at this stage delta = (-4, -3) *because c is at (4,3)*
    // return Math.sqrt( delta.x*delta.x + delta.y*delta.y ); -> delta.x * delta.x = (+) delta.y * delta.y = 9 -> we pass it into Math.sqrt(16 + 9) (square root) -> returns 5 /
    distanceTo(pt){
      const delta = this.clone().sub(pt);
  
      return Math.sqrt( delta.x*delta.x + delta.y*delta.y );
    }
  
    angle() {
        const theta = Math.atan2( - this.y, - this.x ) + Math.PI;
  
          return theta;
      }
  
    // console.log(`angle between b and c is ${b.anbleBetween(c).toFixed(2)}`); (kat /_ ) code creates 2 angles const theta1 = this.angle() angle method creates 2 angles at Vec class -> it returns angle between vector and positive x axis (theta = angle a), for (theta1 = angle b) which is in line with x asis the value is 0 
    // for angle b we call this.angle(); const theta = Math.atan2( - 0, - 4 ) + Math.PI = -pi + pi = 0
    // for angle c we call pt.angle(); const theta = Math.atan2( - 3, - 4) + Math.PI = -2.5 + pi = 0.6435
    // A full revolution (360 degrees) = 2pi
    //Math.antan2(x,y) returns values in the range -pi to pi, to make sure we get positive values we add "-"" to parameters as - and - is + -> then we add pi to returned value and that returns values in the range 0 to 2pi
  
    // now that we have 2 angles theta1 = 0 and theta2 = 0.6435, we get angle between them by theta1 - theta2 and we use Math.abs method to make negative value a positive value -> then we * by 180 and / to convert the radium value to degrees
    angleBetween(pt){
      const theta1 = this.angle();
      const theta2 = pt.angle();
  
      return Math.abs(theta1 - theta2) * 180 / Math.PI;
    }
  }
  
  export{Vec};