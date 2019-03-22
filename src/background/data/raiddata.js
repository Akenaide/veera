const ELEMENTS = { fire: 0, water: 1, earth: 2, wind: 3, light: 4, dark: 5, noEle: 6};

function RaidData(name, id, diff, minHostRank, dailyHosts, apCost, matIDs, matNums, ele, thumb) {
    let mats;
    this.urls = {};
    if (matIDs) {
        if (matIDs.length == matNums.length) {
            mats = [];
            for (let i = 0; i < matIDs.length; i++) {
                let mId = matIDs[i],
                    mNum = matNums[i];
                mats.push({id: mId, num: mNum});
                this.urls[mId] = `${GAME_URL.baseGame}#quest/supporter/${id}/1/0/${mId}`;
            }
        }
        else {
            deverror(`Malformed raid data for raid ${id}: ${name}`);
            return;
        }
    }
    else {
        this.urls[Raids.NO_HOST_MAT] = `${GAME_URL.baseGame}#quest/supporter/${id}/1`;
    }


    this.name = name;
    this.id = id;
    this.diff = diff;
    this.minHostRank = minHostRank;
    this.isHl = minHostRank > 100 ? "hl" : false;
    this.dailyHosts = dailyHosts;
    this.apCost = apCost;
    this.matCost = mats;
    this.element = ele;
    this.elementName = Object.entries(ELEMENTS).find(x => x[1] == ele)[0];
//        img: "http://game.granbluefantasy.jp/assets_en/img/sp/assets/summon/qm/" + img
    this.img = `${GAME_URL.assets}${ITEM_KIND[2].path}/${GAME_URL.size.questMedium}${thumb}`;
}

window.RaidList = [
    new RaidData('Griffin (N)', 300011, 1, null, 3, 10, null, null, ELEMENTS.wind, '2030003000.jpg'),
    new RaidData('Griffin (H)', 300021, 4, null, 3, 15, null, null, ELEMENTS.wind, '2030003000_hard.jpg'),
    new RaidData('Tiamat (N)', 300031, 10, null, 3, null, null, null, ELEMENTS.wind, '2030000000.jpg'),
    new RaidData('Tiamat (H)', 300041, 16, null, 3, null, null, null, ELEMENTS.wind, '2030000000_hard.jpg'),
    new RaidData('Tiamat Omega', 300051, 22, null, 3, 30, [18], [2], ELEMENTS.wind, '2040020000_ex.jpg'),
    new RaidData('Nezha', 300421, 28, null, 2, 40, [1343, 1141], [50, 6], ELEMENTS.wind, '2040042000_ex.jpg'),
    new RaidData('Garuda', 301381, 34, null, 2, null, [1343, 1141], [50, 6], ELEMENTS.wind, '2040071000_ex.jpg'),
    new RaidData('Tiamat Omega (HL)', 300441, 42, 101, 2, 50, [32], [3], ELEMENTS.wind, '2040020000_high.jpg'),
    new RaidData('Nezha (HL)', 300451, 49, 101, 1, 50, [44], [1], ELEMENTS.wind, '2040042000_high.jpg'),

    new RaidData('Flame (N)', 300061, 2, null, 3, null, null, null, ELEMENTS.fire, '2020018001.jpg'),
    new RaidData('Flame (H)', 300071, 5, null, 3, null, null, null, ELEMENTS.fire, '2020018001_hard.jpg'),
    new RaidData('Colossus (N)', 300081, 11, null, 3, null, null, null, ELEMENTS.fire, '2030001000.jpg'),
    new RaidData('Colossus (H)', 300091, 17, null, 3, null, null, null, ELEMENTS.fire, '2030001000_hard.jpg'),
    new RaidData('Colossus Omega', 300101, 25, null, 3, null, [19], [2], ELEMENTS.fire, '2040034000_ex.jpg'),
    new RaidData('Twin Elements', 300411, 29, null, 2, null, [1313, 1111], [50, 6], ELEMENTS.fire, '2040063000_ex.jpg'),
    new RaidData('Athena', 301071, 35, null, 2, null, [1313, 1111], [50, 6], ELEMENTS.fire, '2040021000_ex.jpg'),
    new RaidData('Colossus Omega (HL)', 300491, 43, 101, 2, null, [47], [3], ELEMENTS.fire, '2040034000_high.jpg'),
    new RaidData('Twin Elements (HL)', 300501, 50, 101, 1, 50, [41], [1], ELEMENTS.fire, '2040063000_high.jpg'),

    new RaidData('Guard (N)', 300111, 3, null, 3, null, null, null, ELEMENTS.water, '2030013001.jpg'),
    new RaidData('Guard (H)', 300121, 6, null, 3, null, null, null, ELEMENTS.water, '2030013001_hard.jpg'),
    new RaidData('Leviathan (N)', 300141, 12, null, 3, null, null, null, ELEMENTS.water, '2030011000.jpg'),
    new RaidData('Leviathan (H)', 300151, 18, null, 3, null, null, null, ELEMENTS.water, '2030011000_hard.jpg'),
    new RaidData('Leviathan Omega', 300161, 23, null, 3, null, [20], [2], ELEMENTS.water, '2040028000_ex.jpg'),
    new RaidData('Macula', 300381, 30, null, 2, null, [1323, 1121], [50, 6], ELEMENTS.water, '2040002000_ex.jpg'),
    new RaidData('Grani', 300481, 36, null, 2, null, [1323, 1121], [50, 6], ELEMENTS.water, '2040007000_ex.jpg'),
    new RaidData('Leviathan Omega (HL)', 300511, 44, 101, 2, null, [48], [3], ELEMENTS.water, '2040028000_high.jpg'),
    new RaidData('Macula (HL)', 300521, 51, 101, 1, 50, [42], [1], ELEMENTS.water, '2040002000_high.jpg'),

    new RaidData('Dragon (H)', 300171, 7, null, 3, null, null, null, ELEMENTS.earth, '2030004000_hard.jpg'),
    new RaidData('Yggdrasil (N)', 300181, 13, null, 3, null, null, null, ELEMENTS.earth, '2030015000.jpg'),
    new RaidData('Yggdrasil (H)', 300191, 19, null, 3, null, null, null, ELEMENTS.earth, '2030015000_hard.jpg'),
    new RaidData('Yggdrasil Omega', 300261, 24, null, 3, null, [21], [2], ELEMENTS.earth, '2040027000_ex.jpg'),
    new RaidData('Medusa', 300391, 31, null, 2, null, [1333, 1131], [50, 6], ELEMENTS.earth, '2040059000_ex.jpg'),
    new RaidData('Baal', 301371, 37, null, 2, null, [1333, 1131], [50, 6], ELEMENTS.earth, '2040013000_ex.jpg'),
    new RaidData('Yggdrasil Omega (HL)', 300531, 45, 101, 2, null, [49], [3], ELEMENTS.earth, '2040027000_high.jpg'),
    new RaidData('Medusa (HL)', 300541, 52, 101, 1, 50, [43], [1], ELEMENTS.earth, '2040059000_high.jpg'),

    new RaidData('Wisp (H)', 300201, 8, null, 3, null, null, null, ELEMENTS.light, '2030027000_hard.jpg'),
    new RaidData('Adversa (N)', 300211, 14, null, 3, null, null, null, ELEMENTS.light, '2030035000.jpg'),
    new RaidData('Adversa (H)', 300221, 20, null, 3, null, null, null, ELEMENTS.light, '2030035000_hard.jpg'),
    new RaidData('Luminiera Omega', 300271, 26, null, 3, null, [26], [2], ELEMENTS.light, '2040047000_ex.jpg'),
    new RaidData('Apollo', 300431, 32, null, 2, null, [1353, 1151], [50, 6], ELEMENTS.light, '2040023000_ex.jpg'),
    new RaidData('Odin', 300461, 38, null, 2, null, [1353, 1151], [50, 6], ELEMENTS.light, '2040029000_ex.jpg'),
    new RaidData('Luminiera Omega (HL)', 300561, 46, 101, 2, null, [50], [3], ELEMENTS.light, '2040047000_high.jpg'),
    new RaidData('Apollo (HL)', 300571, 53, 101, 1, 50, [45], [1], ELEMENTS.light, '2040023000_high.jpg'),

    new RaidData('Eye (H)', 300231, 9, null, 3, null, null, null, ELEMENTS.dark, '2030038000_hard.jpg'),
    new RaidData('Celeste (N)', 300241, 15, null, 3, null, null, null, ELEMENTS.dark, '2030041000.jpg'),
    new RaidData('Celeste (H)', 300251, 21, null, 3, null, null, null, ELEMENTS.dark, '2030041000_hard.jpg'),
    new RaidData('Celeste Omega', 300281, 27, null, 3, null, [31], [2], ELEMENTS.dark, '2040046000_ex.jpg'),
    new RaidData('Olivia', 300401, 33, null, 2, null, [1363, 1161], [50, 6], ELEMENTS.dark, '2040005000_ex.jpg'),
    new RaidData('Lich', 300551, 39, null, 2, null, [1363, 1161], [50, 6], ELEMENTS.dark, '2040012000_ex.jpg'),
    new RaidData('Celeste Omega (HL)', 300581, 47, 101, 2, null, [51], [3], ELEMENTS.dark, '2040046000_high.jpg'),
    new RaidData('Olivia (HL)', 300591, 54, 101, 1, 50, [46], [1], ELEMENTS.dark, '2040005000_high.jpg'),

    new RaidData('Bahamut', 300291, 40, 80, 3, 80, [58], [1], ELEMENTS.dark, '2030002000_hell.jpg'),
    new RaidData('Grand', 301051, 41, null, 2, null, [82], [1], ELEMENTS.light, '2040065000_hell.jpg'),
    new RaidData('Rose (HL)', 300471, 48, null, 1, null, [1204], [10], ELEMENTS.wind, '2040105000_high.jpg'),
    new RaidData('Bahamut (HL)', 301061, 55, 101, 1, 90, [59], [1], ELEMENTS.dark, '2040128000_hell.jpg'),
];