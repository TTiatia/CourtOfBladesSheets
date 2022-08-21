const metaData = {
    sheetVersion: "1.0",
    lastUpdate: "2022-08-10",
};

const pcDefaults = {

    // Sheet settings
    setting_attrcount: () => "3",
    setting_attrskillcount1: () => "4",
    setting_attrskillcount2: () => "4",
    setting_attrskillcount3: () => "4",

    // PC attributes & actions
    pcattrname1: () => translate("Body"),
    pcattrdesc1: () => translate("BodyResistanceDescription"),
    pcattrval1: () => "0",
    pcskillName11: () => translate("Skulk"),
    pcskilldesc11: () => translate("SkulkActionDescription"),
    pcskillval11: () => "0",
    pcskillName12: () => translate("Skirmish"),
    pcskilldesc12: () => translate("SkirmishActionDescription"),
    pcskillval12: () => "0",
    pcskillName13: () => translate("Maneuver"),
    pcskilldesc13: () => translate("ManeuverActionDescription"),
    pcskillval13: () => "0",
    pcskillName14: () => translate("Wreck"),
    pcskilldesc14: () => translate("WreckActionDescription"),
    pcskillval14: () => "0",

    pcattrname2: () => translate("Mind"),
    pcattrdesc2: () => translate("MindResistanceDescription"),
    pcattrval2: () => "0",
    pcskillName21: () => translate("Tinker"),
    pcskilldesc21: () => translate("TinkerActionDescription"),
    pcskillval21: () => "0",
    pcskillName22: () => translate("Study"),
    pcskilldesc22: () => translate("StudyActionDescription"),
    pcskillval22: () => "0",
    pcskillName23: () => translate("Survey"),
    pcskilldesc23: () => translate("SurveyActionDescription"),
    pcskillval23: () => "0",
    pcskillName24: () => translate("Hunt"),
    pcskilldesc24: () => translate("HuntActionDescription"),
    pcskillval24: () => "0",

    pcattrname3: () => translate("Spirit"),
    pcattrdesc3: () => translate("SpiritResistanceDescription"),
    pcattrval3: () => "0",
    pcskillName31: () => translate("Channel"),
    pcskilldesc31: () => translate("ChannelActionDescription"),
    pcskillval31: () => "0",
    pcskillName32: () => translate("Command"),
    pcskilldesc32: () => translate("CommandActionDescription"),
    pcskillval32: () => translate("0"),
    pcskillName33: () => translate("Consort"),
    pcskilldesc33: () => translate("ConsortActionDescription"),
    pcskillval33: () => "0",
    pcskillName34: () => translate("Sway"),
    pcskilldesc34: () => translate("SwayActionDescription"),
    pcskillval34: () => "0",
};

const factionDefaults = {
    housesMajor: [{
            tier: () => "VI",
            name: () => translate("TheGrandCouncil"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseCorvetto"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseBattalia"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseBastien"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseLovell"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseAlMari"),
            favor: () => "0",
            status: () => "0",
        },
        {
            tier: () => "",
            name: () => translate("HouseElanda"),
            favor: () => "0",
            status: () => "0",
        },
    ],
    housesMinor: [{
            tier: () => "V",
            name: () => translate("TheBankOfBrassAndBone"),
            status: () => "0",
        },
        {
            tier: () => "IV",
            name: () => translate("TheFortunadoTradeFederation"),
            status: () => "0",
        },
        {
            tier: () => "IV",
            name: () => translate("TheFirstCourt"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheScholamNaturalis"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheGraces"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheGondoliers"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheSignora"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheCityWatch"),
            status: () => "0",
        },
        {
            tier: () => "III",
            name: () => translate("TheDockers"),
            status: () => "0",
        },
        {
            tier: () => "II",
            name: () => translate("TheBakersGuild"),
            status: () => "0",
        },
        {
            tier: () => "II",
            name: () => translate("TheArboristGuild"),
            status: () => "0",
        },
        {
            tier: () => "II",
            name: () => translate("TheBroadsheets"),
            status: () => "0",
        },
        {
            tier: () => "II",
            name: () => translate("TheIronmongers"),
            status: () => "0",
        },
    ],
    outsiders: [{
            tier: () => "IV",
            name: () => translate("TheSevenfoldVeils"),
            status: () => "0"
        },
        {
            tier: () => "III",
            name: () => translate("TheMercies"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheDeadWatchers"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheCollegeOfSatire"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheBuskin"),
            status: () => "0"
        },
        {
            tier: () => "I",
            name: () => translate("TheTramps"),
            status: () => "0"
        },
        {
            tier: () => "I",
            name: () => translate("Soraya"),
            status: () => "0"
        },
    ],
    uncouth: [

        {
            tier: () => "IV",
            name: () => translate("ThePrinceOfTatters"),
            status: () => "0"
        },
        {
            tier: () => "IV",
            name: () => translate("TheBrizolattoFamily"),
            status: () => "0"
        },
        {
            tier: () => "III",
            name: () => translate("RignollesRovers"),
            status: () => "0"
        },
        {
            tier: () => "III",
            name: () => translate("TheTenHammerRegulars"),
            status: () => "0"
        },
        {
            tier: () => "III",
            name: () => translate("TheFounder"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheUnburnt"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheBlueDevils"),
            status: () => "0"
        },
        {
            tier: () => "II",
            name: () => translate("TheTwistJacks"),
            status: () => "0"
        },
        {
            tier: () => "I",
            name: () => translate("TheMotley"),
            status: () => "0"
        },
    ],
};

const coterieUpgrades = {
    quality: [{
            name: () => translate("Documents"),
            desc: () => translate("DocumentsQualityDescription"),
        },
        {
            name: () => translate("Gear"),
            desc: () => translate("GearQualityDescription"),
        },
        {
            name: () => translate("Implements"),
            desc: () => translate("ImplementsQualityDescription"),
        },
        {
            name: () => translate("Supplies"),
            desc: () => translate("SuppliesQualityDescription"),
        },
        {
            name: () => translate("Tools"),
            desc: () => translate("ToolsQualityDescription"),
        },
        {
            name: () => translate("Weapons"),
            desc: () => translate("WeaponsQualityDescription"),
        }
    ],
    training: [{
            name: () => translate("Mind"),
            desc: () => translate("MindTrainingDescription"),
        },
        {
            name: () => translate("Body"),
            desc: () => translate("BodyTrainingDescription"),
        },
        {
            name: () => translate("Spirit"),
            desc: () => translate("SpiritTrainingDescription"),
        }
    ],
    others: [{
            name: () => translate("PrivateApartments"),
            desc: () => translate("PrivateApartmentsOtherDescription"),
        },
        {
            name: () => translate("HiddenExit"),
            desc: () => translate("HiddenExitOtherDescription"),
        },
        {
            name: () => translate("Workspace"),
            desc: () => translate("WorkspaceOtherDescription"),
        },
        {
            name: () => translate("RitualSpace"),
            desc: () => translate("RitualSpaceOtherDescription"),
        },
        {
            name: () => translate("PrivateLibrary"),
            desc: () => translate("PrivateLibraryOtherDescription"),
        },
        {
            name: () => translate("ArcaneWards"),
            desc: () => translate("ArcaneWardsOtherDescription"),
        },
        {
            name: () => translate("DedicatedTransportation"),
            desc: () => translate("DedicatedTransportationOtherDescription"),
        }
    ]
}

const itemStyles = {
    normal: "n",
    italics: "i",
    bold: "b",
    boldItalics: "bi"
};

const pcItems = {
    universal: [{
            name: () => translate("LuckCharm"),
            desc: () => translate("LuckCharmItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        },
        {
            name: () => translate("FlintAndSteel"),
            desc: () => translate("FlintAndSteelItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        },
        {
            name: () => translate("Armor"),
            desc: () => translate("ArmorItemDescription"),
            load: () => "2",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("ABladeOrTwo"),
            desc: () => translate("ABladeOrTwoItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("SingleShotPistol"),
            desc: () => translate("SingleShotPistolItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("SecondSingleShotPistol"),
            desc: () => translate("SecondSingleShotPistolItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("Lantern"),
            desc: () => translate("LanternItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("Documents"),
            desc: () => translate("DocumentsItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("LargeWeapon"),
            desc: () => translate("LargeWeaponItemDescription"),
            load: () => "2",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("ThrowingKnives"),
            desc: () => translate("ThrowingKnivesItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("BuglaryGear"),
            desc: () => translate("BuglaryGearItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("DemolitionTools"),
            desc: () => translate("DemolitionToolsItemDescription"),
            load: () => "2",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("ArcaneImplements"),
            desc: () => translate("ArcaneImplementsItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("ClimbingGear"),
            desc: () => translate("ClimbingGearItemDescription"),
            load: () => "2",
            style: () => itemStyles.normal,
        },
        {
            name: () => translate("SubterfugeSupplies"),
            desc: () => translate("SubterfugeSuppliesItemDescription"),
            load: () => "1",
            style: () => itemStyles.normal,
        }
    ],
};

// shorter alias
const translate = (key) => { return getTranslationByKey(key) || `[${key}]`; }

const initialSetup = () => {
    console.log("Starting sheet setup");
    setDefaultAttrs(pcDefaults);
    fillFactions();
    fillPCUniversalItems();
    fillCoterieUniversalUpgrades();

    console.log("Sheet setup complete");
};

const fillPCUniversalItems = () => {
    const newAttrs = [];

    for (const item of pcItems.universal) {
        let newId = generateRowID();
        let prefix = `repeating_pcitems_${newId}_`;
        newAttrs[prefix + "pcitemname"] = item.name();
        newAttrs[prefix + "pcitemstylestyle"] = item.style();
        newAttrs[prefix + "pcitemstylesize"] = item.load();
        newAttrs[prefix + "pcitemdesc"] = item.desc();
        newAttrs[prefix + "pcitemvalue"] = "0";
    }

    setAttrs(newAttrs);
};

const fillCoterieUniversalUpgrades = () => {
    const newAttrs = [];

    // Quality
    for (const up of coterieUpgrades.quality) {
        let newId = generateRowID();
        let prefix = `repeating_houseup2_${newId}_`;
        newAttrs[prefix + "houseup2name"] = up.name();
        newAttrs[prefix + "houseup2desc"] = up.desc();
        newAttrs[prefix + "houseup2value"] = "0";
    }

    // Quality
    for (const up of coterieUpgrades.training) {
        let newId = generateRowID();
        let prefix = `repeating_houseup3_${newId}_`;
        newAttrs[prefix + "houseup3name"] = up.name();
        newAttrs[prefix + "houseup3desc"] = up.desc();
        newAttrs[prefix + "houseup3value"] = "0";
    }

    // Quality
    for (const up of coterieUpgrades.others) {
        let newId = generateRowID();
        let prefix = `repeating_houseup4_${newId}_`;
        newAttrs[prefix + "houseup4name"] = up.name();
        newAttrs[prefix + "houseup4desc"] = up.desc();
        newAttrs[prefix + "houseup4value"] = "0";
    }

    setAttrs(newAttrs);
};

const fillFactions = () => {
    const newAttrs = [];

    // Houses Major
    for (const fact of factionDefaults.housesMajor) {
        let newId = generateRowID();
        let prefix = `repeating_factmajors_${newId}_`;
        newAttrs[prefix + "factmajortier"] = fact.tier();
        newAttrs[prefix + "factmajorname"] = fact.name();
        newAttrs[prefix + "factmajorfavor"] = fact.favor();
        newAttrs[prefix + "factmajorstatus"] = fact.status();
    }

    // Houses Minor
    newAttrs["factminor1favor"] = "0";
    for (const fact of factionDefaults.housesMinor) {
        let newId = generateRowID();
        let prefix = `repeating_factminors1_${newId}_`;
        newAttrs[prefix + "factminor1tier"] = fact.tier();
        newAttrs[prefix + "factminor1name"] = fact.name();
        newAttrs[prefix + "factminor1status"] = fact.status();
    }

    // Outsiders
    newAttrs["factminor2favor"] = "0";
    for (const fact of factionDefaults.outsiders) {
        let newId = generateRowID();
        let prefix = `repeating_factminors2_${newId}_`;
        newAttrs[prefix + "factminor2tier"] = fact.tier();
        newAttrs[prefix + "factminor2name"] = fact.name();
        newAttrs[prefix + "factminor2status"] = fact.status();
    }

    // Uncouth
    newAttrs["factminor3favor"] = "0";
    for (const fact of factionDefaults.uncouth) {
        let newId = generateRowID();
        let prefix = `repeating_factminors3_${newId}_`;
        newAttrs[prefix + "factminor3tier"] = fact.tier();
        newAttrs[prefix + "factminor3name"] = fact.name();
        newAttrs[prefix + "factminor3status"] = fact.status();
    }

    setAttrs(newAttrs);
};

const setDefaultAttrs = (dict) => {
    let settings = Object.getOwnPropertyNames(dict);
    console.log(`Setting sheet attributes: ${settings}`);
    for (const key of settings) {
        console.log(`\tKey: ${key}\n\tval: ${dict[key]()}`);
        if (key) {
            setAttrs({
                [key]: dict[key]()
            });
        }
    }
};

const debugPrint = (obj) => {
    Object.keys(obj).forEach((prop) => {
        console.log(`    ${prop}:${obj[prop]}`);
    });
}

// Event: When a new character is created
on("sheet:opened", () => {
    getAttrs(["SheetSetup"], function(values) {
        var isSetup = values["SheetSetup"];
        if (!isSetup) {
            initialSetup();
            setAttrs({
                SheetSetup: "true"
            });
        }
    });
});

// Event: When an action rating is updated
var maxActions = 6;
var actionName = "pcskillval";
var attrName = "pcattrval";
var attrs = [1, 2, 3, 4, 5, 6];
//*
// pcattrval1
attrs.forEach((attrNum) => {
    let actions = [];
    let actionChangedEvents = [];

    for (var ii = 0; ii <= maxActions; ii++) {
        var act = `${actionName}${attrNum}${ii}`;
        actions.push(act);
        actionChangedEvents.push(`change:${act}`);
    }

    on(actionChangedEvents.join(" "), (arg) => {
        getAttrs(actions, (values) => {
            var attrVal = 0;
            Object.keys(values).forEach((val) => {
                if (val && parseInt(values[val]) > 0) attrVal++;
            })
            setAttrs({
                [`${attrName}${attrNum}`]: attrVal
            });
            console.log(`Attr ${attrNum} set to ${attrVal}`);
        })
    });
});

//*/