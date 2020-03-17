
export class person {
  id;
  charName;
  sfSocitey;
  class;
  level;
  race;
  theme;
  size;
  speed;
  gender;
  homeWorld;
  aligment;
  diety;
  player;
  str;
  dex;
  con;
  int;
  wis;
  cha;
  strMod;
  dexMod;
  conMod;
  intMod;
  wisMod;
  chaMod;
  strUpg;
  dexUpg;
  conUpg;
  intUpg;
  wisUpg;
  chaUpg;
  strUpgMod;
  dexUpgMod;
  conUpgMod;
  intUpgMod;
  wisUpgMod;
  chaUpgMod;
  initiativeMiscMod;
  totalStamina;
  actStamina;
  totalHealth;
  actHealth;
  totalResPoints;
  actResPoints;
  totalEAC;
  totalKAC;
  armBonEAC;
  armBonKAC;
  armDexMOD;
  miscModEAC;
  miscModKAC;
  acroTotal;
  acroRanks;
  acroClassBon;
  acroAbMod;
  acVsCombMan;
  damageRes;
  resistances;
  totalFortSave;
  baseFortSave;
  abiFortSave;
  miscFortSave;
  totalReflSave;
  baseReflSave;
  abiReflSave;
  miscReflSave;
  totalWillSave;
  baseWillSave;
  abiWillSave;
  miscWillSave;
  saveModifiers;
  meleeThrowTotalATK;
  BAB;
  meleeThrowSTRMod;
  meleeThrowMiscMod;
  rangedTotalATK;
  rangedDEXMod;
  rangedMiscMod;
  acroInsightBon;
  acroMiscMod;
  athleTotal;
  athleRanks;
  athleClassBon;
  athleAbMod;
  athleInsightBon;
  athleMiscMod;
  bluffTotal;
  bluffRanks;
  bluffClassBon;
  bluffAbMod;
  bluffInsightBon;
  bluffMiscMod;
  compTotal;
  compRanks;
  compClassBon;
  compAbMod;
  compInsightBon;
  compMiscMod;
  cultTotal;
  cultRanks;
  cultClassBon;
  cultAbMod;
  cultInsightBon;
  cultMiscMod;
  dipoTotal;
  dipoRanks;
  dipoClassBon;
  dipoAbMod;
  dipoInsightBon;
  dipoMiscMod;
  disgTotal;
  disgRanks;
  disgClassBon;
  disgAbMod;
  disgInsightBon;
  disgMiscMod;
  engTotal;
  engRanks;
  engClassBon;
  engAbMod;
  engInsightBon;
  engMiscMod;
  intiTotal;
  intiRanks;
  intiClassBon;
  intiAbMod;
  intiInsightBon;
  intiMiscMod;
  lifeSTotal;
  lifeSRanks;
  lifeSClassBon;
  lifeSAbMod;
  lifeSInsightBon;
  lifeSMiscMod;
  mediTotal;
  mediRanks;
  mediClassBon;
  mediAbMod;
  mediInsightBon;
  mediMiscMod;
  mystTotal;
  mystRanks;
  mystClassBon;
  mystAbMod;
  mystInsightBon;
  mystMiscMod;
  percTotal;
  percRanks;
  percClassBon;
  percAbMod;
  percInsightBon;
  percMiscMod;
  pysSTotal;
  pysSRanks;
  pysSClassBon;
  pysSAbMod;
  pysSInsightBon;
  pysSMiscMod;
  piloTotal;
  piloRanks;
  piloClassBon;
  piloAbMod;
  piloInsightBon;
  piloMiscMod;
  profTotal;
  profRanks;
  profClassBon;
  profAbMod;
  profInsightBon;
  profMiscMod;
  prof2Total;
  prof2Ranks;
  prof2ClassBon;
  prof2AbMod;
  prof2InsightBon;
  prof2MiscMod;
  senseMTotal;
  senseMRanks;
  senseMClassBon;
  senseMAbMod;
  senseMInsightBon;
  senseMMiscMod;
  sleightOHTotal;
  sleightOHRanks;
  sleightOHClassBon;
  sleightOHAbMod;
  sleightOHInsightBon;
  sleightOHMiscMod;
  stealthTotal;
  stealthRanks;
  stealthClassBon;
  stealthAbMod;
  stealthInsightBon;
  stealthMiscMod;
  survTotal;
  survRanks;
  survClassBon;
  survAbMod;
  survInsightBon;
  survMiscMod;

  constructor(champion) {
    this.id = champion.id;
    this.charName = champion.charName;
    this.sfSocitey = champion.sfSocitey;
    this.class = champion.class;
    this.level = champion.level;
    this.race = champion.race;
    this.theme = champion.theme;
    this.size = champion.size;
    this.speed = champion.speed;
    this.gender = champion.gender;
    this.homeWorld = champion.homeWorld;
    this.aligment = champion.aligment;
    this.diety = champion.diety;
    this.player = champion.player;
    this.str = champion.str;
    this.dex = champion.dex;
    this.con = champion.con;
    this.int = champion.int;
    this.wis = champion.wis;
    this.cha = champion.cha;
    this.strMod = Math.floor((this.str - 10) / 2);
    this.dexMod = Math.floor((this.dex - 10) / 2);
    this.conMod = Math.floor((this.con - 10) / 2);
    this.intMod = Math.floor((this.int - 10) / 2);
    this.wisMod = Math.floor((this.wis - 10) / 2);
    this.chaMod = Math.floor((this.cha - 10) / 2);
    this.strUpg = champion.strUpg;
    this.dexUpg = champion.dexUpg;
    this.conUpg = champion.conUpg;
    this.intUpg = champion.intUpg;
    this.wisUpg = champion.wisUpg;
    this.chaUpg = champion.chaUpg;
    this.strUpgMod = Math.floor((this.strUpg - 10) / 2);
    this.dexUpgMod = Math.floor((this.dexUpg - 10) / 2);
    this.conUpgMod = Math.floor((this.conUpg - 10) / 2);
    this.intUpgMod = Math.floor((this.intUpg - 10) / 2);
    this.wisUpgMod = Math.floor((this.wisUpg - 10) / 2);
    this.chaUpgMod = Math.floor((this.chaUpg - 10) / 2);
    this.initiativeMiscMod = champion.initiativeMiscMod;
    this.totalStamina = this.level * (6 + this.conUpgMod);
    this.actStamina = champion.actStamina;
    this.totalHealth = 4 + this.level * 6;
    this.actHealth = champion.actHealth;
    this.totalResPoints = this.level / +this.wisUpgMod;
    this.actResPoints = champion.actResPoints;
    this.totalEAC = this.armBonEAC + this.dexUpgMod + this.miscModEAC;
    this.totalKAC = this.armBonKAC + this.dexUpgMod + this.miscModKAC;
    this.armBonEAC = champion.armBonEAC;
    this.armBonKAC = champion.armBonKAC;
    this.armDexMOD = champion.armDexMOD;
    this.miscModEAC = champion.miscModEAC;
    this.miscModKAC = champion.miscModKAC;
    this.acVsCombMan = this.totalKAC + 8;
    this.damageRes = champion.damageRes;
    this.resistances = champion.resistances;
    this.totalFortSave =
      this.baseFortSave + this.abiFortSave + this.miscFortSave;
    this.baseFortSave = Math.floor(this.level / 3);
    this.abiFortSave = this.conUpgMod;
    this.miscFortSave = champion.miscFortSave;
    this.totalReflSave =
      this.baseReflSave + this.abiReflSave + this.miscReflSave;
    this.baseReflSave = Math.floor(this.level / 3);
    this.abiReflSave = this.dexUpgMod;
    this.miscReflSave = champion.miscReflSave;
    this.totalWillSave =
      this.baseWillSave + this.abiWillSave + this.miscWillSave;
    this.baseWillSave = Math.floor(this.level / 2) + 2;
    this.abiWillSave = this.wisUpgMod;
    this.miscWillSave = champion.miscWillSave;
    this.saveModifiers = champion.saveModifiers;
    this.meleeThrowTotalATK =
      this.BAB + this.meleeThrowSTRMod + this.meleeThrowMiscMod;
    this.BAB = this.babCalc();
    this.meleeThrowSTRMod = this.strUpgMod;
    this.meleeThrowMiscMod = champion.meleeThrowMiscMod;
    this.rangedTotalATK = this.BAB + this.rangedDEXMod + this.rangedMiscMod;
    this.rangedDEXMod = this.dexUpgMod;
    this.rangedMiscMod = champion.rangedMiscMod;
    this.acroTotal =
      this.acroRanks +
      this.acroClassBon +
      this.acroAbMod +
      this.acroInsightBon +
      this.acroMiscMod;
    this.acroRanks = champion.acroRanks;
    this.acroClassBon = champion.acroClassBon;
    this.acroAbMod = this.dexUpgMod;
    this.acroInsightBon = champion.acroInsightBon;
    this.acroMiscMod = champion.acroMiscMod;
    this.athleTotal =
      this.athleRanks +
      this.athleClassBon +
      this.athleAbMod +
      this.athleInsightBon +
      this.athleMiscMod;
    this.athleRanks = champion.athleRanks;
    this.athleClassBon = champion.athleClassBon;
    this.athleAbMod = this.strUpgMod;
    this.athleInsightBon = champion.athleInsightBon;
    this.athleMiscMod = champion.athleMiscMod;
    this.bluffTotal =
      this.bluffRanks +
      this.bluffClassBon +
      this.bluffAbMod +
      this.bluffInsightBon +
      this.bluffMiscMod;
    this.bluffRanks = champion.bluffRanks;
    this.bluffClassBon = champion.bluffClassBon;
    this.bluffAbMod = this.chaUpgMod;
    this.bluffInsightBon = champion.bluffInsightBon;
    this.bluffMiscMod = champion.bluffMiscMod;
    this.compTotal =
      this.compRanks +
      this.compClassBon +
      this.compAbMod +
      this.compInsightBon +
      this.compMiscMod;
    this.compRanks = champion.compRanks;
    this.compClassBon = champion.compClassBon;
    this.compAbMod = this.intUpgMod;
    this.compInsightBon = champion.compInsightBon;
    this.compMiscMod = champion.compMiscMod;
    this.cultTotal =
      this.cultRanks +
      this.cultClassBon +
      this.cultAbMod +
      this.cultInsightBon +
      this.cultMiscMod;
    this.cultRanks = champion.cultRanks;
    this.cultClassBon = champion.cultClassBon;
    this.cultAbMod = this.intUpgMod;
    this.cultInsightBon = champion.cultInsightBon;
    this.cultMiscMod = champion.cultMiscMod;
    this.dipoTotal =
      this.dipoRanks +
      this.dipoClassBon +
      this.dipoAbMod +
      this.dipoInsightBon +
      this.dipoMiscMod;
    this.dipoRanks = champion.dipoRanks;
    this.dipoClassBon = champion.dipoClassBon;
    this.dipoAbMod = this.chaUpgMod;
    this.dipoInsightBon = champion.dipoInsightBon;
    this.dipoMiscMod = champion.dipoMiscMod;
    this.disgTotal =
      this.disgRanks +
      this.disgClassBon +
      this.disgAbMod +
      this.disgInsightBon +
      this.disgMiscMod;
    this.disgRanks = champion.disgRanks;
    this.disgClassBon = champion.disgClassBon;
    this.disgAbMod = this.chaUpgMod;
    this.disgInsightBon = champion.disgInsightBon;
    this.disgMiscMod = champion.disgMiscMod;
    this.engTotal =
      this.engRanks +
      this.engClassBon +
      this.engAbMod +
      this.engInsightBon +
      this.engMiscMod;
    this.engRanks = champion.engRanks;
    this.engClassBon = champion.engClassBon;
    this.engAbMod = this.intUpgMod;
    this.engInsightBon = champion.engInsightBon;
    this.engMiscMod = champion.engMiscMod;
    this.intiTotal =
      this.intiRanks +
      this.intiClassBon +
      this.intiAbMod +
      this.intiInsightBon +
      this.intiMiscMod;
    this.intiRanks = champion.intiRanks;
    this.intiClassBon = champion.intiClassBon;
    this.intiAbMod = this.chaUpgMod;
    this.intiInsightBon = champion.intiInsightBon;
    this.intiMiscMod = champion.intiMiscMod;
    this.lifeSTotal =
      this.lifeSRanks +
      this.lifeSClassBon +
      this.lifeSAbMod +
      this.lifeSInsightBon +
      this.lifeSMiscMod;
    this.lifeSRanks = champion.lifeSRanks;
    this.lifeSClassBon = champion.lifeSClassBon;
    this.lifeSAbMod = this.intUpgMod;
    this.lifeSInsightBon = champion.lifeSInsightBon;
    this.lifeSMiscMod = champion.lifeSMiscMod;
    this.mediTotal =
      this.mediRanks +
      this.mediClassBon +
      this.mediAbMod +
      this.mediInsightBon +
      this.mediMiscMod;
    this.mediRanks = champion.mediRanks;
    this.mediClassBon = champion.mediClassBon;
    this.mediAbMod = this.intUpgMod;
    this.mediInsightBon = champion.mediInsightBon;
    this.mediMiscMod = champion.mediMiscMod;
    this.mystTotal =
      this.mystRanks +
      this.mystClassBon +
      this.mystAbMod +
      this.mystInsightBon +
      this.mystMiscMod;
    this.mystRanks = champion.mystRanks;
    this.mystClassBon = champion.mystClassBon;
    this.mystAbMod = this.wisUpgMod;
    this.mystInsightBon = champion.mystInsightBon;
    this.mystMiscMod = champion.mystMiscMod;
    this.percTotal =
      this.percRanks +
      this.percClassBon +
      this.percAbMod +
      this.percInsightBon +
      this.percMiscMod;
    this.percRanks = champion.percRanks;
    this.percClassBon = champion.percClassBon;
    this.percAbMod = this.wisUpgMod;
    this.percInsightBon = champion.percInsightBon;
    this.percMiscMod = champion.percMiscMod;
    this.pysSTotal =
      this.pysSRanks +
      this.pysSClassBon +
      this.pysSAbMod +
      this.pysSInsightBon +
      this.pysSMiscMod;
    this.pysSRanks = champion.pysSRanks;
    this.pysSClassBon = champion.pysSClassBon;
    this.pysSAbMod = this.intUpgMod;
    this.pysSInsightBon = champion.pysSInsightBon;
    this.pysSMiscMod = champion.pysSMiscMod;
    this.piloTotal =
      this.piloRanks +
      this.piloClassBon +
      this.piloAbMod +
      this.piloInsightBon +
      this.piloMiscMod;
    this.piloRanks = champion.piloRanks;
    this.piloClassBon = champion.piloClassBon;
    this.piloAbMod = this.dexUpgMod;
    this.piloInsightBon = champion.piloInsightBon;
    this.piloMiscMod = champion.piloMiscMod;
    this.profTotal =
      this.profRanks +
      this.profClassBon +
      this.profAbMod +
      this.profInsightBon +
      this.profMiscMod;
    this.profRanks = champion.profRanks;
    this.profClassBon = champion.profClassBon;
    this.profAbMod = this.wisUpgMod;
    this.profInsightBon = champion.profInsightBon;
    this.profMiscMod = champion.profMiscMod;
    this.prof2Total =
      this.prof2Ranks +
      this.prof2ClassBon +
      this.prof2AbMod +
      this.prof2InsightBon +
      this.prof2MiscMod;
    this.prof2Ranks = champion.prof2Ranks;
    this.prof2ClassBon = champion.prof2ClassBon;
    this.prof2AbMod = champion.prof2AbMod;
    this.prof2InsightBon = champion.prof2InsightBon;
    this.prof2MiscMod = champion.prof2MiscMod;
    this.senseMTotal =
      this.senseMRanks +
      this.senseMClassBon +
      this.senseMAbMod +
      this.senseMInsightBon +
      this.senseMMiscMod;
    this.senseMRanks = champion.senseMRanks;
    this.senseMClassBon = champion.senseMClassBon;
    this.senseMAbMod = this.wisUpgMod;
    this.senseMInsightBon = champion.senseMInsightBon;
    this.senseMMiscMod = champion.senseMMiscMod;
    this.sleightOHTotal =
      this.sleightOHRanks +
      this.sleightOHClassBon +
      this.sleightOHAbMod +
      this.sleightOHInsightBon +
      this.sleightOHMiscMod;
    this.sleightOHRanks = champion.sleightOHRanks;
    this.sleightOHClassBon = champion.sleightOHClassBon;
    this.sleightOHAbMod = this.dexUpgMod;
    this.sleightOHInsightBon = champion.sleightOHInsightBon;
    this.sleightOHMiscMod = champion.sleightOHMiscMod;
    this.stealthTotal =
      this.stealthRanks +
      this.stealthClassBon +
      this.stealthAbMod +
      this.stealthInsightBon +
      this.stealthMiscMod;
    this.stealthRanks = champion.stealthRanks;
    this.stealthClassBon = champion.stealthClassBon;
    this.stealthAbMod = this.dexUpgMod;
    this.stealthInsightBon = champion.stealthInsightBon;
    this.stealthMiscMod = champion.stealthMiscMod;
    this.survTotal =
      this.survRanks +
      this.survClassBon +
      this.survAbMod +
      this.survInsightBon +
      this.survMiscMod;
    this.survRanks = champion.survRanks;
    this.survClassBon = champion.survClassBon;
    this.survAbMod = this.wisUpgMod;
    this.survInsightBon = champion.survInsightBon;
    this.survMiscMod = champion.survMiscMod;
  }

  babCalc() {
    if (this.level === 1) {
      return 0;
    } else if (this.level === 2) {
      return 1;
    } else if (this.level === 3) {
      return 2;
    } else if (this.level === 4 || this.level === 5) {
      return 3;
    } else if (this.level === 6) {
      return 4;
    } else if (this.level === 7) {
      return 5;
    } else if (this.level === 8 || this.level === 9) {
      return 6;
    } else if (this.level === 10) {
      return 7;
    } else if (this.level === 11) {
      return 8;
    } else if (this.level === 12 || this.level === 13) {
      return 9;
    } else if (this.level === 14) {
      return 10;
    } else if (this.level === 15) {
      return 11;
    } else if (this.level === 16 || this.level === 17) {
      return 12;
    } else if (this.level === 18) {
      return 13;
    } else if (this.level === 19) {
      return 14;
    } else if (this.level === 20) {
      return 15;
    }
  }
}
