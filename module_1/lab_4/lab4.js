
    // write your code here

//Define the Image constructor
let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
    }

//Define the images object
let images = {
    list:[],
    contains(title){
        for(let image of this.list){
        if(image.title==title) return true;
            }
            return false;
        },
    add(title, artist, date){
        let newImage = new Image(title, artist, date);
        this.list.push(newImage);
        },
    show(){ 
            for (let image of this.list){    
                        console.log(`${image.title} (${image.artist}, ${image.date})`)                
            console.log("--------------------------------------------------------------");
            }
        
        },
    clear(){
      this.list.pop();
      if(this.list.length>0) this.clear();

        }
    }

//Add the edit() and delete() methods without changing the object
images.edit = function(title, artist, date){
        for (let image of this.list){
            if (title==image.title){
                image.artist = artist;
                image.date = date;
                }
            }
        };
images.delete = function(title){
        for (let i=0; i<this.list.length;i++){
            if (title==this.list[i].title){
                this.list.splice(i,1)
                }
            }
        }
//Add the show()
Image.prototype.show = function(){
    console.log(`${this.title} (${this.artist}, ${this.date})`);
    console.log("--------------------------------------------------------------");
    };
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
// images.show();
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
// images.show();
images.delete('The Last Supper');
images.show();
    
    