import { Injectable } from '@angular/core';

@Injectable()
export class GearService {

  constructor() { }

  getGear(): any {

    return [
      {
        "id": 1,
        "type": "unknown",
        "name": "unknown",
        "health": 100,
        "attack": 100,
        "defence": 100,
        "magic": 100,
        "bonuses": [
          {
            "id": 1,
            "attr": "none",
            "bonus": 20
          },
          {
            "id": 1,
            "attr": "none",
            "bonus": 20
          },
          {
            "id": 1,
            "attr": "none",
            "bonus": 20
          }
        ]
      },
      {
        "id": 2,
        "type": "helmet",
        "name": "Ice Crown",
        "health": 1330,
        "attack": 1139,
        "defence": 1036,
        "magic": 1350,
        "bonuses": [{
          "id": 29,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 23,
          "attr": "Magic",
          "bonus": 23
        },
        {
          "id": 8,
          "attr": "Defence",
          "bonus": 20
        }]
      },
      {
        "id": 3,
        "type": "helmet",
        "name": "Red Devel",
        "health": 1330,
        "attack": 1365,
        "defence": 949,
        "magic": 1010,
        "bonuses": [{
          "id": 19,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 34,
          "attr": "Defence",
          "bonus": 22
        },
        {
          "id": 9,
          "attr": "Attack",
          "bonus": 23
        }]
      },
      {
        "id": 4,
        "type": "helmet",
        "name": "Turban of Divination",
        "health": 1530,
        "attack": 990,
        "defence": 1008,
        "magic": 1224,
        "bonuses": [{
          "id": 13,
          "attr": "Magic",
          "bonus": 20
        },
        {
          "id": 26,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 10,
          "attr": "Magic",
          "bonus": 21
        }]
      },
      {
        "id": 5,
        "type": "helmet",
        "name": "Hunter Horns",
        "health": 1240,
        "attack": 1380,
        "defence": 1064,
        "magic": 1005,
        "bonuses": [{
          "id": 32,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 8,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 1,
          "attr": "Attack",
          "bonus": 22
        }]
      },
      {
        "id": 6,
        "type": "Armor",
        "name": "Cursed Iceberg Armor",
        "health": 1500,
        "attack": 990,
        "defence": 1125,
        "magic": 1296,
        "bonuses": [{
          "id": 12,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 19,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 31,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 7,
        "type": "Armor",
        "name": "Hellgate Armour",
        "health": 1650,
        "attack": 1386,
        "defence": 962,
        "magic": 1095,
        "bonuses": [{
          "id": 33,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 29,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 37,
          "attr": "Attack",
          "bonus": 23
        }]
      },
      {
        "id": 8,
        "type": "Armor",
        "name": "The Alchemist Armor",
        "health": 1550,
        "attack": 1030,
        "defence": 1050,
        "magic": 1241,
        "bonuses": [{
          "id": 25,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 5,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 22,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 9,
        "type": "Armor",
        "name": "Torture Tyrant Armor",
        "health": 1386,
        "attack": 1380,
        "defence": 955,
        "magic": 1050,
        "bonuses": [{
          "id": 37,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 13,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 10,
        "type": "Armor",
        "name": "Soulsucker Armor",
        "health": 1326,
        "attack": 952,
        "defence": 1140,
        "magic": 1275,
        "bonuses": [{
          "id": 1,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 1,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 11,
        "type": "Gloves",
        "name": "Claws of Blizzard",
        "health": 1440,
        "attack": 1020,
        "defence": 1036,
        "magic": 1225,
        "bonuses": [{
          "id": 24,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 33,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 21,
          "attr": "Defence",
          "bonus": 20
        }]
      },
      {
        "id": 12,
        "type": "Gloves",
        "name": "Devils grip gloves",
        "health": 1430,
        "attack": 1407,
        "defence": 1008,
        "magic": 1022,
        "bonuses": [{
          "id": 6,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 29,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 37,
          "attr": "Attack",
          "bonus": 23
        }]
      },
      {
        "id": 13,
        "type": "Gloves",
        "name": "Prophecy Gloves",
        "health": 1575,
        "attack": 990,
        "defence": 975,
        "magic": 1212,
        "bonuses": [{
          "id": 4,
          "attr": "Magic",
          "bonus": 21
        },
        {
          "id": 9,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 20
        }]
      },
      {
        "id": 14,
        "type": "Gloves",
        "name": "Gloves of Brutality",
        "health": 1360,
        "attack": 1170,
        "defence": 1036,
        "magic": 1075,
        "bonuses": [{
          "id": 26,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 31,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 15,
          "attr": "Defence",
          "bonus": 20
        }]
      },
      {
        "id": 15,
        "type": "Gloves",
        "name": "Minstral Grips",
        "health": 1710,
        "attack": 1122,
        "defence": 1184,
        "magic": 700,
        "bonuses": [{
          "id": 1,
          "attr": "none",
          "bonus": 20
        },
        {
          "id": 1,
          "attr": "none",
          "bonus": 20
        },
        {
          "id": 1,
          "attr": "none",
          "bonus": 20
        }]
      },
      {
        "id": 16,
        "type": "Gloves",
        "name": "Grips of Delirium",
        "health": 1092,
        "attack": 975,
        "defence": 1064,
        "magic": 1241,
        "bonuses": [{
          "id": 22,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 1,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "Magic",
          "bonus": 21
        }]
      },
      {
        "id": 17,
        "type": "Boots",
        "name": "Basalt Stompers",
        "health": 1650,
        "attack": 1474,
        "defence": 1125,
        "magic": 1155,
        "bonuses": [{
          "id": 46,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 6,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 34,
          "attr": "Attack",
          "bonus": 23
        }]
      },
      {
        "id": 18,
        "type": "Boots",
        "name": "Path Seekers",
        "health": 1760,
        "attack": 1139,
        "defence": 1125,
        "magic": 1296,
        "bonuses": [{
          "id": 40,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 23,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 28,
          "attr": "Magic",
          "bonus": 22
        }]
      },
      {
        "id": 19,
        "type": "Boots",
        "name": "Glacier Stompers",
        "health": 1605,
        "attack": 1088,
        "defence": 1008,
        "magic": 1224,
        "bonuses": [{
          "id": 3,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 6,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 36,
          "attr": "Magic",
          "bonus": 22
        }]
      },
      {
        "id": 20,
        "type": "Boots",
        "name": "Diabolic Stompers",
        "health": 1344,
        "attack": 1428,
        "defence": 975,
        "magic": 1095,
        "bonuses": [{
          "id": 28,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 12,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 26,
          "attr": "Attack",
          "bonus": 22
        }]
      },
      {
        "id": 21,
        "type": "Boots",
        "name": "Boots of Destiny",
        "health": 1560,
        "attack": 975,
        "defence": 1022,
        "magic": 1224,
        "bonuses": [{
          "id": 31,
          "attr": "Magic",
          "bonus": 21
        },
        {
          "id": 36,
          "attr": "Magic",
          "bonus": 21
        },
        {
          "id": 16,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 22,
        "type": "Boots",
        "name": "Spectre Walkers",
        "health": 1183,
        "attack": 953,
        "defence": 1110,
        "magic": 1207,
        "bonuses": [{
          "id": 1,
          "attr": "Defence",
          "bonus": 22
        },
        {
          "id": 16,
          "attr": "Magic",
          "bonus": 23
        },
        {
          "id": 1,
          "attr": "Magic",
          "bonus": 22
        }]
      },
      {
        "id": 23,
        "type": "Pendant",
        "name": "Ice Tear Pendant",
        "health": 1575,
        "attack": 1035,
        "defence": 1125,
        "magic": 1240,
        "bonuses": [{
          "id": 34,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 2,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 13,
          "attr": "Defence",
          "bonus": 20
        }]
      },
      {
        "id": 24,
        "type": "Pendant",
        "name": "Hearth Of Hell Pendant",
        "health": 1512,
        "attack": 1292,
        "defence": 936,
        "magic": 1035,
        "bonuses": [{
          "id": 11,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 28,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 4,
          "attr": "Attack",
          "bonus": 23
        }]
      },
      {
        "id": 25,
        "type": "Pendant",
        "name": "Arcane Potion Pendant",
        "health": 1380,
        "attack": 1045,
        "defence": 975,
        "magic": 1295,
        "bonuses": [{
          "id": 8,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 37,
          "attr": "Magic",
          "bonus": 21
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 26,
        "type": "Pendant",
        "name": "Savage Shaman Pendant",
        "health": 1350,
        "attack": 1170,
        "defence": 1042,
        "magic": 994,
        "bonuses": [{
          "id": 14,
          "attr": "Defence",
          "bonus": 22
        },
        {
          "id": 4,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 22
        }]
      },
      {
        "id": 27,
        "type": "Pendant",
        "name": "Spectral Eye Pendant",
        "health": 1274,
        "attack": 1250,
        "defence": 1095,
        "magic": 840,
        "bonuses": [{
          "id": 15,
          "attr": "Attack",
          "bonus": 21
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "Defence",
          "bonus": 21
        }]
      },
      {
        "id": 28,
        "type": "Ring",
        "name": "Glacier Beast Ring",
        "health": 1350,
        "attack": 1005,
        "defence": 1050,
        "magic": 1245,
        "bonuses": [{
          "id": 20,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 24,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 35,
          "attr": "Magic",
          "bonus": 22
        }]
      },
      {
        "id": 29,
        "type": "Ring",
        "name": "Baals Fang Ring",
        "health": 1635,
        "attack": 1206,
        "defence": 949,
        "magic": 1120,
        "bonuses": [{
          "id": 2,
          "attr": "Attack",
          "bonus": 23
        },
        {
          "id": 7,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 14,
          "attr": "Attack",
          "bonus": 22
        }]
      },
      {
        "id": 31,
        "type": "Ring",
        "name": "Fatal Bite Ring",
        "health": 1500,
        "attack": 930,
        "defence": 1036,
        "magic": 1224,
        "bonuses": [{
          "id": 21,
          "attr": "Magic",
          "bonus": 21
        },
        {
          "id": 14,
          "attr": "Defence",
          "bonus": 20
        },
        {
          "id": 27,
          "attr": "Magic",
          "bonus": 21
        }]
      }
      ,
      {
        "id": 32,
        "type": "Ring",
        "name": "Slayers Ring",
        "health": 1400,
        "attack": 1292,
        "defence": 1036,
        "magic": 990,
        "bonuses": [{
          "id": 5,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 35,
          "attr": "Defence",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "Attack",
          "bonus": 22
        }]
      },
      {
        "id": 33,
        "type": "Talisman",
        "name": "Liquid Ice",
        "health": 1530,
        "attack": 1072,
        "defence": 1008,
        "magic": 1242,
        "bonuses": [{
          "id": 7,
          "attr": "Magic",
          "bonus": 22
        },
        {
          "id": 11,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 5,
          "attr": "Magic",
          "bonus": 23
        }]
      },
      {
        "id": 34,
        "type": "Talisman",
        "name": "Demon Legion Scroll",
        "health": 1365,
        "attack": 1254,
        "defence": 975,
        "magic": 1050,
        "bonuses": [{
          "id": 23,
          "attr": "Attack",
          "bonus": 22
        },
        {
          "id": 3,
          "attr": "Defence",
          "bonus": 21
        },
        {
          "id": 32,
          "attr": "Defence",
          "bonus": 22
        }]
      },
      {
        "id": 35,
        "type": "Talisman",
        "name": "Dragonfire Potion",
        "health": 1360,
        "attack": 1292,
        "defence": 962,
        "magic": 1065,
        "bonuses": [{
          "id": 36,
          "attr": "attack",
          "bonus": 20
        },
        {
          "id": 32,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 1,
          "attr": "attack",
          "bonus": 20
        }]
      },
      {
        "id": 36,
        "type": "Talisman",
        "name": "Skull Bongo",
        "health": 1450,
        "attack": 1005,
        "defence": 1050,
        "magic": 1207,
        "bonuses": [{
          "id": 35,
          "attr": "magic",
          "bonus": 21
        },
        {
          "id": 21,
          "attr": "defence",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "magic",
          "bonus": 21
        }]
      },
      {
        "id": 37,
        "type": "Boots",
        "name": "Corpse Dweller Boots",
        "health": 1570,
        "attack": 1273,
        "defence": 1040,
        "magic": 1008,
        "bonuses": [{
          "id": 9,
          "attr": "attack",
          "bonus": 22
        },
        {
          "id": 25,
          "attr": "attack",
          "bonus": 22
        },
        {
          "id": 1,
          "attr": "attack",
          "bonus": 22
        }]
      }
      ,
      {
        "id": 39,
        "type": "Helmet",
        "name": "Lava Crown",
        "health": 1635,
        "attack": 1430,
        "defence": 1064,
        "magic": 1110,
        "bonuses": [{
          "id": 43,
          "attr": "defence",
          "bonus": 22
        },
        {
          "id": 7,
          "attr": "attack",
          "bonus": 23
        },
        {
          "id": 23,
          "attr": "attack",
          "bonus": 23
        }]
      },
      {
        "id": 40,
        "type": "Helmet",
        "name": "Hood of Clairvoyance",
        "health": 1635,
        "attack": 1156,
        "defence": 1125,
        "magic": 1440,
        "bonuses": [{
          "id": 18,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 11,
          "attr": "magic",
          "bonus": 23
        },
        {
          "id": 12,
          "attr": "magic",
          "bonus": 22
        }]
      },
      {
        "id": 41,
        "type": "Armor",
        "name": "Lavalord Armor",
        "health": 1776,
        "attack": 1452,
        "defence": 1110,
        "magic": 1155,
        "bonuses": [{
          "id": 50,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 19,
          "attr": "attack",
          "bonus": 22
        },
        {
          "id": 24,
          "attr": "attack",
          "bonus": 22
        }]
      }
      ,
      {
        "id": 42,
        "type": "Armor",
        "name": "Stone Labyrinth Armor",
        "health": 1776,
        "attack": 1072,
        "defence": 1184,
        "magic": 1387,
        "bonuses": [{
          "id": 44,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 33,
          "attr": "magic",
          "bonus": 20
        },
        {
          "id": 20,
          "attr": "magic",
          "bonus": 22
        }]
      }
      ,
      {
        "id": 43,
        "type": "Gloves",
        "name": "Volcanic Gloves",
        "health": 1665,
        "attack": 1428,
        "defence": 1110,
        "magic": 1125,
        "bonuses": [{
          "id": 39,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 3,
          "attr": "attack",
          "bonus": 22
        },
        {
          "id": 19,
          "attr": "attack",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 44,
        "name": "Grapevine Gloves",
        "type": "Gloves",
        "health": 1887,
        "attack": 1088,
        "defence": 1110,
        "magic": 1314,
        "bonuses": [{
          "id": 42,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 20,
          "attr": "magic",
          "bonus": 23
        },
        {
          "id": 6,
          "attr": "magic",
          "bonus": 22
        }]
      }
      ,
      {
        "id": 46,
        "name": "Inner Fire Pendant",
        "type": "Pendant",
        "health": 1695,
        "attack": 1320,
        "defence": 1050,
        "magic": 1110,
        "bonuses": [{
          "id": 17,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 49,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 2,
          "attr": "attack",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 47,
        "type": "Pendant",
        "name": "Pathseeker Pendant",
        "health": 1808,
        "attack": 1072,
        "defence": 1200,
        "magic": 1296,
        "bonuses": [{
          "id": 49,
          "attr": "magic",
          "bonus": 21
        },
        {
          "id": 48,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 7,
          "attr": "magic",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 48,
        "type": "Ring",
        "name": "Lavalord Ring",
        "health": 1680,
        "attack": 1340,
        "defence": 1168,
        "magic": 1184,
        "bonuses": [{
          "id": 51,
          "attr": "attack",
          "bonus": 22
        },
        {
          "id": 47,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 11,
          "attr": "attack",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 49,
        "type": "Ring",
        "name": "Ring of Labyrinth",
        "health": 1792,
        "attack": 1072,
        "defence": 1125,
        "magic": 1314,
        "bonuses": [{
          "id": 47,
          "attr": "magic",
          "bonus": 22
        },
        {
          "id": 46,
          "attr": "defence",
          "bonus": 20
        },
        {
          "id": 3,
          "attr": "magic",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 50,
        "type": "Talisman",
        "name": "Basalt Mask",
        "health": 1635,
        "attack": 1320,
        "defence": 1168,
        "magic": 1140,
        "bonuses": [{
          "id": 41,
          "attr": "attack",
          "bonus": 23
        },
        {
          "id": 51,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 29,
          "attr": "attack",
          "bonus": 23
        }]
      }
      ,
      {
        "id": 51,
        "type": "Talisman",
        "name": "Guiding Fire",
        "health": 1744,
        "attack": 1139,
        "defence": 1110,
        "magic": 1387,
        "bonuses": [{
          "id": 48,
          "attr": "magic",
          "bonus": 22
        },
        {
          "id": 50,
          "attr": "defence",
          "bonus": 21
        },
        {
          "id": 12,
          "attr": "magic",
          "bonus": 23
        }]
      }






    ];
  }



}