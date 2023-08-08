
    // write your code here
    let Image = function(title, artist, date){
        this.title = title;
        this.artist = artist;
        this.date = date;
        }
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
            if(!this.contains(newImage.title)) {
                this.list.push(newImage)
            };
            },
        show(){ 
                for (let image of this.list){    
                            console.log(`${image.title} (${image.artist}, ${image.date})`)                
                console.log("--------------------------------------------------------------");
                }
            
            },
        clear(){
            // Here we've implemented recursion
          this.list.pop();
          if(this.list.length>0) this.clear();
            }
        }
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1503)
    // -> Last Supper (Leonardo da Vinci, 1495)
    // -> The Starry Night (Vincent van Gogh, 1889)
    images.clear();
    images.show();