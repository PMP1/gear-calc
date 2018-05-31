import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private _ownedGear: any[];
  private _equippedGear: any[];
  private collectionGear: any[] = new Array();
  totalAtttack = 0;
  totalDefence = 0;
  totalMagic = 0;
  totalHealth = 0;
  priority = "1";
  totalCollection = 0

  @Input()
  set equippedGear(gear: any[]) {

    this._equippedGear = gear;
    this.getCollectionGear();
  }
  get equippedGear(): any[] {
    return this._equippedGear;
  }

  @Input()
  set ownedGear(gear: any[]) {

    this._ownedGear = gear;
    this.getCollectionGear();
  }
  get ownedGear(): any[] {
    return this._ownedGear;
  }


  constructor() { }

  ngOnInit() {
  }

  getCollectionGear() {

    this.collectionGear = new Array();

    if (!this.equippedGear || !this.ownedGear) {
      return;
    }

    for (var i = 0; i < this.ownedGear.length; i++) {
      if (!this.equippedGear.find(x => x.id == this.ownedGear[i].id)) {
        this.ownedGear[i].required = false;
        this.ownedGear[i].collection = false;
        this.collectionGear.push(this.ownedGear[i]);
      }
    }

    for (var i = 0; i < this.equippedGear.length; i++) {

      for (var j = 0; j < this.equippedGear[i].bonuses.length; j++) {

        var bonus = this.equippedGear[i].bonuses[j];

        var gear = this.collectionGear.find(x => x.id == bonus.id);

        if (gear) {
          gear.required = true;
          gear.collection = true;
        }

      }

    }
    this.updateCollectionStats();
  }

  showRelated(item, show: boolean) {

    for (var i = 0; i < item.bonuses.length; i++) {

      var test = item.bonuses[i].id;

      this.collectionGear.find(x => x.id == item.bonuses[i].id)

      var gearItem = this.collectionGear.find(x => x.id == item.bonuses[i].id)

      if (gearItem) {
        gearItem.related = show;
        gearItem.badge = show == true ? item.bonuses[i].attr.substring(0, 1) : "";
      }

      var equippedItem = this.equippedGear.find(x => x.id == item.bonuses[i].id)

      if (equippedItem) {
        equippedItem.related = show;
        equippedItem.badge = show == true ? item.bonuses[i].attr.substring(0, 1) : "";
      }
    }
  }

  select(item) {
    item.collection = !item.collection;
    this.updateCollectionStats();
    console.log(item);
  }


  updateCollectionStats() {

    if (!this.collectionGear || !this.equippedGear) return;

    for (var i = 0; i < this.collectionGear.length; i++) {

      var gear = this.collectionGear[i];

      gear.totalAttack = 0;
      gear.totalDefence = 0;
      gear.totalMagic = 0;
      gear.totalHealth = 0;

      gear.attackBonus = 0;
      gear.defenceBonus = 0;
      gear.magicBonus = 0;

      //if (gear.collection == false) continue;

      for (var j = 0; j < gear.bonuses.length; j++) {

        var bonusItem = this.collectionGear.find(x => x.id == gear.bonuses[j].id);

        if (!bonusItem) {
          bonusItem = this.equippedGear.find(x => x.id == gear.bonuses[j].id);
        }

        if (bonusItem && bonusItem.collection == true && gear.bonuses[j].attr.toLowerCase() == "attack") {
          gear.attackBonus += gear.bonuses[j].bonus;
        }

        if (bonusItem && bonusItem.collection == true && gear.bonuses[j].attr.toLowerCase() == "defence") {
          gear.defenceBonus += gear.bonuses[j].bonus;
        }

        if (bonusItem && bonusItem.collection == true && gear.bonuses[j].attr.toLowerCase() == "magic") {
          gear.magicBonus += gear.bonuses[j].bonus;
        }
      }

      var levelBonus = 100;

      if (gear.level && gear.level > 0) {
        levelBonus += gear.level;
      }

      levelBonus = levelBonus / 100;

      gear.totalAttack = 0.1 * (gear.attack * levelBonus * (1 + (gear.attackBonus / 100)));
      gear.totalMagic = 0.1 * (gear.magic * levelBonus * (1 + (gear.magicBonus / 100)));
      gear.totalDefence = 0.1 * (gear.defence * levelBonus * (1 + (gear.defenceBonus / 100)));
      gear.totalHealth = 0.1 * (gear.health * levelBonus);
    }

    this.calculateBestFit();

  }

  priorityChange() {
    this.calculateBestFit();
  }

  calculateBestFit() {

    for (var i = 0; i < this.collectionGear.length; i++) {
      this.collectionGear[i].slot = "";
    }

    switch (this.priority) {

      case '1':
        this.calculateAttack();
        this.calculateDefence();
        this.calculateMagic();
        this.calculateHealth();
        this.sortAttack();
        break;
      case '2':
        this.calculateAttack();
        this.calculateDefence();
        this.calculateHealth();
        this.calculateMagic();
        this.sortAttack();
        break;
      case '3':
        this.calculateMagic();
        this.calculateAttack();
        this.calculateDefence();
        this.calculateHealth();
        this.sortMagic();
        break;
      case '4':
        this.calculateMagic();
        this.calculateAttack();
        this.calculateDefence();
        this.calculateHealth();
        this.sortMagic();
        break;

    }
    
    this.totalCollection = this.ownedGear.filter(x =>  x.collection == true).length;

    /*this.collectionGear.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });*/
    this.collectionGear.sort(function (a, b) {
      return b.totalMagic - a.totalMagic;
    });
console.log(this.collectionGear)

  }

  sortMagic() {
    this.collectionGear = this.collectionGear.sort(function (a, b) {
      return b.totalMagic - a.totalMagic;
    });
  }

  sortAttack() {
    this.collectionGear.sort(function (a, b) {
      return b.totalAttack - a.totalAttack;
    });
  }

  sortDefence() {
    this.collectionGear.sort(function (a, b) {
      return b.totalDefence - a.totalDefence;
    });
  }

  sortHealth() {
    this.collectionGear.sort(function (a, b) {
      return b.totalHealth - a.totalHealth;
    });
  }

  calculateAttack() {

    this.totalAtttack = 0;
    this.sortAttack();

    var j = 0;
    for (var i = 0; i < this.collectionGear.length; i++) {
      if (j == 5) break;

      if (this.collectionGear[i].slot == "" && this.collectionGear[i].collection == true) {

        this.collectionGear[i].slot = "attack";
        this.totalAtttack += this.collectionGear[i].totalAttack;
        j++;
      }
    }
  }

  calculateDefence() {

    this.totalDefence = 0;
    this.sortDefence()

    var j = 0;
    for (var i = 0; i < this.collectionGear.length; i++) {
      if (j == 5) break;

      if (this.collectionGear[i].slot == "" && this.collectionGear[i].collection == true) {
        this.collectionGear[i].slot = "defence";
        this.totalDefence += this.collectionGear[i].totalDefence;
        j++;
      }
    }
  }

  calculateMagic() {

    this.totalMagic = 0;
    this.sortMagic();

    var j = 0;
    for (var i = 0; i < this.collectionGear.length; i++) {
      if (j == 5) break;

      if (this.collectionGear[i].slot == "" && this.collectionGear[i].collection == true) {
        this.collectionGear[i].slot = "magic";
        this.totalMagic += this.collectionGear[i].totalMagic;
        console.log(this.totalMagic)
        j++;
      }
    }
  }

  calculateHealth() {

    this.totalHealth = 0;

    this.sortHealth();

    var j = 0;
    for (var i = 0; i < this.collectionGear.length; i++) {
      if (j == 5) break;

      if (this.collectionGear[i].slot == "" && this.collectionGear[i].collection == true) {
        this.collectionGear[i].slot = "health";
        this.totalHealth += this.collectionGear[i].totalHealth;
        j++;
      }
    }
  }

}