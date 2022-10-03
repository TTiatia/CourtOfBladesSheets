const metaData = {
    sheetVersion: "1.0",
    lastUpdate: "2022-08-10",
};


// shorter alias
const translate = (key) => { return getTranslationByKey(key) || `[${key}]`; };

const xpTriggers = {
    pc: [
        () => translate("PCXPTrigger1"),
        () => translate("PCXPTrigger2"),
    ],
    coterie: [
        () => translate("CoterieXPTrigger1"),
        () => translate("CoterieXPTrigger2"),
        () => translate("CoterieXPTrigger3"),
    ]
};

const lookup = {
    playbookNames: {
        bravo: () => translate("BravoPlaybookName"),
        hawk: () => translate("HawkPlaybookName"),
        eye: () => translate("EyePlaybookName"),
        couth: () => translate("CouthPlaybookName"),
        knack: () => translate("KnackPlaybookName"),
        key: () => translate("KeyPlaybookName"),
        kiss: () => translate("KissPlaybookName"),
        curse: () => translate("CursePlaybookName"),
    },
    playbookId: {
        0: "NotSet",
        1: "bravo",
        2: "hawk",
        3: "eye",
        4: "couth",
        5: "knack",
        6: "key",
        7: "kiss",
        8: "curse",
        99: "custom",
        bravo: 1,
        hawk: 2,
        eye: 3,
        couth: 4,
        knack: 5,
        key: 6,
        kiss: 7,
        curse: 8,
        custom: 9
    },
    actions: {
        body: () => "pcattrval1",
        skulk: () => "pcskillval11",
        skirmish: () => "pcskillval12",
        maneuver: () => "pcskillval13",
        wreck: () => "pcskillval14",

        mind: () => "pcattrval2",
        tinker: () => "pcskillval21",
        study: () => "pcskillval22",
        survey: () => "pcskillval23",
        hunt: () => "pcskillval24",

        spirit: () => "pcattrval3",
        channel: () => "pcskillval31",
        command: () => "pcskillval32",
        consort: () => "pcskillval33",
        sway: () => "pcskillval34",
    },
    coterieId: {
        0: "NotSet",
        1: "corvetto",
        2: "battalia",
        3: "bastien",
        4: "lovell",
        5: "alMari",
        6: "elanda",
        99: "custom",
    },
    coterieNames: {
        corvetto: () => translate("HouseCorvetto"),
        battalia: () => translate("HouseBattalia"),
        bastien: () => translate("HouseBastien"),
        lovell: () => translate("HouseLovell"),
        alMari: () => translate("HouseAlMari"),
        elanda: () => translate("HouseElanda"),
    }
};

const pcDefaults = {

    // Sheet settings
    setting_attrcount: () => "3",
    setting_attrskillcount1: () => "4",
    setting_attrskillcount2: () => "4",
    setting_attrskillcount3: () => "4",
    hideGMTurnRolls: () => "1",

    // PC attributes & actions
    pcattrname1: () => translate("Body"),
    pcattrdesc1: () => translate("BodyResistanceDescription"),
    pcattrval1: () => "0",
    pcattrxp1: () => "0",
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
    pcattrxp2: () => "0",
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
    pcattrxp3: () => "0",
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
};

const specialArmors = {
    bravo: () => translate("BravoSpecialArmorDescription"),
    hawk: () => translate("HawkSpecialArmorDescription"),
    eye: () => translate("EyeSpecialArmorDescription"),
    couth: () => translate("CouthSpecialArmorDescription"),
    knack: () => translate("KnackSpecialArmorDescription"),
    key: () => translate("KeySpecialArmorDescription"),
    kiss: () => translate("KissSpecialArmorDescription"),
    kissWeakness: () => translate("KissIronWeaknessDescription"),
    curse: () => translate("CurseSpecialArmorDescription"),
    curseHarm: () => translate("CurseHarmDescription"),
};

const specialFeatures = {
    corvetto: {
        name: () => translate("CoterieFeature_CorvettoName"),
        desc: () => translate("CoterieFeature_CorvettoDescription"),
    },
    battalia: {
        name: () => translate("CoterieFeature_BattaliaName"),
        desc: () => translate("CoterieFeature_BattaliaDescription"),
    },
    bastien: {
        name: () => translate("CoterieFeature_BastienName"),
        desc: () => translate("CoterieFeature_BastienDescription"),
    },
    lovell: {
        name: () => translate("CoterieFeature_LovellName"),
        desc: () => translate("CoterieFeature_LovellDescription"),
    },
    alMari: {
        name: () => translate("CoterieFeature_AlMariName"),
        desc: () => translate("CoterieFeature_AlMariDescription"),
    },
    elanda: {
        name: () => translate("CoterieFeature_ElandaName"),
        desc: () => translate("CoterieFeature_ElandaDescription"),
    },
};

const playbookAbilities = {
    veteran: {
        name: () => translate("PlaybookAbility_VeteranName"),
        desc: () => translate("PlaybookAbility_VeteranDescription"),
    },
    // Bravo
    houseGuard: {
        name: () => translate("PlaybookAbility_HouseGuardName"),
        desc: () => translate("PlaybookAbility_HouseGuardDescription"),
    },
    bloodyButUnbowed: {
        name: () => translate("PlaybookAbility_BloodyButUnbowedName"),
        desc: () => translate("PlaybookAbility_BloodyButUnbowedDescription"),
    },
    unstoppable: {
        name: () => translate("PlaybookAbility_UnstoppableName"),
        desc: () => translate("PlaybookAbility_UnstoppableDescription"),
    },
    codeDuello: {
        name: () => translate("PlaybookAbility_CodeDuelloName"),
        desc: () => translate("PlaybookAbility_CodeDuelloDescription"),
    },
    honorGuard: {
        name: () => translate("PlaybookAbility_HonorGuardName"),
        desc: () => translate("PlaybookAbility_HonorGuardDescription"),
    },
    uponANeedle: {
        name: () => translate("PlaybookAbility_UponANeedleName"),
        desc: () => translate("PlaybookAbility_UponANeedleDescription"),
    },
    gapInTheArmor: {
        name: () => translate("PlaybookAbility_GapInTheArmorName"),
        desc: () => translate("PlaybookAbility_GapInTheArmorDescription"),
    },
    // Hawk
    terrifying: {
        name: () => translate("PlaybookAbility_TerrifyingName"),
        desc: () => translate("PlaybookAbility_TerrifyingDescription"),
    },
    predator: {
        name: () => translate("PlaybookAbility_PredatorName"),
        desc: () => translate("PlaybookAbility_PredatorDescription"),
    },
    sharpshooter: {
        name: () => translate("PlaybookAbility_SharpshooterName"),
        desc: () => translate("PlaybookAbility_SharpshooterDescription"),
    },
    triage: {
        name: () => translate("PlaybookAbility_TriageName"),
        desc: () => translate("PlaybookAbility_TriageDescription"),
    },
    callTheTarget: {
        name: () => translate("PlaybookAbility_CallTheTargetName"),
        desc: () => translate("PlaybookAbility_CallTheTargetDescription"),
    },
    baitedAndSet: {
        name: () => translate("PlaybookAbility_BaitedAndSetName"),
        desc: () => translate("PlaybookAbility_BaitedAndSetDescription"),
    },
    leaveNoGround: {
        name: () => translate("PlaybookAbility_LeaveNoGroundName"),
        desc: () => translate("PlaybookAbility_LeaveNoGroundDescription"),
    },
    // Eye
    betterLuckyThanGood: {
        name: () => translate("PlaybookAbility_BetterLuckyThanGoodName"),
        desc: () => translate("PlaybookAbility_BetterLuckyThanGoodDescription"),
    },
    likeWater: {
        name: () => translate("PlaybookAbility_LikeWaterName"),
        desc: () => translate("PlaybookAbility_LikeWaterDescription"),
    },
    infiltrator: {
        name: () => translate("PlaybookAbility_InfiltratorName"),
        desc: () => translate("PlaybookAbility_InfiltratorDescription"),
    },
    shadow: {
        name: () => translate("PlaybookAbility_ShadowName"),
        desc: () => translate("PlaybookAbility_ShadowDescription"),
    },
    inMyShadow: {
        name: () => translate("PlaybookAbility_InMyShadowName"),
        desc: () => translate("PlaybookAbility_InMyShadowDescription"),
    },
    saboteur: {
        name: () => translate("PlaybookAbility_SaboteurName"),
        desc: () => translate("PlaybookAbility_SaboteurDescription"),
    },
    artfulTresspass: {
        name: () => translate("PlaybookAbility_ArtfulTrespassName"),
        desc: () => translate("PlaybookAbility_ArtfulTrespassDescription"),
    },
    // Couth
    partyCrasher: {
        name: () => translate("PlaybookAbility_PartyCrasherName"),
        desc: () => translate("PlaybookAbility_PartyCrasherDescription"),
    },
    theLordsCharm: {
        name: () => translate("PlaybookAbility_TheLordsCharmName"),
        desc: () => translate("PlaybookAbility_TheLordsCharmDescription"),
    },
    dontMakeMeCarryYou: {
        name: () => translate("PlaybookAbility_DontMakeMeCarryYouName"),
        desc: () => translate("PlaybookAbility_DontMakeMeCarryYouDescription"),
    },
    betterToBeATigerThanAMan: {
        name: () => translate("PlaybookAbility_BetterToBeAtTigerThanAManName"),
        desc: () => translate("PlaybookAbility_BetterToBeAtTigerThanAManDescription"),
    },
    vengeful: {
        name: () => translate("PlaybookAbility_VengefulName"),
        desc: () => translate("PlaybookAbility_VengefulDescription"),
    },
    livingTheDream: {
        name: () => translate("PlaybookAbility_LivingTheDreamName"),
        desc: () => translate("PlaybookAbility_LivingTheDreamDescription"),
    },
    badReptuation: {
        name: () => translate("PlaybookAbility_BadReputationName"),
        desc: () => translate("PlaybookAbility_BadReputationDescription"),
    },
    // Knack
    invocation: {
        name: () => translate("PlaybookAbility_InvocationName"),
        desc: () => translate("PlaybookAbility_InvocationDescription"),
    },
    rendTheWeave: {
        name: () => translate("PlaybookAbility_RendTheWeaveName"),
        desc: () => translate("PlaybookAbility_RendTheWeaveDescription"),
    },
    theOldeTongue: {
        name: () => translate("PlaybookAbility_TheOldeTongueName"),
        desc: () => translate("PlaybookAbility_TheOldeTongueDescription"),
    },
    openMind: {
        name: () => translate("PlaybookAbility_OpenMindName"),
        desc: () => translate("PlaybookAbility_OpenMindDescription"),
    },
    scrying: {
        name: () => translate("PlaybookAbility_ScryingName"),
        desc: () => translate("PlaybookAbility_ScryingDescription"),
    },
    fascinate: {
        name: () => translate("PlaybookAbility_FascinateName"),
        desc: () => translate("PlaybookAbility_FascinateDescription"),
    },
    pry: {
        name: () => translate("PlaybookAbility_PryName"),
        desc: () => translate("PlaybookAbility_PryDescription"),
    },
    // key
    skeletonKey: {
        name: () => translate("PlaybookAbility_SkeletonKeyName"),
        desc: () => translate("PlaybookAbility_SkeletonKeyDescription"),
    },
    expertise: {
        name: () => translate("PlaybookAbility_ExpertiseName"),
        desc: () => translate("PlaybookAbility_ExpertiseDescription"),
    },
    iKnowThisTune: {
        name: () => translate("PlaybookAbility_IKnowThisTuneName"),
        desc: () => translate("PlaybookAbility_IKnowThisTuneDescription"),
    },
    foresight: {
        name: () => translate("PlaybookAbility_ForesightName"),
        desc: () => translate("PlaybookAbility_ForesightDescription"),
    },
    underTheRug: {
        name: () => translate("PlaybookAbility_UnderTheRugName"),
        desc: () => translate("PlaybookAbility_UnderTheRugDescription"),
    },
    aGoodName: {
        name: () => translate("PlaybookAbility_AGoodNameName"),
        desc: () => translate("PlaybookAbility_AGoodNameDescription"),
    },
    attentionToDetail: {
        name: () => translate("PlaybookAbility_AttentionToDetailName"),
        desc: () => translate("PlaybookAbility_AttentionToDetailDescription"),
    },
    // Kiss    
    bargainAndBalance: {
        name: () => translate("PlaybookAbility_BargainAndBalanceName"),
        desc: () => translate("PlaybookAbility_BargainAndBalanceDescription"),
    },
    likeCallsToLike: {
        name: () => translate("PlaybookAbility_LikeCallsToLikeName"),
        desc: () => translate("PlaybookAbility_LikeCallsToLikeDescription"),
    },
    toxicLove: {
        name: () => translate("PlaybookAbility_ToxicLoveName"),
        desc: () => translate("PlaybookAbility_ToxicLoveDescription"),
    },
    glamour: {
        name: () => translate("PlaybookAbility_GlamourName"),
        desc: () => translate("PlaybookAbility_GlamourDescription"),
    },
    naturalSummoning: {
        name: () => translate("PlaybookAbility_NaturalSummoningName"),
        desc: () => translate("PlaybookAbility_NaturalSummoningDescription"),
    },
    lentSkin: {
        name: () => translate("PlaybookAbility_LentSkinName"),
        desc: () => translate("PlaybookAbility_LentSkinDescription"),
    },
    theFaerieReel: {
        name: () => translate("PlaybookAbility_TheFaerieReelName"),
        desc: () => translate("PlaybookAbility_TheFaerieReelDescription"),
    },
    // Curse
    hellHoldsNoSurprises: {
        name: () => translate("PlaybookAbility_HellHoldsNoSurprisesName"),
        desc: () => translate("PlaybookAbility_HellHoldsNoSurprisesDescription"),
    },
    bleedingLove: {
        name: () => translate("PlaybookAbility_BleedingLoveName"),
        desc: () => translate("PlaybookAbility_BleedingLoveDescription"),
    },
    valorBeyondDeath: {
        name: () => translate("PlaybookAbility_ValorBeyondDeathName"),
        desc: () => translate("PlaybookAbility_ValorBeyondDeathDescription"),
    },
    voidBlade: {
        name: () => translate("PlaybookAbility_VoidBladeName"),
        desc: () => translate("PlaybookAbility_VoidBladeDescription"),
    },
    poisonersBlade: {
        name: () => translate("PlaybookAbility_PoisonersBladeName"),
        desc: () => translate("PlaybookAbility_PoisonersBladeDescription"),
    },
    storyCollector: {
        name: () => translate("PlaybookAbility_StoryCollectorName"),
        desc: () => translate("PlaybookAbility_StoryCollectorDescription"),
    },
    immortalTolerance: {
        name: () => translate("PlaybookAbility_ImmortalToleranceName"),
        desc: () => translate("PlaybookAbility_ImmortalToleranceDescription"),
    },
};

const coterieAbilities = {
    mysteriousWays: {
        name: () => translate("CoterieAbility_MysteriousWaysName"),
        desc: () => translate("CoterieAbility_MysteriousWaysDescription"),
    },
    outTime: {
        name: () => translate("CoterieAbility_OurTimeName"),
        desc: () => translate("CoterieAbility_OurTimeDescription"),
    },
    silentFootfalls: {
        name: () => translate("CoterieAbility_SilentFootfallsName"),
        desc: () => translate("CoterieAbility_SilentFootfallsDescription"),
    },
    superstitious: {
        name: () => translate("CoterieAbility_SuperstitiousName"),
        desc: () => translate("CoterieAbility_SuperstitiousDescription"),
    },
    byTheThroat: {
        name: () => translate("CoterieAbility_ByTheThroatName"),
        desc: () => translate("CoterieAbility_ByTheThroatDescription"),
    },
    oursByRight: {
        name: () => translate("CoterieAbility_OursByRightName"),
        desc: () => translate("CoterieAbility_OursByRightDescription"),
    },
    whoDoYouWorkFor: {
        name: () => translate("CoterieAbility_WhoDoYouWorkForName"),
        desc: () => translate("CoterieAbility_WhoDoYouWorkForDescription"),
    },


    deterrence: {
        name: () => translate("CoterieAbility_DeterrenceName"),
        desc: () => translate("CoterieAbility_DeterrenceDescription"),
    },
    fortified: {
        name: () => translate("CoterieAbility_FortifiedName"),
        desc: () => translate("CoterieAbility_FortifiedDescription"),
    },
    ironclad: {
        name: () => translate("CoterieAbility_IroncladName"),
        desc: () => translate("CoterieAbility_IroncladDescription"),
    },
    justCause: {
        name: () => translate("CoterieAbility_JustCauseName"),
        desc: () => translate("CoterieAbility_JustCauseDescription"),
    },
    theOldGuard: {
        name: () => translate("CoterieAbility_TheOldGuardName"),
        desc: () => translate("CoterieAbility_TheOldGuardDescription"),
    },
    chooseYourGround: {
        name: () => translate("CoterieAbility_ChooseYourGroundName"),
        desc: () => translate("CoterieAbility_ChooseYourGroundDescription"),
    },
    uponOurHonor: {
        name: () => translate("CoterieAbility_UponOurHonorName"),
        desc: () => translate("CoterieAbility_UponOurHonorDescription"),
    },


    careAndPatience: {
        name: () => translate("CoterieAbility_CareAndPatienceName"),
        desc: () => translate("CoterieAbility_CareAndPatienceDescription"),
    },
    mindful: {
        name: () => translate("CoterieAbility_MindfulName"),
        desc: () => translate("CoterieAbility_MindfulDescription"),
    },
    wellEarnedAcclaim: {
        name: () => translate("CoterieAbility_WellEarnedAcclaimName"),
        desc: () => translate("CoterieAbility_WellEarnedAcclaimDescription"),
    },
    aMatterOfCharity: {
        name: () => translate("CoterieAbility_AMatterOfCharityName"),
        desc: () => translate("CoterieAbility_AMatterOfCharityDescription"),
    },
    theWatersInWhichWeSwim: {
        name: () => translate("CoterieAbility_TheWatersInWhichWeSwimName"),
        desc: () => translate("CoterieAbility_TheWatersInWhichWeSwimDescription"),
    },
    strongerTogether: {
        name: () => translate("CoterieAbility_StrongerTogetherName"),
        desc: () => translate("CoterieAbility_StrongerTogetherDescription"),
    },
    notMeUsName: {
        name: () => translate("CoterieAbility_NotMeUsNameName"),
        desc: () => translate("CoterieAbility_NotMeUsNameDescription"),
    },

    illusoryDisguise: {
        name: () => translate("CoterieAbility_IllusoryDisguiseName"),
        desc: () => translate("CoterieAbility_IllusoryDisguiseDescription"),
    },
    itsNotWhoYouKnow: {
        name: () => translate("CoterieAbility_ItsNotWhoYouKnowName"),
        desc: () => translate("CoterieAbility_ItsNotWhoYouKnowDescription"),
    },
    itsWhatYouKnow: {
        name: () => translate("CoterieAbility_ItsWhatYouKnowName"),
        desc: () => translate("CoterieAbility_ItsWhatYouKnowDescription"),
    },
    warded: {
        name: () => translate("CoterieAbility_WardedName"),
        desc: () => translate("CoterieAbility_WardedDescription"),
    },
    waltz: {
        name: () => translate("CoterieAbility_WaltzName"),
        desc: () => translate("CoterieAbility_WaltzDescription"),
    },
    magicalMeans: {
        name: () => translate("CoterieAbility_MagicalMeansName"),
        desc: () => translate("CoterieAbility_MagicalMeansDescription"),
    },
    itsAlsoWhoYouKnow: {
        name: () => translate("CoterieAbility_ItsAlsoWhoYouKnowName"),
        desc: () => translate("CoterieAbility_ItsAlsoWhoYouKnowDescription"),
    },

    deadly: {
        name: () => translate("CoterieAbility_DeadlyName"),
        desc: () => translate("CoterieAbility_DeadlyDescription"),
    },
    able: {
        name: () => translate("CoterieAbility_AbleName"),
        desc: () => translate("CoterieAbility_AbleDescription"),
    },
    likeAHammer: {
        name: () => translate("CoterieAbility_LikeAHammerName"),
        desc: () => translate("CoterieAbility_LikeAHammerDescription"),
    },
    packTactics: {
        name: () => translate("CoterieAbility_PackTacticsName"),
        desc: () => translate("CoterieAbility_PackTacticsDescription"),
    },
    sneeringDisregard: {
        name: () => translate("CoterieAbility_SneeringDisregardName"),
        desc: () => translate("CoterieAbility_SneeringDisregardDescription"),
    },
    warDogs: {
        name: () => translate("CoterieAbility_WarDogsName"),
        desc: () => translate("CoterieAbility_WarDogsDescription"),
    },
    strikeFear: {
        name: () => translate("CoterieAbility_StrikeFearName"),
        desc: () => translate("CoterieAbility_StrikeFearDescription"),
    },

    circumspect: {
        name: () => translate("CoterieAbility_CircumspectName"),
        desc: () => translate("CoterieAbility_CircumspectDescription"),
    },
    wit: {
        name: () => translate("CoterieAbility_WitName"),
        desc: () => translate("CoterieAbility_WitDescription"),
    },
    merchantWarriors: {
        name: () => translate("CoterieAbility_MerchantWarriorsName"),
        desc: () => translate("CoterieAbility_MerchantWarriorsDescription"),
    },
    counterfeiting: {
        name: () => translate("CoterieAbility_CounterfeitingName"),
        desc: () => translate("CoterieAbility_CounterfeitingDescription"),
    },
    theWeirdStuff: {
        name: () => translate("CoterieAbility_TheWeirdStuffName"),
        desc: () => translate("CoterieAbility_TheWeirdStuffDescription"),
    },
    highSociety: {
        name: () => translate("CoterieAbility_HighSocietyName"),
        desc: () => translate("CoterieAbility_HighSocietyDescription"),
    },
    patronage: {
        name: () => translate("CoterieAbility_PatronageName"),
        desc: () => translate("CoterieAbility_PatronageDescription"),
    },
};

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

const playbooks = {
    bravo: {
        id: 1,
        traumaType: () => 1,
        title: () => translate("BravoPlaybookName"),
        subtitle: () => translate("BravoPlaybookDescription"),
        abilities: [
            playbookAbilities.houseGuard,
            playbookAbilities.bloodyButUnbowed,
            playbookAbilities.unstoppable,
            playbookAbilities.codeDuello,
            playbookAbilities.honorGuard,
            playbookAbilities.uponANeedle,
            playbookAbilities.gapInTheArmor,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.bravo,
        ],
        items: [{
                name: () => translate("AFineCourtlyBlade"),
                desc: () => translate("AFineCourtlyBladeItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFineDreadBlade"),
                desc: () => translate("AFineDreadBladeItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ADuelistsGauntlet"),
                desc: () => translate("ADuelistsGauntletItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ABadgeOfHonor"),
                desc: () => translate("ABadgeOfHonorItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("ACourtlyFavor"),
                desc: () => translate("ACourtlyFavorItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("AFineWit"),
            desc: () => translate("AFineWitItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.maneuver()]: "1",
            [lookup.actions.skirmish()]: "2"
        },
        attributes: {
            [lookup.actions.body()]: "2",
        },
        bonds: [
            translate("BravoBond1"),
            translate("BravoBond2"),
            translate("BravoBond3"),
            translate("BravoBond4"),
            translate("BravoBond5"),
            translate("BravoBond6"),
        ],
        contacts: [{
                name: () => translate("Maestra"),
                desc: () => translate("AMasterAtArms"),
            },
            {
                name: () => translate("Blair"),
                desc: () => translate("AFawningNoble"),
            },
            {
                name: () => translate("Vincenzo"),
                desc: () => translate("AFormerPatron"),
            },
            {
                name: () => translate("Feng"),
                desc: () => translate("ABladeSmith"),
            },
            {
                name: () => translate("Ari"),
                desc: () => translate("AChildhoodRival"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("BravoXPTrigger1"),
            second: () => translate("BravoXPTrigger2"),
        }
    },
    hawk: {
        id: 2,
        traumaType: () => 1,
        title: () => translate("HawkPlaybookName"),
        subtitle: () => translate("HawkPlaybookDescription"),
        abilities: [
            playbookAbilities.terrifying,
            playbookAbilities.predator,
            playbookAbilities.sharpshooter,
            playbookAbilities.triage,
            playbookAbilities.callTheTarget,
            playbookAbilities.baitedAndSet,
            playbookAbilities.leaveNoGround,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.hawk,
        ],
        items: [{
                name: () => translate("AFineRangedWeapon"),
                desc: () => translate("AFineRangedWeaponItemDescription"),
                load: () => "2",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFineHeavyCloak"),
                desc: () => translate("AFineHeavyCloakItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AHandyRestraint"),
                desc: () => translate("AHandyRestraintItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AHuntingCompanion"),
                desc: () => translate("AHuntingCompanionItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("AFineSpyglass"),
                desc: () => translate("AFineSpyglassItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("AFineIronNerve"),
            desc: () => translate("AFineIronNerveItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.command()]: "1",
            [lookup.actions.hunt()]: "2"
        },
        attributes: {
            [lookup.actions.mind()]: "1",
            [lookup.actions.spirit()]: "1",
        },
        bonds: [
            translate("HawkBond1"),
            translate("HawkBond2"),
            translate("HawkBond3"),
            translate("HawkBond4"),
            translate("HawkBond5"),
            translate("HawkBond6"),
        ],
        contacts: [{
                name: () => translate("RedCrow"),
                desc: () => translate("AHunter"),
            },
            {
                name: () => translate("Ishana"),
                desc: () => translate("AnInformant"),
            },
            {
                name: () => translate("Farid,"),
                desc: () => translate("ATavernOwner"),
            },
            {
                name: () => translate("Lucius"),
                desc: () => translate("AMemberOfTheWatch"),
            },
            {
                name: () => translate("Sean"),
                desc: () => translate("AGangBoss"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("HawkXPTrigger1"),
            second: () => translate("HawkXPTrigger2"),
        }
    },
    eye: {
        id: 3,
        traumaType: () => 1,
        title: () => translate("EyePlaybookName"),
        subtitle: () => translate("EyePlaybookDescription"),
        abilities: [
            playbookAbilities.betterLuckyThanGood,
            playbookAbilities.likeWater,
            playbookAbilities.infiltrator,
            playbookAbilities.shadow,
            playbookAbilities.inMyShadow,
            playbookAbilities.saboteur,
            playbookAbilities.artfulTresspass,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.eye,
        ],
        items: [{
                name: () => translate("AFineDisguise"),
                desc: () => translate("AFineDisguiseItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFineSetofLockpicks"),
                desc: () => translate("AFineSetofLockpicksItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("APolishedSteelMirror"),
                desc: () => translate("APolishedSteelMirrorItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFineCoverIdentity"),
                desc: () => translate("AFineCoverIdentityItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("AVialOfSweetsleep"),
                desc: () => translate("AVialOfSweetsleepItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("AFinePhotographicMemory"),
            desc: () => translate("AFinePhotographicMemoryItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.survey()]: "1",
            [lookup.actions.skulk()]: "2"
        },
        attributes: {
            [lookup.actions.mind()]: "1",
            [lookup.actions.body()]: "1",
        },
        bonds: [
            translate("EyeBond1"),
            translate("EyeBond2"),
            translate("EyeBond3"),
            translate("EyeBond4"),
            translate("EyeBond5"),
            translate("EyeBond6"),
        ],
        contacts: [{
                name: () => translate("Frankie"),
                desc: () => translate("ALocksmith"),
            },
            {
                name: () => translate("Armand"),
                desc: () => translate("ABuskin"),
            },
            {
                name: () => translate("Alaric"),
                desc: () => translate("AMercenary"),
            },
            {
                name: () => translate("Bianchi"),
                desc: () => translate("AChamberServeant"),
            },
            {
                name: () => translate("Campania"),
                desc: () => translate("ACouncilSecretary"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("EyeXPTrigger1"),
            second: () => translate("EyeXPTrigger2"),
        }
    },
    couth: {
        id: 4,
        traumaType: () => 1,
        title: () => translate("CouthPlaybookName"),
        subtitle: () => translate("CouthPlaybookDescription"),
        abilities: [
            playbookAbilities.partyCrasher,
            playbookAbilities.theLordsCharm,
            playbookAbilities.dontMakeMeCarryYou,
            playbookAbilities.betterToBeATigerThanAMan,
            playbookAbilities.vengeful,
            playbookAbilities.livingTheDream,
            playbookAbilities.badReptuation,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.couth,
        ],
        items: [{
                name: () => translate("AFrighteningWeapon"),
                desc: () => translate("AFrighteningWeaponItemDescription"),
                load: () => "2",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("FineWreckingTools"),
                desc: () => translate("FineWreckingToolsItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("SomethingDestructive"),
                desc: () => translate("SomethingDestructiveItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("FineInebriants"),
                desc: () => translate("FineInebriantsItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("AFineBitOfBlackmail"),
                desc: () => translate("AFineBitOfBlackmailItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("ALuckyBreeak"),
            desc: () => translate("ALuckyBreeakItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.wreck()]: "1",
            [lookup.actions.consort()]: "2"
        },
        attributes: {
            [lookup.actions.mind()]: "1",
            [lookup.actions.body()]: "1",
        },
        bonds: [
            translate("CouthBond1"),
            translate("CouthBond2"),
            translate("CouthBond3"),
            translate("CouthBond4"),
            translate("CouthBond5"),
            translate("CouthBond6"),
        ],
        contacts: [{
                name: () => translate("Honor"),
                desc: () => translate("AnOrphanageHeadmistress"),
            },
            {
                name: () => translate("Wren"),
                desc: () => translate("AJiltedLover"),
            },
            {
                name: () => translate("Lucky"),
                desc: () => translate("AViciousThug"),
            },
            {
                name: () => translate("Meifeng"),
                desc: () => translate("ATempleAcolyte"),
            },
            {
                name: () => translate("Benecio"),
                desc: () => translate("AGondoliere"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("CouthXPTrigger1"),
            second: () => translate("CouthXPTrigger2"),
        }
    },
    knack: {
        id: 5,
        traumaType: () => 1,
        title: () => translate("KnackPlaybookName"),
        subtitle: () => translate("KnackPlaybookDescription"),
        abilities: [
            playbookAbilities.invocation,
            playbookAbilities.rendTheWeave,
            playbookAbilities.theOldeTongue,
            playbookAbilities.openMind,
            playbookAbilities.scrying,
            playbookAbilities.fascinate,
            playbookAbilities.pry,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.knack,
        ],
        items: [{
                name: () => translate("AFineArcaneFocus"),
                desc: () => translate("AFineArcaneFocusItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ImpressiveCostume"),
                desc: () => translate("ImpressiveCostumeItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("RitualImplements"),
                desc: () => translate("RitualImplementsItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFamiliarSpirit"),
                desc: () => translate("AFamiliarSpiritItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("TheLadysKiss"),
                desc: () => translate("TheLadysKissItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("AVulgarDisplayOfPower"),
            desc: () => translate("AVulgarDisplayOfPowerItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.study()]: "1",
            [lookup.actions.channel()]: "2"
        },
        attributes: {
            [lookup.actions.mind()]: "1",
            [lookup.actions.spirit()]: "1",
        },
        bonds: [
            translate("KnackBond1"),
            translate("KnackBond2"),
            translate("KnackBond3"),
            translate("KnackBond4"),
            translate("KnackBond5"),
            translate("KnackBond6"),
        ],
        contacts: [{
                name: () => translate("Moon"),
                desc: () => translate("AnUnrequitedLove"),
            },
            {
                name: () => translate("Owyn"),
                desc: () => translate("AFormerTeacher"),
            },
            {
                name: () => translate("Anaisha"),
                desc: () => translate("AMercy"),
            },
            {
                name: () => translate("Clemenza"),
                desc: () => translate("AnArcaneDealer"),
            },
            {
                name: () => translate("Farina"),
                desc: () => translate("ADilettante"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("KnackXPTrigger1"),
            second: () => translate("KnackXPTrigger2"),
        }
    },
    key: {
        id: 6,
        traumaType: () => 1,
        title: () => translate("KeyPlaybookName"),
        subtitle: () => translate("KeyPlaybookDescription"),
        abilities: [
            playbookAbilities.skeletonKey,
            playbookAbilities.expertise,
            playbookAbilities.iKnowThisTune,
            playbookAbilities.foresight,
            playbookAbilities.underTheRug,
            playbookAbilities.aGoodName,
            playbookAbilities.attentionToDetail,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.key,
        ],
        items: [{
                name: () => translate("FineTinkeringTools"),
                desc: () => translate("FineTinkeringToolsItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AConcealableWeapon"),
                desc: () => translate("AConcealableWeaponItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("FineCourtlyClothes"),
                desc: () => translate("FineCourtlyClothesItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFineInvitation"),
                desc: () => translate("AFineInvitationItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("ASmallPriceyGift"),
                desc: () => translate("ASmallPriceyGiftItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        permissions: [{
            name: () => translate("ABelievableExcuse"),
            desc: () => translate("ABelievableExcuseItemDescription"),
            load: () => "1",
            style: () => itemStyles.italics,
        }, ],
        actions: {
            [lookup.actions.tinker()]: "1",
            [lookup.actions.sway()]: "2"
        },
        attributes: {
            [lookup.actions.mind()]: "1",
            [lookup.actions.spirit()]: "1",
        },
        bonds: [
            translate("KeyBond1"),
            translate("KeyBond2"),
            translate("KeyBond3"),
            translate("KeyBond4"),
            translate("KeyBond5"),
            translate("KeyBond6"),
        ],
        contacts: [{
                name: () => translate("Babette"),
                desc: () => translate("ABanker"),
            },
            {
                name: () => translate("Elijah"),
                desc: () => translate("AMasterArchitect"),
            },
            {
                name: () => translate("Jian"),
                desc: () => translate("AMasterCraftsman"),
            },
            {
                name: () => translate("Alisha"),
                desc: () => translate("ADiplomat"),
            },
            {
                name: () => translate("Genovese"),
                desc: () => translate("AChildhoodFriend"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("KeyXPTrigger1"),
            second: () => translate("KeyXPTrigger2"),
        }
    },
    kiss: {
        id: 7,
        traumaType: () => 2,
        title: () => translate("KissPlaybookName"),
        subtitle: () => translate("KissPlaybookDescription"),
        abilities: [
            playbookAbilities.bargainAndBalance,
            playbookAbilities.likeCallsToLike,
            playbookAbilities.toxicLove,
            playbookAbilities.glamour,
            playbookAbilities.naturalSummoning,
            playbookAbilities.lentSkin,
            playbookAbilities.theFaerieReel,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.kissWeakness,
            specialArmors.kiss,
        ],
        items: [{
                name: () => translate("ThePerfectEnsemble"),
                desc: () => translate("ThePerfectEnsembleItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ALengthOfFaerieRope"),
                desc: () => translate("ALengthOfFaerieRopeItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AMirrorThatReflectsTruth"),
                desc: () => translate("AMirrorThatReflectsTruthItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("AFavorFromTheFaeCourt"),
                desc: () => translate("AFavorFromTheFaeCourtItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
        ],
        permissions: [{
                name: () => translate("AnInfectiousLaugh"),
                desc: () => translate("AnInfectiousLaughItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("OtherworldlyCharm"),
                desc: () => translate("OtherworldlyCharmItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        actions: {
            [lookup.actions.consort()]: "1",
            [lookup.actions.channel()]: "2"
        },
        attributes: {
            [lookup.actions.spirit()]: "2",
        },
        bonds: [
            translate("KissBond1"),
            translate("KissBond2"),
            translate("KissBond3"),
            translate("KissBond4"),
            translate("KissBond5"),
            translate("KissBond6"),
        ],
        contacts: [{
                name: () => translate("Dimitrius"),
                desc: () => translate("AnObsessedScholar"),
            },
            {
                name: () => translate("Leonato"),
                desc: () => translate("AnInventor"),
            },
            {
                name: () => translate("Xie"),
                desc: () => translate("AnOldFlame"),
            },
            {
                name: () => translate("Blaze"),
                desc: () => translate("AClothier"),
            },
            {
                name: () => translate("Goya"),
                desc: () => translate("ASprite"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("KissXPTrigger1"),
            second: () => translate("KissXPTrigger2"),
        }
    },
    curse: {
        id: 8,
        traumaType: () => 2,
        title: () => translate("CursePlaybookName"),
        subtitle: () => translate("CursePlaybookDescription"),
        abilities: [
            playbookAbilities.hellHoldsNoSurprises,
            playbookAbilities.bleedingLove,
            playbookAbilities.valorBeyondDeath,
            playbookAbilities.voidBlade,
            playbookAbilities.poisonersBlade,
            playbookAbilities.storyCollector,
            playbookAbilities.immortalTolerance,
            playbookAbilities.veteran,
        ],
        armorAbilities: [
            specialArmors.curse,
            specialArmors.curseHarm,
        ],
        items: [{
                name: () => translate("AnAncientWeapon"),
                desc: () => translate("AnAncientWeaponItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ASymbolOfTheDreadEmpire"),
                desc: () => translate("ASymbolOfTheDreadEmpireItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ALanternThatCastsShadow"),
                desc: () => translate("ALanternThatCastsShadowItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
            {
                name: () => translate("ADoseOfWeepingBell"),
                desc: () => translate("ADoseOfWeepingBellItemDescription"),
                load: () => "1",
                style: () => itemStyles.normal,
            },
        ],
        permissions: [{
                name: () => translate("ABloodChillingGlare"),
                desc: () => translate("ABloodChillingGlareItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
            {
                name: () => translate("APropheticDream"),
                desc: () => translate("APropheticDreamItemDescription"),
                load: () => "1",
                style: () => itemStyles.italics,
            },
        ],
        actions: {
            [lookup.actions.hunt()]: "1",
            [lookup.actions.skirmish()]: "1",
            [lookup.actions.command()]: "1"
        },
        attributes: {
            [lookup.actions.body()]: "2",
            [lookup.actions.spirit()]: "1",
        },
        bonds: [
            translate("CurseBond1"),
            translate("CurseBond2"),
            translate("CurseBond3"),
            translate("CurseBond4"),
            translate("CurseBond5"),
            translate("CurseBond6"),
        ],
        contacts: [{
                name: () => translate("Goodman"),
                desc: () => translate("AHistorian"),
            },
            {
                name: () => translate("Lost"),
                desc: () => translate("APoisonMaker"),
            },
            {
                name: () => translate("Piero"),
                desc: () => translate("AGhost"),
            },
            {
                name: () => translate("Barlow"),
                desc: () => translate("AHorseThief"),
            },
            {
                name: () => translate("Amelia"),
                desc: () => translate("ADiva"),
            },
            {
                name: () => "?",
                desc: () => translate("AMemberOfTheCoteriesHouse"),
            },
        ],
        xp: {
            first: () => translate("KissXPTrigger1"),
            second: () => translate("KissXPTrigger2"),
        }
    }
};

const fillPlaybook = (pb) => {
    let newAttrs = {};

    // Set title and subtitle
    newAttrs["playbookName"] = pb.title();
    newAttrs["playbookDesc"] = pb.subtitle();

    // Set which trauma list to display. 1 = Scandals, 2 = Shatters.
    newAttrs["scandaltype"] = pb.traumaType();

    // Loop through and set initial Action and Attribute ratings
    Object.assign(newAttrs, pb.actions);

    // Loop through and add all Special Armor Abilities
    for (let arm of pb.armorAbilities) {
        let newId = generateRowID();
        let prefix = `repeating_armourability_${newId}_`;
        newAttrs[prefix + "armourAbilityDesc"] = arm();
        newAttrs[prefix + "armourAbilityActive"] = "1";
    }

    // Loop through and add all Special Abilities
    for (let abi of pb.abilities) {
        let newId = generateRowID();
        let prefix = `repeating_playbookability_${newId}_`;
        newAttrs[prefix + "playbookAbilityName"] = abi.name();
        newAttrs[prefix + "playbookAbilityDesc"] = abi.desc();
        newAttrs[prefix + "playbookAbilityActive"] = "false";
    }

    // Add playbook XP triggers
    newAttrs["pcxptriggers1"] = pb.xp.first();
    newAttrs["pcxptriggers2"] = pb.xp.second();

    // Loop through and add all playbook Special Permissions
    for (let perm of pb.permissions) {
        let newId = generateRowID();
        let prefix = `repeating_pcpermissions_${newId}_`;
        newAttrs[prefix + "pcpermissionname"] = perm.name();
        newAttrs[prefix + "pcpermissionstylestyle"] = perm.style();
        newAttrs[prefix + "pcpermissionstylesize"] = perm.load();
        newAttrs[prefix + "pcpermissiondesc"] = perm.desc();
        newAttrs[prefix + "pcpermissionvalue"] = "0";
    }

    // Loop through and add all playbook-specific items
    for (let item of pb.items) {
        let newId = generateRowID();
        let prefix = `repeating_pcplaybookitems_${newId}_`;
        newAttrs[prefix + "pcplaybookitemname"] = item.name();
        newAttrs[prefix + "pcplaybookitemstylestyle"] = item.style();
        newAttrs[prefix + "pcplaybookitemstylesize"] = item.load();
        newAttrs[prefix + "pcplaybookitemdesc"] = item.desc();
        newAttrs[prefix + "pcplaybookitemvalue"] = "0";
    }

    // Loop through and add contacts
    for (let con of pb.contacts) {
        let newId = generateRowID();
        let prefix = `repeating_pccontacts_${newId}_`;
        newAttrs[prefix + "contactname"] = con.name();
        newAttrs[prefix + "contactdesc"] = con.desc();
    }

    // Populate the Bonds
    newAttrs["pcbonds"] = pb.bonds.join("\n");

    setAttrs(newAttrs);
};

const coteries = {
    corvetto: {
        id: 1,
        title: () => translate("HouseCorvetto"),
        subtitle: () => translate("HouseCorvettoWords"),
        strength: () => translate("Magic"),
        healer: () => translate("Grace"),
        features: [
            specialFeatures.corvetto,
        ],
        abilities: [
            coterieAbilities.mysteriousWays,
            coterieAbilities.oursByRight,
            coterieAbilities.silentFootfalls,
            coterieAbilities.superstitious,
            coterieAbilities.byTheThroat,
            coterieAbilities.oursByRight,
            coterieAbilities.whoDoYouWorkFor,
        ],
        upgrades: [{
                name: () => translate("MasterKeysUpgradeName"),
                desc: () => translate("MasterKeysUpgradeDescription"),
            },
            {
                name: () => translate("GoodHelpUpgradeName"),
                desc: () => translate("GoodHelpUpgradeDescription"),
            },
            {
                name: () => translate("TheDauntingParlorUpgradeName"),
                desc: () => translate("TheDauntingParlorUpgradeDescription"),
            },
            {
                name: () => translate("CleverTailorsUpgradeName"),
                desc: () => translate("CleverTailorsUpgradeDescription"),
            }
        ],
        xp: () => translate("CorvettoXPTrigger"),
    },
    battalia: {
        id: 2,
        title: () => translate("HouseBattalia"),
        subtitle: () => translate("HouseBattaliaWords"),
        strength: () => translate("Force"),
        healer: () => translate("Physician"),
        features: [
            specialFeatures.battalia,
        ],
        abilities: [
            coterieAbilities.deterrence,
            coterieAbilities.fortified,
            coterieAbilities.ironclad,
            coterieAbilities.justCause,
            coterieAbilities.theOldGuard,
            coterieAbilities.chooseYourGround,
            coterieAbilities.uponOurHonor,
        ],
        upgrades: [{
                name: () => translate("VigilantUpgradeName"),
                desc: () => translate("VigilantUpgradeDescription"),
            },
            {
                name: () => translate("IncorruptibleUpgradeName"),
                desc: () => translate("IncorruptibleUpgradeDescription"),
            },
            {
                name: () => translate("ToTheLastManUpgradeName"),
                desc: () => translate("ToTheLastManUpgradeDescription"),
            },
            {
                name: () => translate("ThoroughbredsUpgradeName"),
                desc: () => translate("ThoroughbredsUpgradeDescription"),
            }
        ],
        xp: () => translate("BattaliaXPTrigger"),
    },
    bastien: {
        id: 3,
        title: () => translate("HouseBastien"),
        subtitle: () => translate("HouseBastienWords"),
        strength: () => translate("Transport"),
        healer: () => translate("Grace"),
        features: [
            specialFeatures.bastien,
        ],
        abilities: [
            coterieAbilities.careAndPatience,
            coterieAbilities.mindful,
            coterieAbilities.wellEarnedAcclaim,
            coterieAbilities.aMatterOfCharity,
            coterieAbilities.theWatersInWhichWeSwim,
            coterieAbilities.strongerTogether,
            coterieAbilities.notMeUsName,
        ],
        upgrades: [{
                name: () => translate("TheLadysBlessingUpgradeName"),
                desc: () => translate("TheLadysBlessingUpgradeDescription"),
            },
            {
                name: () => translate("ExtendedFamilyUpgradeName"),
                desc: () => translate("ExtendedFamilyUpgradeDescription"),
            },
            {
                name: () => translate("OpenHeartsToOpenEyesUpgradeName"),
                desc: () => translate("OpenHeartsToOpenEyesUpgradeDescription"),
            },
            {
                name: () => translate("TheLedgerUpgradeName"),
                desc: () => translate("TheLedgerUpgradeDescription"),
            }
        ],
        xp: () => translate("BastienXPTrigger"),
    },
    lovell: {
        id: 4,
        title: () => translate("HouseLovell"),
        subtitle: () => translate("HouseLovellWords"),
        strength: () => translate("Intelligence"),
        healer: () => translate("Grace"),
        features: [
            specialFeatures.lovell,
        ],
        abilities: [
            coterieAbilities.illusoryDisguise,
            coterieAbilities.itsNotWhoYouKnow,
            coterieAbilities.itsWhatYouKnow,
            coterieAbilities.warded,
            coterieAbilities.waltz,
            coterieAbilities.magicalMeans,
            coterieAbilities.itsAlsoWhoYouKnow,
        ],
        upgrades: [{
                name: () => translate("QuestionableContactsUpgradeName"),
                desc: () => translate("QuestionableContactsUpgradeDescription"),
            },
            {
                name: () => translate("AnEyeForTalentUpgradeName"),
                desc: () => translate("AnEyeForTalentUpgradeDescription"),
            },
            {
                name: () => translate("SanctumSanctorumUpgradeName"),
                desc: () => translate("SanctumSanctorumUpgradeDescription"),
            },
            {
                name: () => translate("BagOfHoldingUpgradeName"),
                desc: () => translate("BagOfHoldingUpgradeDescription"),
            }
        ],
        xp: () => translate("LovellXPTrigger"),
    },
    alMari: {
        id: 5,
        title: () => translate("HouseAlMari"),
        subtitle: () => translate("HouseAlMariWords"),
        strength: () => translate("Supply"),
        healer: () => translate("Physician"),
        features: [
            specialFeatures.alMari,
        ],
        abilities: [
            coterieAbilities.deadly,
            coterieAbilities.able,
            coterieAbilities.likeAHammer,
            coterieAbilities.packTactics,
            coterieAbilities.sneeringDisregard,
            coterieAbilities.warDogs,
            coterieAbilities.strikeFear,
        ],
        upgrades: [{
                name: () => translate("PreparedUpgradeName"),
                desc: () => translate("PreparedUpgradeDescription"),
            },
            {
                name: () => translate("SwordsWithoutNumberUpgradeName"),
                desc: () => translate("SwordsWithoutNumberUpgradeDescription"),
            },
            {
                name: () => translate("WellArmedUpgradeName"),
                desc: () => translate("WellArmedUpgradeDescription"),
            },
            {
                name: () => translate("InTheKnowUpgradeName"),
                desc: () => translate("InTheKnowUpgradeDescription"),
            }
        ],
        xp: () => translate("AlMariXPTrigger"),
    },
    elanda: {
        id: 6,
        title: () => translate("HouseElanda"),
        subtitle: () => translate("HouseElandaWords"),
        strength: () => translate("Wealth"),
        healer: () => translate("Physician"),
        features: [
            specialFeatures.elanda,
        ],
        abilities: [
            coterieAbilities.circumspect,
            coterieAbilities.wit,
            coterieAbilities.merchantWarriors,
            coterieAbilities.counterfeiting,
            coterieAbilities.theWeirdStuff,
            coterieAbilities.highSociety,
            coterieAbilities.patronage,
        ],
        upgrades: [{
                name: () => translate("IndustriousUpgradeName"),
                desc: () => translate("IndustriousUpgradeDescription"),
            },
            {
                name: () => translate("SlyContractsUpgradeName"),
                desc: () => translate("SlyContractsUpgradeDescription"),
            },
            {
                name: () => translate("FactorumFactotumUpgradeName"),
                desc: () => translate("FactorumFactotumUpgradeDescription"),
            },
            {
                name: () => translate("TheRightToolForTheJobUpgradeName"),
                desc: () => translate("TheRightToolForTheJobUpgradeDescription"),
            }
        ],
        xp: () => translate("ElandaXPTrigger"),
    },
};

const fillCoterie = (cot) => {
    let newAttrs = {};

    // Set title and subtitle
    newAttrs["housename"] = cot.title();
    newAttrs["housedesc"] = cot.subtitle();

    // Set coterie details
    newAttrs["housestrengths"] = cot.strength() + ", ";
    newAttrs["househealer"] = cot.healer();

    // Loop through and add all Special Features
    for (let feat of cot.features) {
        let newId = generateRowID();
        let prefix = `repeating_housefeatures_${newId}_`;
        newAttrs[prefix + "housefeaturename"] = feat.name();
        newAttrs[prefix + "housefeaturedes"] = feat.desc();
        newAttrs[prefix + "housefeatureenabled"] = "1";
    }

    // Loop through and add all Special Abilities
    for (let abi of cot.abilities) {
        let newId = generateRowID();
        let prefix = `repeating_houseability_${newId}_`;
        newAttrs[prefix + "houseAbilityName"] = abi.name();
        newAttrs[prefix + "houseAbilityDesc"] = abi.desc();
        newAttrs[prefix + "houseAbilityActive"] = "false";
    }

    // Add playbook XP triggers
    newAttrs["housexpunique"] = cot.xp();

    // Loop through and add all house-specific upgrades
    for (let up of cot.upgrades) {
        let newId = generateRowID();
        let prefix = `repeating_houseup1_${newId}_`;
        newAttrs[prefix + "houseup1name"] = up.name();
        newAttrs[prefix + "houseup1desc"] = up.desc();
        newAttrs[prefix + "houseup1value"] = "0";
    }

    setAttrs(newAttrs);
};

const fillPCUniversalXP = () => {
    let newAttrs = {};

    // Loop through and add default XP triggers
    for (let x of xpTriggers.pc) {
        let newId = generateRowID();
        let prefix = `repeating_pcxptrigger_${newId}_`;
        newAttrs[prefix + "pcxptriggersextra"] = x();
    }

    setAttrs(newAttrs);
};

const fillCoterieUniversalXP = () => {
    let newAttrs = {};

    // Loop through and add default XP triggers
    for (let x of xpTriggers.coterie) {
        console.log(`coterie xp: ${x}: ${x()}`);
        let newId = generateRowID();
        let prefix = `repeating_housexptrigger_${newId}_`;
        newAttrs[prefix + "housexpextra"] = x();
    }

    setAttrs(newAttrs);
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
    //console.log(`Setting sheet attributes: ${settings}`);
    for (const key of settings) {
        //console.log(`\tKey: ${key}\n\tval: ${dict[key]()}`);
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
};

const initialSetup = () => {
    console.log("Starting initial sheet setup");

    // Default values for sheets
    setDefaultAttrs(pcDefaults);

    // PC sheet
    fillPCUniversalItems();
    fillPCUniversalXP();

    // Coterie sheet
    fillCoterieUniversalUpgrades();
    fillCoterieUniversalXP();

    // Faction sheet
    fillFactions();

    // GM Turn sheet
    // placeholder();

    console.log("Initial sheet setup complete");
};

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

// Event: When the playbook title is entered for the first time
on("change:playbookName", (args) => {
    console.log("Playbook name change detected.");
    getAttrs(["playbooktype", "playbookName"], (values) => {
        let pbId = values["playbooktype"];

        if (lookup.playbookId[pbId] == "NotSet") {
            let playbook = null;

            switch (values["playbookName"].toString().toLowerCase().trim()) {
                case lookup.playbookNames.bravo().toLowerCase():
                    playbook = playbooks.bravo;
                    break;
                case lookup.playbookNames.hawk().toLowerCase():
                    playbook = playbooks.hawk;
                    break;
                case lookup.playbookNames.eye().toLowerCase():
                    playbook = playbooks.eye;
                    break;
                case lookup.playbookNames.couth().toLowerCase():
                    playbook = playbooks.couth;
                    break;
                case lookup.playbookNames.knack().toLowerCase():
                    playbook = playbooks.knack;
                    break;
                case lookup.playbookNames.key().toLowerCase():
                    playbook = playbooks.key;
                    break;
                case lookup.playbookNames.kiss().toLowerCase():
                    playbook = playbooks.kiss;
                    break;
                case lookup.playbookNames.curse().toLowerCase():
                    playbook = playbooks.curse;
                    break;
            }
            if (playbook) {
                fillPlaybook(playbook);
                setAttrs({
                    ["playbooktype"]: playbook.id,
                });
            }
        } else return;
    });
});

// Event: When the coterie title is entered for the first time
on("change:housename", (args) => {
    console.log("Coterie name change detected.");
    getAttrs(["coteriehouse", "housename"], (values) => {
        let cotId = values["coteriehouse"];

        if (lookup.coterieId[cotId] == "NotSet") {
            let coterie = null;

            switch (values["housename"].toString().toLowerCase().trim()) {
                case lookup.coterieNames.corvetto().toLowerCase():
                    coterie = coteries.corvetto;
                    break;
                case lookup.coterieNames.battalia().toLowerCase():
                    coterie = coteries.battalia;
                    break;
                case lookup.coterieNames.bastien().toLowerCase():
                    coterie = coteries.bastien;
                    break;
                case lookup.coterieNames.lovell().toLowerCase():
                    coterie = coteries.lovell;
                    break;
                case lookup.coterieNames.alMari().toLowerCase():
                    coterie = coteries.alMari;
                    break;
                case lookup.coterieNames.elanda().toLowerCase():
                    coterie = coteries.elanda;
                    break;
            }
            if (coterie) {
                fillCoterie(coterie);
                setAttrs({
                    ["coteriehouse"]: coterie.id,
                });
            }
        } else return;
    });
});


// Event: When an action rating is updated
var maxActions = 6;
var actionName = "pcskillval";
var attrName = "pcattrval";
var attrs = [1, 2, 3, 4, 5, 6];

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
            });

            setAttrs({
                [`${attrName}${attrNum}`]: attrVal
            });
        });
    });
});

/* Un comment to use validator
var getAttrs = () => {};
var setAttrs = () => {};
var getTranslationByKey = () => {};
var on = () => {};
var generateRowID = () => {};
//*/