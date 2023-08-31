
//class sheklinde yazdiqda propertyleri teyin edib, sonra contructorda beraberleshdiririk.
// export class TodoItem
// {
//   description: string;
//   action: string;

//   constructor(description: string, action:  string){
//     this.description =description,
//     this.action = action
//   }

// }


//class sheklinde yazdiqda contructor hokmen olmalidir ve ichinde teyin etmek lazimdir. propertyleri teyin etmedikde bir basha contructorun icherisinde public veya private deyib teyin ede bilerik
// export class TodoItem {
//   constructor(public description: string,public action: string){
//      this.description =description,
//      this.action = action
//   }
// }



//class sheklinde yazmayib bir basha interface teyin etikde contructora ehtoyyac yoxdur, sadece propertyleri ve typelerini qeyd etmek kifayetdir. component.tsde propertylere value teyin edirik.
export interface TodoItem {
    description: string;
    action: boolean;
}

