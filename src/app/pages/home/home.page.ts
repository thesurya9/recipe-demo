import { Component, OnInit } from '@angular/core'

import { constants } from 'src/app/constant'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recipeList: any = []
  mainData: any = []
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.mainData = constants
    this.recipeList = this.mainData
    console.log(this.recipeList)
  }

  filterData(e: any) {
    console.log(e)
    if (e.detail.value.length > 3) {
      this.recipeList = this.mainData.filter((f: any) =>
        f.name.toLowerCase().includes(e.detail.value.toLowerCase()),
      )
    } else {
      this.recipeList = this.mainData
    }
  }
}
