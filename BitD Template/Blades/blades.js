"use strict";
const data = {
    "crew": {
        "assassins": {
            "base": {
                "claim_1_desc": "claim_training_rooms_description",
                "claim_1_name": "claim_training_rooms",
                "claim_2_desc": "claim_vice_den_description",
                "claim_2_name": "claim_vice_den",
                "claim_3_desc": "claim_fixer_description",
                "claim_3_name": "claim_fixer",
                "claim_4_desc": "claim_informants_description",
                "claim_4_name": "claim_informants",
                "claim_5_desc": "claim_hagfish_farm_description",
                "claim_5_name": "claim_hagfish_farm",
                "claim_6_desc": "claim_victim_trophies_description",
                "claim_6_name": "claim_victim_trophies",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_desc": "claim_cover_operation_description",
                "claim_10_name": "claim_cover_operation",
                "claim_11_desc": "claim_protection_racket_description",
                "claim_11_name": "claim_protection_racket",
                "claim_12_desc": "claim_infirmary_description",
                "claim_12_name": "claim_infirmary",
                "claim_13_desc": "claim_envoy_description",
                "claim_13_name": "claim_envoy",
                "claim_14_desc": "claim_cover_identities_description",
                "claim_14_name": "claim_cover_identities",
                "claim_15_desc": "claim_city_records_description",
                "claim_15_name": "claim_city_records",
                "claim_bridge_2_3": "0",
                "claim_bridge_3_4": "0",
                "claim_bridge_6_7": "0",
                "claim_bridge_9_14": "0",
                "claim_bridge_12_13": "0",
                "claim_bridge_13_14": "0",
                "crew_description": "crew_assassins_description",
                "crew_xp_condition": "crew_assassins_xp_condition",
                "hunting_grounds_type": "crew_assassins_hunting_grounds_type",
                "hunting_grounds_description": "crew_assassins_hunting_grounds_description",
                "upgrade_20_check_1": "1",
                "upgrade_21_check_1": "1"
            },
            "crewability": [
                "deadly",
                "crow's_veil",
                "emberdeath",
                "no_traces",
                "patron",
                "predators",
                "vipers",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_hardened",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_assassin_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_ironhook_contacts",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_skulks",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_thugs",
                "numboxes": "1"
            }]
        },
        "bravos": {
            "base": {
                "claim_1_desc": "claim_barracks_description",
                "claim_1_name": "claim_barracks",
                "claim_2_name": "claim_turf",
                "claim_3_desc": "claim_terrorized_citizens_description",
                "claim_3_name": "claim_terrorized_citizens",
                "claim_4_desc": "claim_informants_description",
                "claim_4_name": "claim_informants",
                "claim_5_desc": "claim_protection_racket_description",
                "claim_5_name": "claim_protection_racket",
                "claim_6_desc": "claim_fighting_pits_description",
                "claim_6_name": "claim_fighting_pits",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_name": "claim_turf",
                "claim_11_desc": "claim_infirmary_description",
                "claim_11_name": "claim_infirmary",
                "claim_12_desc": "claim_bluecoat_intimidation_description",
                "claim_12_name": "claim_bluecoat_intimidation",
                "claim_13_desc": "claim_street_fence_description",
                "claim_13_name": "claim_street_fence",
                "claim_14_desc": "claim_warehouses_description",
                "claim_14_name": "claim_warehouses",
                "claim_15_desc": "claim_bluecoat_confederates_description",
                "claim_15_name": "claim_bluecoat_confederates",
                "claim_bridge_3_4": "0",
                "claim_bridge_2_7": "0",
                "claim_bridge_12_13": "0",
                "cohort1_subtype": "thugs",
                "crew_description": "crew_bravos_description",
                "crew_xp_condition": "crew_bravos_xp_condition",
                "hunting_grounds_type": "crew_bravos_hunting_grounds_type",
                "hunting_grounds_description": "crew_bravos_hunting_grounds_description",
                "upgrade_21_check_1": "1"
            },
            "crewability": [
                "dangerous",
                "blood_brothers",
                "door_kickers",
                "fiends",
                "forged_in_the_fire",
                "patron",
                "war_dogs",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_hardened",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_bravos_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_ironhook_contacts",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_rovers",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_thugs",
                "numboxes": "1"
            }]
        },
        "cult": {
            "base": {
                "claim_1_desc": "claim_cloister_description",
                "claim_1_name": "claim_cloister",
                "claim_2_desc": "claim_vice_den_description",
                "claim_2_name": "claim_vice_den",
                "claim_3_desc": "claim_offertory_description",
                "claim_3_name": "claim_offertory",
                "claim_4_desc": "claim_ancient_obelisk_description",
                "claim_4_name": "claim_ancient_obelisk",
                "claim_5_desc": "claim_ancient_tower_description",
                "claim_5_name": "claim_ancient_tower",
                "claim_6_name": "claim_turf",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_name": "claim_turf",
                "claim_11_desc": "claim_spirit_well_description",
                "claim_11_name": "claim_spirit_well",
                "claim_12_desc": "claim_ancient_gate_description",
                "claim_12_name": "claim_ancient_gate",
                "claim_13_desc": "claim_sanctuary_description",
                "claim_13_name": "claim_sanctuary",
                "claim_14_desc": "claim_sacred_nexus_description",
                "claim_14_name": "claim_sacred_nexus",
                "claim_15_desc": "claim_ancient_altar_description",
                "claim_15_name": "claim_ancient_altar",
                "claim_bridge_3_4": "0",
                "claim_bridge_4_9": "0",
                "claim_bridge_6_11": "0",
                "claim_bridge_12_13": "0",
                "claim_bridge_13_14": "0",
                "cohort1_subtype": "adepts",
                "crew_description": "crew_cult_description",
                "crew_xp_condition": "crew_cult_xp_condition",
                "hunting_grounds_type": "crew_cult_hunting_grounds_type",
                "hunting_grounds_description": "crew_cult_hunting_grounds_description",
                "setting_show_deity": "1",
                "upgrade_22_check_1": "1"
            },
            "crewability": [
                "chosen",
                "anointed",
                "bound_in_darkness",
                "conviction",
                "glory_incarnate",
                "sealed_in_blood",
                "zealotry",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_ordained",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_cult_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_ritual_sanctum_in_lair",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_adepts",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_thugs",
                "numboxes": "1"
            }]
        },
        "hawkers": {
            "base": {
                "claim_1_name": "claim_turf",
                "claim_2_desc": "claim_personal_clothier_description",
                "claim_2_name": "claim_personal_clothier",
                "claim_3_desc": "claim_local_graft_description",
                "claim_3_name": "claim_local_graft",
                "claim_4_desc": "claim_lookouts_description",
                "claim_4_name": "claim_lookouts",
                "claim_5_desc": "claim_informants_description",
                "claim_5_name": "claim_informants",
                "claim_6_name": "claim_turf",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_desc": "claim_luxury_venue_description",
                "claim_10_name": "claim_luxury_venue",
                "claim_11_desc": "claim_foreign_market_description",
                "claim_11_name": "claim_foreign_market",
                "claim_12_desc": "claim_vice_den_description",
                "claim_12_name": "claim_vice_den",
                "claim_13_desc": "claim_surplus_caches_description",
                "claim_13_name": "claim_surplus_caches",
                "claim_14_desc": "claim_cover_operation_description",
                "claim_14_name": "claim_cover_operation",
                "claim_15_desc": "claim_cover_identities_description",
                "claim_15_name": "claim_cover_identities",
                "claim_bridge_2_3": "0",
                "claim_bridge_3_4": "0",
                "claim_bridge_6_7": "0",
                "claim_bridge_10_15": "0",
                "claim_bridge_12_13": "0",
                "claim_bridge_13_14": "0",
                "crew_description": "crew_hawkers_description",
                "crew_xp_condition": "crew_hawkers_xp_condition",
                "hunting_grounds_type": "crew_hawkers_hunting_grounds_type",
                "hunting_grounds_description": "crew_hawkers_hunting_grounds_description",
                "upgrade_14_check_1": "1",
                "upgrade_22_check_1": "1"
            },
            "crewability": [
                "silver_tongues",
                "accord",
                "the_good_stuff",
                "ghost_market",
                "high_society",
                "hooked",
                "patron",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_composed",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_hawker's_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_ironhook_contacts",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_rooks",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_thugs",
                "numboxes": "1"
            }]
        },
        "shadows": {
            "base": {
                "claim_1_desc": "claim_interrogation_chamber_description",
                "claim_1_name": "claim_interrogation_chamber",
                "claim_2_name": "claim_turf",
                "claim_3_desc": "claim_loyal_fence_description",
                "claim_3_name": "claim_loyal_fence",
                "claim_4_desc": "claim_gambling_den_description",
                "claim_4_name": "claim_gambling_den",
                "claim_5_desc": "claim_tavern_description",
                "claim_5_name": "claim_tavern",
                "claim_6_desc": "claim_drug_den_description",
                "claim_6_name": "claim_drug_den",
                "claim_7_desc": "claim_informants_description",
                "claim_7_name": "claim_informants",
                "claim_9_name": "claim_turf",
                "claim_10_desc": "claim_lookouts_description",
                "claim_10_name": "claim_lookouts",
                "claim_11_desc": "claim_hagfish_farm_description",
                "claim_11_name": "claim_hagfish_farm",
                "claim_12_desc": "claim_infirmary_description",
                "claim_12_name": "claim_infirmary",
                "claim_13_desc": "claim_covert_drops_description",
                "claim_13_name": "claim_covert_drops",
                "claim_14_name": "claim_turf",
                "claim_15_desc": "claim_secret_pathways_description",
                "claim_15_name": "claim_secret_pathways",
                "claim_bridge_3_4": "0",
                "claim_bridge_2_7": "0",
                "claim_bridge_9_14": "0",
                "claim_bridge_12_13": "0",
                "crew_description": "crew_shadows_description",
                "crew_xp_condition": "crew_shadows_xp_condition",
                "hunting_grounds_type": "crew_shadows_hunting_grounds_type",
                "hunting_grounds_description": "crew_shadows_hunting_grounds_description",
                "upgrade_10_check_1": "1",
                "upgrade_21_check_1": "1"
            },
            "crewability": [
                "everyone_steals",
                "ghost_echoes",
                "pack_rats",
                "patron",
                "second_story",
                "slippery",
                "synchronized",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_steady",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_thief_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_underground_maps_&_passkeys",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_rooks",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_skulks",
                "numboxes": "1"
            }]
        },
        "smugglers": {
            "base": {
                "claim_1_name": "claim_turf",
                "claim_2_desc": "claim_side_business_description",
                "claim_2_name": "claim_side_business",
                "claim_3_desc": "claim_luxury_fence_description",
                "claim_3_name": "claim_luxury_fence",
                "claim_4_desc": "claim_vice_den_description",
                "claim_4_name": "claim_vice_den",
                "claim_5_desc": "claim_tavern_description",
                "claim_5_name": "claim_tavern",
                "claim_6_desc": "claim_ancient_gate_description",
                "claim_6_name": "claim_ancient_gate",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_name": "claim_turf",
                "claim_11_desc": "claim_secret_routes_description",
                "claim_11_name": "claim_secret_routes",
                "claim_12_desc": "claim_informants_description",
                "claim_12_name": "claim_informants",
                "claim_13_desc": "claim_fleet_description",
                "claim_13_name": "claim_fleet",
                "claim_14_desc": "claim_cover_operation_description",
                "claim_14_name": "claim_cover_operation",
                "claim_15_desc": "claim_warehouse_description",
                "claim_15_name": "claim_warehouse",
                "claim_bridge_2_3": "0",
                "claim_bridge_3_4": "0",
                "claim_bridge_6_7": "0",
                "claim_bridge_12_13": "0",
                "claim_bridge_13_14": "0",
                "cohort1_description": "vehicle_edges_flaws",
                "cohort1_name": "vehicle",
                "cohort1_subtype": "boat_carriage_other",
                "cohort1_type": "expert",
                "crew_description": "crew_smugglers_description",
                "crew_xp_condition": "crew_smugglers_xp_condition",
                "hunting_grounds_type": "crew_smugglers_hunting_grounds_type",
                "hunting_grounds_description": "crew_smugglers_hunting_grounds_description",
                "upgrade_6_check_1": "1",
                "upgrade_6_name": "vehicle",
                "upgrade_8_name": "vehicle",
                "upgrade_21_check_1": "1"
            },
            "crewability": [
                "like_part_of_the_family",
                "all_hands",
                "ghost_passage",
                "just_passing_through",
                "leverage",
                "reavers",
                "renegades",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_steady",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_smuggler's_rigging",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_camouflage",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_elite_rovers",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_barge",
                "numboxes": "1"
            }]
        },
        "vigilantes": {
            "base": {
                "claim_1_desc": "claim_fierce_allies_description",
                "claim_1_name": "claim_fierce_allies",
                "claim_2_desc": "claim_local_heroes_description",
                "claim_2_name": "claim_local_heroes",
                "claim_3_desc": "claim_publicity_description",
                "claim_3_name": "claim_publicity",
                "claim_4_desc": "claim_hidden_paths_description",
                "claim_4_name": "claim_hidden_paths",
                "claim_5_desc": "claim_catacombs_description",
                "claim_5_name": "claim_catacombs",
                "claim_6_desc": "claim_defiant_citizens_description",
                "claim_6_name": "claim_defiant_citizens",
                "claim_7_name": "claim_turf",
                "claim_9_name": "claim_turf",
                "claim_10_desc": "claim_infirmary_description",
                "claim_10_name": "claim_infirmary",
                "claim_11_desc": "claim_above_the_law_description",
                "claim_11_name": "claim_above_the_law",
                "claim_12_desc": "claim_bluecoat_confidants_description",
                "claim_12_name": "claim_bluecoat_confidants",
                "claim_13_desc": "claim_lookouts_description",
                "claim_13_name": "claim_lookouts",
                "claim_14_desc": "claim_the_hookup_description",
                "claim_14_name": "claim_the_hookup",
                "claim_15_desc": "claim_doskvol's_most_wanted_description",
                "claim_15_name": "claim_doskvol's_most_wanted",
                "claim_bridge_2_3": "0",
                "claim_bridge_3_4": "0",
                "claim_bridge_6_11": "0",
                "claim_bridge_10_15": "0",
                "claim_bridge_12_13": "0",
                "claim_bridge_13_14": "0",
                "cohort1_type": "expert",
                "crew_description": "crew_vigilantes_description",
                "crew_xp_condition": "crew_vigilantes_xp_condition",
                "hunting_grounds_type": "crew_vigilantes_hunting_grounds_type",
                "hunting_grounds_description": "crew_vigilantes_hunting_grounds_description",
                "setting_show_origin": "1",
                "upgrade_22_check_1": "1"
            },
            "crewability": [
                "as_good_as_your_word",
                "avengers",
                "thorn_in_your_side",
                "misdirection",
                "uncanny_preparation",
                "moral_compass",
                "favors",
                "roots",
                "veteran"
            ],
            "upgrade": [{
                "name": "crew_upgrade_unbroken",
                "numboxes": "3"
            }, {
                "name": "crew_upgrade_vigilantes_attire",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_dedicated_crafters",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_irregulars",
                "numboxes": "1"
            }, {
                "name": "crew_upgrade_willing_to_fight",
                "numboxes": "1"
            }]
        }
    },
    "playbook": {
        "cutter": {
            "ability": [
                "battleborn",
                "bodyguard",
                "ghost_fighter",
                "leader",
                "mule",
                "not_to_be_trifled_with",
                "savage",
                "vigorous",
                "veteran"
            ],
            "base": {
                "command": "1",
                "friends_title": "playbook_cutter_friends_title",
                "gatherinfo1": "gatherinfo_how_can_I_hurt",
                "gatherinfo2": "gatherinfo_whos_most_afraid",
                "gatherinfo3": "gatherinfo_whos_most_dangerous",
                "gatherinfo4": "gatherinfo_what_do_they_intend",
                "gatherinfo5": "gatherinfo_how_can_I_get_them",
                "gatherinfo6": "gatherinfo_are_they_telling",
                "playbook_description": "playbook_cutter_description",
                "skirmish": "2",
                "xp_condition": "playbook_cutter_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_hand_weapon",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_heavy_weapon",
                "numboxes": "2"
            }, {
                "name": "playbook_item_scary_weapon_or_tool",
                "numboxes": "1"
            }, {
                "name": "playbook_item_manacles_&_chain",
                "numboxes": "0"
            }, {
                "name": "playbook_item_rage_essence_vial",
                "numboxes": "0"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        },
        "ghost": {
            "ability": [
                "ghost_form",
                "dissipate",
                "manifest",
                "poltergeist",
                "possess",
                "veteran"
            ],
            "base": {
                "friends_title": "playbook_ghost_friends_title",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_what_are_they_really",
                "gatherinfo4": "gatherinfo_what_should_I_look",
                "gatherinfo5": "gatherinfo_wheres_the_weakness",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "playbook_description": "playbook_ghost_description",
                "setting_stress_label": "drain",
                "setting_trauma_label": "gloom",
                "setting_traumata_set": "ghost",
                "setting_vice_type": "ghost",
                "xp_condition": "playbook_ghost_xp_condition",
                "xp_condition2": "playbook_ghost_xp_condition2",
                "xp_condition3": "playbook_ghost_xp_condition3"
            },
            "playbookitem": []
        },
        "hound": {
            "ability": [
                "sharpshooter",
                "focused",
                "ghost_hunter",
                "scout",
                "survivor",
                "tough_as_nails",
                "vengeful",
                "veteran"
            ],
            "base": {
                "char_cohort_name": "hunting_pet",
                "char_cohort_subtype": "hunter",
                "friends_title": "playbook_hound_friends_title",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_what_are_they_really",
                "gatherinfo4": "gatherinfo_where_they_vulnerable",
                "gatherinfo5": "gatherinfo_where_did_x_go",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "hunt": "2",
                "playbook_description": "playbook_hound_description",
                "setting_show_cohort": "1",
                "survey": "1",
                "xp_condition": "playbook_hound_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_pair_of_pistols",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_long_rifle",
                "numboxes": "2"
            }, {
                "name": "playbook_item_electroplasmic_ammunition",
                "numboxes": "1"
            }, {
                "name": "playbook_item_a_trained_hunting_pet",
                "numboxes": "0"
            }, {
                "name": "playbook_item_spyglass",
                "numboxes": "1"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        },
        "hull": {
            "ability": [
                "automaton",
                "overcharge",
                "compartments",
                "electroplasmic_projectors",
                "interface",
                "secondary_hull",
                "frame_upgrade"
            ],
            "base": {
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_what_are_they_really",
                "gatherinfo4": "gatherinfo_what_should_I_look",
                "gatherinfo5": "gatherinfo_wheres_the_weakness",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "playbook_description": "playbook_hull_description",
                "setting_load_h": "7",
                "setting_extra_stress": "1",
                "setting_show_frame": "1",
                "setting_stress_label": "drain",
                "setting_trauma_label": "wear",
                "setting_traumata_set": "hull",
                "setting_vice_type": "hull",
                "xp_condition": "playbook_hull_xp_condition",
                "xp_condition2": "playbook_hull_xp_condition2",
                "xp_condition3": "playbook_hull_xp_condition3"
            },
            "playbookitem": []
        },
        "leech": {
            "ability": [
                "alchemist",
                "analyst",
                "artificer",
                "fortitude",
                "ghost_ward",
                "physicker",
                "saboteur",
                "venomous",
                "veteran"
            ],
            "base": {
                "friends_title": "playbook_leech_friends_title",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_are_they_telling",
                "gatherinfo4": "gatherinfo_what_can_I_tinker",
                "gatherinfo5": "gatherinfo_what_might_happen",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "playbook_description": "playbook_leech_description",
                "tinker": "2",
                "wreck": "1",
                "xp_condition": "playbook_leech_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_tinkering_tools",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_wrecking_tools",
                "numboxes": "2"
            }, {
                "name": "playbook_item_blowgun_&_darts,_syringes",
                "numboxes": "0"
            }, {
                "name": "playbook_item_bandolier_of_alchemicals_(3)",
                "numboxes": "1"
            }, {
                "name": "playbook_item_bandolier_of_alchemicals_(3)",
                "numboxes": "1"
            }, {
                "name": "playbook_item_gadget",
                "numboxes": "1"
            }]
        },
        "lurk": {
            "ability": [
                "infiltrator",
                "ambush",
                "daredevil",
                "the_devil's_footsteps",
                "expertise",
                "ghost_veil",
                "reflexes",
                "shadow",
                "veteran"
            ],
            "base": {
                "friends_title": "playbook_lurk_friends_title",
                "finesse": "1",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_what_should_I_look",
                "gatherinfo4": "gatherinfo_whats_the_best_way",
                "gatherinfo5": "gatherinfo_where_can_I_hide",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "playbook_description": "playbook_lurk_description",
                "prowl": "2",
                "xp_condition": "playbook_lurk_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_lockpicks",
                "numboxes": "0"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_shadow_cloak",
                "numboxes": "1"
            }, {
                "name": "playbook_item_light_climbing_gear",
                "numboxes": "1"
            }, {
                "name": "playbook_item_silence_potion_vial",
                "numboxes": "0"
            }, {
                "name": "playbook_item_dark-sight_goggles",
                "numboxes": "1"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        },
        "slide": {
            "ability": [
                "rook's_gambit",
                "cloak_&_dagger",
                "ghost_voice",
                "like_looking_into_a_mirror",
                "a_little_something_on_the_side",
                "mesmerism",
                "subterfuge",
                "trust_in_me",
                "veteran"
            ],
            "base": {
                "friends_title": "playbook_slide_friends_title",
                "consort": "1",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_are_they_telling",
                "gatherinfo4": "gatherinfo_what_are_they_really",
                "gatherinfo5": "gatherinfo_what_do_they_really",
                "gatherinfo6": "gatherinfo_how_can_I_blend",
                "playbook_description": "playbook_slide_description",
                "sway": "2",
                "xp_condition": "playbook_slide_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_clothes_&_jewelry",
                "numboxes": "0"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_disguise_kit",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_loaded_dice,_trick_cards",
                "numboxes": "0"
            }, {
                "name": "playbook_item_trance_powder",
                "numboxes": "0"
            }, {
                "name": "playbook_item_a_cane-sword",
                "numboxes": "1"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        },
        "spider": {
            "ability": [
                "foresight",
                "calculating",
                "connected",
                "functioning_vice",
                "ghost_contract",
                "jail_bird",
                "mastermind",
                "weaving_the_web",
                "veteran"
            ],
            "base": {
                "consort": "2",
                "friends_title": "playbook_spider_friends_title",
                "gatherinfo1": "gatherinfo_what_do_they_want",
                "gatherinfo2": "gatherinfo_what_should_I_look",
                "gatherinfo3": "gatherinfo_wheres_the_leverage",
                "gatherinfo4": "gatherinfo_how_can_I_discover",
                "gatherinfo5": "gatherinfo_what_do_they_intend",
                "gatherinfo6": "gatherinfo_how_can_I_get_them",
                "playbook_description": "playbook_spider_description",
                "study": "1",
                "xp_condition": "playbook_spider_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_cover_identity",
                "numboxes": "0"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_bottle_of_whiskey",
                "numboxes": "1"
            }, {
                "name": "playbook_item_blueprints",
                "numboxes": "1"
            }, {
                "name": "playbook_item_vial_of_slumber_essence",
                "numboxes": "0"
            }, {
                "name": "playbook_item_concealed_palm_pistol",
                "numboxes": "0"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        },
        "whisper": {
            "ability": [
                "compel",
                "ghost_mind",
                "iron_will",
                "occultist",
                "ritual",
                "strange_methods",
                "tempest",
                "warded"
            ],
            "base": {
                "attune": "2",
                "friends_title": "playbook_whisper_friends_title",
                "gatherinfo1": "gatherinfo_what_is_arcane",
                "gatherinfo2": "gatherinfo_what_echoes",
                "gatherinfo3": "gatherinfo_what_is_hidden",
                "gatherinfo4": "gatherinfo_what_do_they_intend",
                "gatherinfo5": "gatherinfo_what_drives_them",
                "gatherinfo6": "gatherinfo_how_can_I_reveal",
                "playbook_description": "playbook_whisper_description",
                "study": "1",
                "xp_condition": "playbook_whisper_xp_condition"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_lightning_hook",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_spirit_mask",
                "numboxes": "1"
            }, {
                "name": "playbook_item_electroplasm_vials",
                "numboxes": "0"
            }, {
                "name": "playbook_item_spirit_bottles_(2)",
                "numboxes": "1"
            }, {
                "name": "playbook_item_ghost_key",
                "numboxes": "0"
            }, {
                "name": "playbook_item_demonbane_charm",
                "numboxes": "0"
            }]
        },
        "vampire": {
            "ability": [
                "undead",
                "terrible_power",
                "arcane_sight",
                "a_void_in_the_echo",
                "dark_talent",
                "sinister_guile",
                "veteran"
            ],
            "base": {
                "friends_title": "playbook_vampire_friends_title",
                "gatherinfo1": "gatherinfo_what_do_they_intend",
                "gatherinfo2": "gatherinfo_how_can_I_get_them",
                "gatherinfo3": "gatherinfo_what_are_they_really",
                "gatherinfo4": "gatherinfo_what_should_I_look",
                "gatherinfo5": "gatherinfo_wheres_the_weakness",
                "gatherinfo6": "gatherinfo_how_can_I_find",
                "playbook_description": "playbook_vampire_description",
                "setting_extra_stress": "3",
                "setting_show_strictures": "1",
                "setting_vice_type": "vampire",
                "trauma": "4",
                "xp_condition": "playbook_vampire_xp_condition",
                "xp_condition2": "playbook_vampire_xp_condition2",
                "xp_condition3": "playbook_vampire_xp_condition3"
            },
            "playbookitem": [{
                "bold": "1",
                "name": "playbook_item_fine_clothes_and_accoutrements",
                "numboxes": "0"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_personal_weapon",
                "numboxes": "1"
            }, {
                "bold": "1",
                "name": "playbook_item_fine_shadow_cloak",
                "numboxes": "1"
            }, {
                "name": "playbook_item_demonbane_charm",
                "numboxes": "0"
            }, {
                "name": "playbook_item_spiritbane_charm",
                "numboxes": "0"
            }]
        }
    },
    "factions": {
        "factions1": [{
            "name": "faction_the_unseen",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_the_hive",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_the_circle_of_flame",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_the_silver_nails",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_lord_scurlock",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_the_crows",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_lampblacks",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_red_sashes",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_dimmer_sisters",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_the_grinders",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_billhooks",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_wraiths",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_the_gray_cloaks",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_ulf_ironborn",
            "tier": "I",
            "hold": "S"
        }, {
            "name": "faction_the_foghounds",
            "tier": "I",
            "hold": "W"
        }, {
            "name": "faction_the_lost",
            "tier": "I",
            "hold": "W"
        }],
        "factions2": [{
            "name": "faction_imperial_military",
            "tier": "VI",
            "hold": "S"
        }, {
            "name": "faction_city_council",
            "tier": "V",
            "hold": "S"
        }, {
            "name": "faction_ministry_of_preservation",
            "tier": "V",
            "hold": "S"
        }, {
            "name": "faction_leviathan_hunters",
            "tier": "V",
            "hold": "S"
        }, {
            "name": "faction_ironhook_prison",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_sparkwrights",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_spirit_wardens",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_bluecoats",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_inspectors",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_iruvian_consulate",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_skovlan_consulate",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_the_brigade",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_severosi_consulate",
            "tier": "I",
            "hold": "S"
        }, {
            "name": "faction_dagger_isles_consulate",
            "tier": "I",
            "hold": "S"
        }],
        "factions3": [{
            "name": "faction_the_foundation",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_dockers",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_gondoliers",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_sailors",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_laborers",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_cabbies",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_cyphers",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_ink_rakes",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_rail_jacks",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_servants",
            "tier": "II",
            "hold": "W"
        }],
        "factions4": [{
            "name": "faction_the_church_of_ecstasy",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_the_horde",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_the_path_of_echoes",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_the_forgotten_gods",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_the_reconciled",
            "tier": "III",
            "hold": "S"
        }, {
            "name": "faction_skovlander_refugees",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_the_weeping_lady",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_deathlands_scavengers",
            "tier": "II",
            "hold": "W"
        }],
        "factions5": [{
            "name": "faction_whitecrown",
            "tier": "V",
            "hold": "S"
        }, {
            "name": "faction_brightstone",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_charterhall",
            "tier": "IV",
            "hold": "S"
        }, {
            "name": "faction_six_towers",
            "tier": "III",
            "hold": "W"
        }, {
            "name": "faction_silkshore",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_nightmarket",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_crow's_foot",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_the_docks",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_barrowcleft",
            "tier": "II",
            "hold": "S"
        }, {
            "name": "faction_coalridge",
            "tier": "II",
            "hold": "W"
        }, {
            "name": "faction_charhollow",
            "tier": "I",
            "hold": "S"
        }, {
            "name": "faction_dunslough",
            "tier": "I",
            "hold": "W"
        }]
    },
    "actions": {
        "insight": [
            "hunt", "study", "survey", "tinker"
        ],
        "prowess": [
            "finesse", "prowl", "skirmish", "wreck"
        ],
        "resolve": ["attune", "command", "consort", "sway"]
    },
    "traumas": {
        "normal": [
            "cold",
            "haunted",
            "obsessed",
            "paranoid",
            "reckless",
            "soft",
            "unstable",
            "vicious"
        ],
        "ghost": [
            "chaotic",
            "destructive",
            "furious",
            "obsessive",
            "territorial",
            "savage"
        ],
        "hull": [
            "clanking",
            "leaking",
            "fixated",
            "smoking",
            "sparking",
            "unstable"
        ]
    },
    "items": [{
        "name": "a_blade_or_two",
        "description": "a_blade_or_two_description",
        "numboxes": "1"
    }, {
        "name": "throwing_knives",
        "description": "throwing_knives_description",
        "numboxes": "1"
    }, {
        "name": "a_pistol",
        "description": "a_pistol_description",
        "numboxes": "1",
        "short": "1"
    }, {
        "name": "a_2nd_pistol",
        "description": "a_pistol_description",
        "numboxes": "1",
        "short": "1"
    }, {
        "name": "a_large_weapon",
        "description": "a_large_weapon_description",
        "numboxes": "2"
    }, {
        "name": "an_unusual_weapon",
        "description": "an_unusual_weapon_description",
        "numboxes": "1"
    }, {
        "name": "armor",
        "description": "armor_description",
        "numboxes": "2",
        "short": "1"
    }, {
        "name": "+heavy",
        "description": "+heavy_description",
        "numboxes": "3",
        "short": "1"
    }, {
        "name": "burglary_gear",
        "description": "burglary_gear_description",
        "numboxes": "1"
    }, {
        "name": "climbing_gear",
        "description": "climbing_gear_description",
        "numboxes": "2"
    }, {
        "name": "arcane_implements",
        "description": "arcane_implements_description",
        "numboxes": "1"
    }, {
        "name": "documents",
        "description": "documents_description",
        "numboxes": "1"
    }, {
        "name": "subterfuge_supplies",
        "description": "subterfuge_supplies_description",
        "numboxes": "1"
    }, {
        "name": "demolition_tools",
        "description": "demolition_tools_description",
        "numboxes": "2"
    }, {
        "name": "tinkering_tools",
        "description": "tinkering_tools_description",
        "numboxes": "1"
    }, {
        "name": "lantern",
        "description": "lantern_description",
        "numboxes": "1"
    }],
    "alchemicals": [
        "alcahest",
        "binding_oil",
        "drift_oil",
        "drown_powder",
        "eyeblind_poison",
        "fire_oil",
        "grenade",
        "quicksilver",
        "skullfire_poison",
        "smoke_bomb",
        "spark_drug",
        "standstill_poison",
        "trance_powder"
    ],
    "translatedDefaults": {
        "cohort1_name": "cohort",
        "contacts_title": "contacts",
        "factions_title": "factions_title",
        "factions1_header": "factions1",
        "factions2_header": "factions2",
        "factions3_header": "factions3",
        "factions4_header": "factions4",
        "factions5_header": "factions5",
        "friends_title": "friends",
        "setting_stress_label": "stress",
        "setting_trauma_label": "trauma",
        "upgrade_6_name": "carriage",
        "upgrade_6_description": "upgrade_carriage_description",
        "upgrade_7_name": "documents",
        "upgrade_7_description": "upgrade_documents_description",
        "upgrade_8_name": "boat",
        "upgrade_8_description": "upgrade_boat_description",
        "upgrade_9_name": "gear",
        "upgrade_9_description": "upgrade_gear_description",
        "upgrade_10_name": "hidden",
        "upgrade_10_description": "upgrade_hidden_description",
        "upgrade_11_name": "implements",
        "upgrade_11_description": "upgrade_implements_description",
        "upgrade_12_name": "quarters",
        "upgrade_12_description": "upgrade_quarters_description",
        "upgrade_13_name": "supplies",
        "upgrade_13_description": "upgrade_supplies_description",
        "upgrade_14_name": "secure",
        "upgrade_14_description": "upgrade_secure_description",
        "upgrade_15_name": "tools",
        "upgrade_15_description": "upgrade_tools_description",
        "upgrade_16_name": "vault",
        "upgrade_16_description": "upgrade_vault_description",
        "upgrade_17_name": "weapons",
        "upgrade_17_description": "upgrade_weapons_description",
        "upgrade_18_name": "workshop",
        "upgrade_18_description": "upgrade_workshop_description",
        "upgrade_20_name": "insight",
        "upgrade_20_description": "upgrade_insight_description",
        "upgrade_21_name": "prowess",
        "upgrade_21_description": "upgrade_prowess_description",
        "upgrade_22_name": "resolve",
        "upgrade_22_description": "upgrade_resolve_description",
        "upgrade_23_name": "personal",
        "upgrade_23_description": "upgrade_personal_description",
        "upgrade_24_name": "mastery",
        "upgrade_24_description": "upgrade_mastery_description",
        "xp_condition2": "xp_beliefs",
        "xp_condition3": "xp_vice"
    },
    "defaultValues": {
        "attune": "0",
        "claim_bridge_10_15": "1",
        "claim_bridge_12_13": "1",
        "claim_bridge_13_14": "1",
        "claim_bridge_2_3": "1",
        "claim_bridge_2_7": "1",
        "claim_bridge_3_4": "1",
        "claim_bridge_4_9": "1",
        "claim_bridge_6_11": "1",
        "claim_bridge_6_7": "1",
        "claim_bridge_9_14": "1",
        "cohort1_subtype": "",
        "cohort1_type": "gang",
        "command": "0",
        "consort": "0",
        "finesse": "0",
        "hunt": "0",
        "prowl": "0",
        "setting_extra_stress": "0",
        "setting_load_h": "6",
        "setting_show_deity": "0",
        "setting_show_frame": "0",
        "setting_show_origin": "0",
        "setting_show_strictures": "0",
        "setting_traumata_set": "normal",
        "setting_vice_type": "normal",
        "skirmish": "0",
        "study": "0",
        "survey": "0",
        "sway": "0",
        "tinker": "0",
        "trauma": "0",
        "upgrade_10_check_1": "0",
        "upgrade_14_check_1": "0",
        "upgrade_20_check_1": "0",
        "upgrade_21_check_1": "0",
        "upgrade_22_check_1": "0",
        "upgrade_6_check_1": "0",
        "wreck": "0"
    },
    "maxFriendsPerPlaybook": 5,
    "maxContactsPerCrew": 6,
    "friendlessPlaybooks": [
        "ghost", "hull"
    ],
    "translatedCrewAttributes": [
        "claim_1_name",
        "claim_2_name",
        "claim_3_name",
        "claim_4_name",
        "claim_5_name",
        "claim_6_name",
        "claim_7_name",
        "claim_8_name",
        "claim_9_name",
        "claim_10_name",
        "claim_11_name",
        "claim_12_name",
        "claim_13_name",
        "claim_14_name",
        "claim_15_name",
        "claim_1_desc",
        "claim_2_desc",
        "claim_3_desc",
        "claim_4_desc",
        "claim_5_desc",
        "claim_6_desc",
        "claim_7_desc",
        "claim_8_desc",
        "claim_9_desc",
        "claim_10_desc",
        "claim_11_desc",
        "claim_12_desc",
        "claim_13_desc",
        "claim_14_desc",
        "claim_15_desc",
        "cohort1_description",
        "cohort1_name",
        "cohort1_subtype",
        "crew_description",
        "crew_xp_condition",
        "hunting_grounds_type",
        "hunting_grounds_description",
        "upgrade_6_name",
        "upgrade_8_name"
    ],
    "translatedPlaybookAttributes": [
        "char_cohort_name",
        "char_cohort_subtype",
        "friends_title",
        "gatherinfo1",
        "gatherinfo2",
        "gatherinfo3",
        "gatherinfo4",
        "gatherinfo5",
        "gatherinfo6",
        "playbook_description",
        "setting_stress_label",
        "setting_trauma_label",
        "xp_condition",
        "xp_condition2",
        "xp_condition3"
    ]
};
/* global data, getTranslationByKey, getAttrs, setAttrs, on, getSectionIDs, generateRowID, removeRepeatingRow */
const sheetVersion = "1.0";
const sheetName = "Blades in the Dark";
const getTranslation = (key) => (getTranslationByKey(key) || "NO_TRANSLATION_FOUND");
/* It's necessary to include the base data at the start of the file */
/* Translate all the data */
Object
    .keys(data.crew)
    .forEach(crew => {
        const base = data.crew[crew].base;
        Object
            .keys(base)
            .forEach(attr => {
                if (data.translatedCrewAttributes.includes(attr)) {
                    base[attr] = getTranslation(base[attr]);
                }
            });
        /* Generate crew contacts from translation file */
        data.crew[crew].contact = [...Array(data.maxContactsPerCrew).keys()].map(i => ({
            name: getTranslation(`crew_${crew}_contact_${i}`)
        }));
        data.crew[crew].crewability = data
            .crew[crew]
            .crewability
            .map(name => ({
                name: getTranslation(`crew_ability_${name}`),
                description: getTranslation(`crew_ability_${name}_description`)
            }));
        data
            .crew[crew]
            .upgrade
            .forEach(upgrade => {
                upgrade.name = getTranslation(upgrade.name);
                if (upgrade.description) {
                    upgrade.description = getTranslationByKey(upgrade.description) || "";
                }
                upgrade.boxes_chosen = "1";
            });
    });
data
    .items
    .forEach(item => {
        item.boxes_chosen = "1";
        item.name = getTranslation(item.name);
        item.description = getTranslationByKey(item.description) || "";
    });
Object
    .keys(data.translatedDefaults)
    .forEach(k => {
        data.translatedDefaults[k] = getTranslation(data.translatedDefaults[k]);
    });
Object.assign(data.defaultValues, data.translatedDefaults);
Object
    .keys(data.factions)
    .forEach(x => {
        data
            .factions[x]
            .forEach(faction => {
                faction.name = getTranslation(faction.name);
            });
    });
data
    .alchemicals
    .forEach((v, k) => {
        data.alchemicals[k] = {
            name: getTranslation(v)
        };
    });
Object
    .keys(data.playbook)
    .forEach(playbook => {
        const base = data.playbook[playbook].base;
        Object
            .keys(base)
            .forEach(attr => {
                if (data.translatedPlaybookAttributes.includes(attr)) {
                    base[attr] = getTranslation(base[attr]);
                }
            });
        /* Generate playbook friends from translation file */
        if (!data.friendlessPlaybooks.includes(playbook)) {
            data.playbook[playbook].friend = [...Array(data.maxFriendsPerPlaybook).keys()]
                .map(i => ({
                    name: getTranslation(`playbook_${playbook}_friend_${i}`)
                }))
                .filter(o => o.name);
        } else
            data.playbook[playbook].friend = [];
        data.playbook[playbook].ability = data
            .playbook[playbook]
            .ability
            .map(name => ({
                name: getTranslation(`playbook_ability_${name}`),
                description: getTranslation(`playbook_ability_${name}_description`)
            }));
        data
            .playbook[playbook]
            .playbookitem
            .forEach(item => {
                item.name = getTranslation(item.name);
                if (item.description) {
                    item.description = getTranslationByKey(item.description) || "";
                }
                item.boxes_chosen = "1";
            });
    });
const playbookAbilityMap = new Map([
    ...Object
    .values(data.playbook)
    .map(x => x.ability)
    .reduce((m, v) => {
        v.forEach(a => m.add(a));
        return m;
    }, new Set())
].map(x => {
    return [
        x
        .name
        .toLowerCase(),
        x.description
    ];
}));
const crewAbilityMap = new Map([
    ...Object
    .values(data.crew)
    .map(x => x.crewability)
    .reduce((m, v) => {
        v.forEach(a => m.add(a));
        return m;
    }, new Set())
].map(x => {
    return [
        x
        .name
        .toLowerCase(),
        x.description
    ];
}));
/* Utility functions - shouldn't need to touch most of these */
const mySetAttrs = (attrs, options, callback) => {
        const finalAttrs = Object
            .keys(attrs)
            .reduce((m, k) => {
                m[k] = String(attrs[k]);
                return m;
            }, {});
        setAttrs(finalAttrs, options, callback);
    },
    setAttr = (name, value) => {
        getAttrs([name], v => {
            const setting = {};
            if (v[name] !== String(value))
                setting[name] = String(value);
            setAttrs(setting);
        });
    },
    fillRepeatingSectionFromData = (sectionName, dataList, autogen, callback) => {
        callback = callback || (() => {});
        getSectionIDs(`repeating_${sectionName}`, idList => {
            const existingRowAttributes = [
                ...idList.map(id => `repeating_${sectionName}_${id}_name`),
                ...idList.map(id => `repeating_${sectionName}_${id}_autogen`)
            ];
            getAttrs(existingRowAttributes, v => {
                /* Delete auto-generated rows */
                if (autogen) {
                    idList = idList.filter(id => {
                        if (v[`repeating_${sectionName}_${id}_autogen`]) {
                            removeRepeatingRow(`repeating_${sectionName}_${id}`);
                            return false;
                        } else
                            return true;
                    });
                }
                const existingRowNames = idList.map(id => v[`repeating_${sectionName}_${id}_name`]),
                    createdIDs = [],
                    setting = dataList
                    .filter(o => !existingRowNames.includes(o.name))
                    .map(o => {
                        let rowID;
                        while (!rowID) {
                            let newID = generateRowID();
                            if (!createdIDs.includes(newID)) {
                                rowID = newID;
                                createdIDs.push(rowID);
                            }
                        }
                        const newAttrs = {};
                        if (autogen) {
                            newAttrs[`repeating_${sectionName}_${rowID}_autogen`] = "1";
                        }
                        return Object
                            .keys(o)
                            .reduce((m, key) => {
                                m[`repeating_${sectionName}_${rowID}_${key}`] = o[key];
                                return m;
                            }, newAttrs);
                    })
                    .reduce((m, o) => Object.assign(m, o), {});
                mySetAttrs(setting, {}, callback);
            });
        });
    },
    diceMagic = num => {
        const range = end => [...Array(end + 1).keys()].slice(1);
        if (num > 0)
            return `dice=${range(num).map(() => "[[d6]]").join("&#44; ")}`;
        else
            return "zerodice=[[d6]]&#44; [[d6]]";
    },
    buildRollFormula = base => {
        return ` {{?{@{bonusdice}|${
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      -1,
      -2,
      -3
    ].map(n => `${n},${diceMagic(n + (parseInt(base) || 0))}`).join("|")}}}}`;
  },
  buildNumdiceFormula = () => {
    return ` {{?{${getTranslation("numberofdice")}|${
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ].map(n => `${n},${diceMagic(n)}`).join("|")}}}}`;
  },
  emptyFirstRowIfUnnamed = sectionName => {
    getSectionIDs(`repeating_${sectionName}`, idList => {
      const id = idList[0];
      getAttrs([`repeating_${sectionName}_${id}_name`], v => {
        if (!v[`repeating_${sectionName}_${id}_name`]) {
          removeRepeatingRow(`repeating_${sectionName}_${id}`);
        }
      });
    });
  },
  handleBoxesFill = (name, upToFour) => {
    on(`change:${name}1 change:${name}2 change:${name}3 change:${name}4`, event => {
      if (event.sourceType !== "player") 
        return;
      getAttrs([event.sourceAttribute], v => {
        const rName = event
            .sourceAttribute
            .slice(0, -1),
          setting = {};
        if (String(v[event.sourceAttribute]) === "1") {
          switch (event.sourceAttribute.slice(-1)) {
            case "4":
              setting[`${rName}3`] = 1;
              /* falls through */
            case "3":
              setting[`${rName}2`] = 1;
              /* falls through */
            case "2":
              setting[`${rName}1`] = 1;
          }
        }
        if (String(v[event.sourceAttribute]) === "0") {
          switch (event.sourceAttribute.slice(-1)) {
            case "1":
              setting[`${rName}2`] = 0;
              /* falls through */
            case "2":
              setting[`${rName}3`] = 0;
              /* falls through */
            case "3":
              if (upToFour) 
                setting[`${rName}4`] = 0;
              }
            }
          mySetAttrs(setting);
        });
      });
    },
    calculateResistance = name => {
      getAttrs([
        ...data.actions[name],
        `setting_resbonus_${name}`
      ], v => {
        const total = data
          .actions[name]
          .map(x => v[x])
          .reduce((s, c) => s + (String(c) === "0"
            ? 0
            : 1), 0);
        setAttr(name, total);
        setAttr(`${name}_formula`, buildRollFormula(total + parseInt(v[`setting_resbonus_${name}`])));
      });
    },
    calculateVice = () => {
      getAttrs(Object.keys(data.actions), v => {
        const total = Math.min(...Object.keys(v).map(x => parseInt(v[x]) || 0));
        setAttr("vice_formula", buildRollFormula(total));
      });
    },
    calculateStashFormula = () => getAttrs(["stash"], v => {
      setAttr("stash_formula", buildRollFormula(Math.floor(parseInt(v.stash) / 10)));
    }),
    calculateWantedFormula = () => getAttrs(["wanted"], v => {
      setAttr("wanted_formula", buildRollFormula(v.wanted));
    }),
    calculateCohortDice = prefixes => {
      const sourceAttrs = [
        "crew_tier", ...prefixes.map(p => `${p}_impaired`),
        ...prefixes.map(p => `${p}_type`),
        ...prefixes.map(p => `${p}_roll_formula`)
      ];
      getAttrs(sourceAttrs, v => {
        const setting = {};
        prefixes.forEach(prefix => {
          const dice = (parseInt(v.crew_tier) || 0) - (parseInt(v[`${prefix}_impaired`]) || 0) + ((v[`${prefix}_type`] === "elite" || v[`${prefix}_type`] === "expert")
              ? 1
              : 0),
            formula = buildRollFormula(dice);
          if (formula !== v[`${prefix}_roll_formula`]) 
            setting[`${prefix}_roll_formula`] = formula;
          }
        );
        setAttrs(setting);
      });
    };
  /* CONSTANTS */
  const crewAttributes = [...new Set([].concat(...Object.keys(data.crew).map(x => Object.keys(data.crew[x].base))))],
    playbookAttributes = [...new Set([].concat(...Object.keys(data.playbook).map(x => Object.keys(data.playbook[x].base))))],
    watchedAttributes = new Set(crewAttributes.concat(playbookAttributes)),
    actionsFlat = [].concat(...Object.keys(data.actions).map(x => data.actions[x])),
    traumaDataFlat = Object
      .keys(data.traumas)
      .reduce((m, k) => m.concat(data.traumas[k]), []),
    autoExpandFields = [
      "repeating_ability:name",
      "repeating_ability:description",
      "repeating_crewability:name",
      "repeating_crewability:description",
      "repeating_playbookitem:name",
      "repeating_upgrade:name",
      "repeating_friend:name",
      "repeating_contact:name",
      "repeating_clock:name",
      "repeating_crewclock:name",
      "repeating_factionclock:name",
      "repeating_cohort:edges",
      "repeating_cohort:flaws",
      "repeating_alchemical:name",
      "xp_condition",
      "xp_condition_extra",
      "xp_condition2",
      "xp_condition3",
      "crew_xp_condition",
      "hunting_grounds_type",
      "hunting_grounds_description",
      "cohort1_edges",
      "cohort1_flaws",
      "heritage",
      "background",
      "vice_purveyor"
    ],
    autogenSections = [
      "ability",
      "crewability",
      "friend",
      "contact",
      "playbookitem",
      "upgrade"
    ],
    spiritPlaybooks = [
      "ghost", "hull", "vampire"
    ],
    translatedNames = [
      ...Object.keys(data.playbook),
      ...Object.keys(data.crew)
    ].reduce((m, keyName) => {
      if (getTranslationByKey(keyName)) 
        m[getTranslationByKey(keyName).toLowerCase()] = keyName;
      else 
        m[keyName.toLowerCase()] = keyName;
      return m;
    }, {});
  /* EVENT HANDLERS */
  /* Set default fields when setting crew type or playbook */
  on("change:crew_type change:playbook", event => {
    getAttrs([
      "playbook", "crew_type", "changed_attributes", "setting_autofill", ...watchedAttributes
    ], v => {
      const changedAttributes = (v.changed_attributes || "").split(","),
        sourceName = translatedNames[(event.sourceAttribute === "crew_type"
            ? v.crew_type
            : v.playbook).toLowerCase()],
        fillBaseData = (inputData, defaultAttrNames) => {
          if (data) {
            const finalSettings = defaultAttrNames.filter(name => !changedAttributes.includes(name))
            // do not reset attributes which have been changed by the user
              .filter(name => !spiritPlaybooks.includes(sourceName) || !actionsFlat.includes(name))
            // do not reset action dots if changing to a spirit playbook
              .filter(name => v[name] !== (data.defaultValues[name] || ""))
            // do not set attributes if current value is equal to sheet defaults
              .reduce((m, name) => {
              m[name] = data.defaultValues[name] || "";
              return m;
            }, {});
            Object
              .keys(inputData)
              .filter(name => !changedAttributes.includes(name))
              .forEach(name => (finalSettings[name] = inputData[name]));
            mySetAttrs(finalSettings);
          }
        };
      if (event.sourceAttribute === "crew_type"
        ? v.crew_type
        : v.playbook) {
        setAttr("show_playbook_reminder", "0");
      }
      if (v.setting_autofill !== "1") 
        return;
      if (event.sourceAttribute === "crew_type" && sourceName in data.crew) {
        fillRepeatingSectionFromData("contact", data.crew[sourceName].contact, true);
        fillRepeatingSectionFromData("crewability", data.crew[sourceName].crewability, true);
        fillRepeatingSectionFromData("upgrade", data.crew[sourceName].upgrade, true);
        fillBaseData(data.crew[sourceName].base, crewAttributes);
      }
      if (event.sourceAttribute === "playbook" && sourceName in data.playbook) {
        fillRepeatingSectionFromData("friend", data.playbook[sourceName].friend, true);
        fillRepeatingSectionFromData("ability", data.playbook[sourceName].ability, true);
        fillRepeatingSectionFromData("playbookitem", data.playbook[sourceName].playbookitem, true);
        fillBaseData(data.playbook[sourceName].base, playbookAttributes);
        if (sourceName === "leech") 
          fillRepeatingSectionFromData("alchemical", data.alchemicals);
        }
      });
  });
  const fillPlaybookAbility = () => {
    const prefix = "repeating_ability";
    getAttrs([
      `${prefix}_name`, `${prefix}_description`
    ], v => {
      if (!v[`${prefix}_description`]) {
        const description = playbookAbilityMap.get((v[`${prefix}_name`] || "").toLowerCase());
        if (description) 
          setAttr(`${prefix}_description`, description);
        }
      });
  };
  const fillCrewAbility = () => {
    const prefix = "repeating_crewability";
    getAttrs([
      `${prefix}_name`, `${prefix}_description`
    ], v => {
      if (!v[`${prefix}_description`]) {
        const description = crewAbilityMap.get((v[`${prefix}_name`] || "").toLowerCase());
        if (description) 
          setAttr(`${prefix}_description`, description);
        }
      });
  };
  on("change:repeating_ability:name", fillPlaybookAbility);
  on("change:repeating_crewability:name", fillCrewAbility);
  /* Watch repeating rows for changes and set autogen to false if change happens */
  autogenSections.forEach(sectionName => {
    on(`change:repeating_${sectionName}`, event => {
      getAttrs([`repeating_${sectionName}_autogen`], v => {
        if (v[`repeating_${sectionName}_autogen`] && event.sourceType === "player") {
          setAttr(`repeating_${sectionName}_autogen`, "");
        }
      });
    });
  });
  /* Watch for changes in auto-set attributes and update changed_attributes*/
  watchedAttributes.forEach(name => {
    on(`change:${name}`, event => {
      if (event.sourceType === "player") {
        getAttrs(["changed_attributes"], v => {
          const changedAttributes = [...new Set(v.changed_attributes.split(",")).add(name)]
            .filter(x => !!x)
            .join(",");
          setAttr("changed_attributes", changedAttributes);
        });
      }
    });
  });
  /* Register attribute/action event handlers */
  Object
    .keys(data.actions)
    .forEach(attrName => {
      on([
        ...data.actions[attrName],
        `setting_resbonus_${attrName}`
      ].map(x => `change:${x}`).join(" "), () => calculateResistance(attrName));
      on(`change:${attrName}`, calculateVice);
    });
  /* Calculate stash */
  on("change:stash", calculateStashFormula);
  on("change:wanted", calculateWantedFormula);
  /* Calculate trauma */
  on("change:setting_traumata_set " + traumaDataFlat.map(x => `change:trauma_${x}`).join(" "), event => {
    getAttrs([
      "setting_traumata_set", ...traumaDataFlat.map(x => `trauma_${x}`)
    ], v => {
      const traumaType = (v.setting_traumata_set === "0"
        ? "normal"
        : v.setting_traumata_set);
      if (data.traumas[traumaType] && event.sourceType === "player") {
        const newTrauma = data
          .traumas[traumaType]
          .reduce((m, name) => m + (parseInt(v[`trauma_${name}`]) || 0), 0);
        setAttr("trauma", newTrauma);
      }
    });
  });
  /* Generate buttons */
  on("change:generate_factions", () => {
    setAttr("show_faction_generatebutton", "0");
    Object
      .keys(data.factions)
      .forEach(sectionName => {
        fillRepeatingSectionFromData(sectionName, data.factions[sectionName]);
      });
  });
  autogenSections.forEach(sectionName => {
    on(`change:generate_${sectionName}`, () => {
      getAttrs([
        "generate_source_character", "generate_source_crew", "sheet_type"
      ], v => {
        const dataVar = (v.sheet_type === "character")
            ? data.playbook
            : data.crew,
          genSource = v[`generate_source_${v.sheet_type}`];
        if (genSource in dataVar) {
          emptyFirstRowIfUnnamed(sectionName);
          fillRepeatingSectionFromData(sectionName, dataVar[genSource][sectionName]);
        }
      });
    });
  });
  /* Extra stress and trauma */
  on("change:setting_extra_stress", event => setAttr("stress_max", 9 + (parseInt(event.newValue) || 0)));
  on("change:setting_extra_trauma", event => setAttr("trauma_max", 4 + (parseInt(event.newValue) || 0)));
  /* Calculate cohort quality */
  on(["crew_tier", "cohort1_impaired", "cohort1_type"].map(x => `change:${x}`).join(" "), () => calculateCohortDice(["cohort1"]));
  on("change:repeating_cohort", () => calculateCohortDice(["repeating_cohort"]));
  on("change:crew_tier", () => {
    getSectionIDs("repeating_cohort", a => calculateCohortDice(a.map(id => `repeating_cohort_${id}`)));
  });
  on("change:char_cohort_quality change:char_cohort_impaired change:setting_show_cohor" +
      "t",
  () => {
    getAttrs([
      "char_cohort_quality", "char_cohort_impaired"
    ], v => {
      const dice = (parseInt(v.char_cohort_quality) || 0) - (parseInt(v.char_cohort_impaired) || 0);
      setAttr("char_cohort_roll_formula", buildRollFormula(dice));
    });
  });
  /* Set correct verb for cohort roll button */
  ["char_cohort", "cohort1", "repeating_cohort"].forEach(prefix => {
    const eventString = "change:" + ((prefix === "repeating_cohort")
      ? `${prefix}:type`
      : `${prefix}_type`);
    on(eventString, event => {
      const verb = (event.newValue === "expert")
        ? "^{rolls_their}"
        : "^{roll_their}";
      setAttr(`${prefix}_verb`, verb);
    });
  });
  /* Left-fill checkboxes */
  handleBoxesFill("upgrade_24_check_", true);
  handleBoxesFill("bandolier1_check_");
  handleBoxesFill("bandolier2_check_");
  ["item", "playbookitem", "upgrade"].forEach(sName => handleBoxesFill(`repeating_${sName}:check_`));
  /* Pseudo-radios */
  [
    "crew_tier", ...actionsFlat
  ].forEach(name => {
    on(`change:${name}`, event => {
      if (String(event.newValue) === "0" && event.sourceType === "player") {
        setAttr(name, (parseInt(event.previousValue) || 1) - 1);
      }
      setAttr(`${name}_formula`, buildRollFormula(event.newValue || "0"));
    });
  });
  /* Item reset button */
  on("change:reset_items", () => {
    const clearChecks = sectionName => {
      getSectionIDs(`repeating_${sectionName}`, idArray => {
        const setting = [
          ...idArray.map(id => `repeating_${sectionName}_${id}_check_1`),
          ...idArray.map(id => `repeating_${sectionName}_${id}_check_2`),
          ...idArray.map(id => `repeating_${sectionName}_${id}_check_3`)
        ].reduce((m, name) => {
          m[name] = 0;
          return m;
        }, {});
        mySetAttrs(setting);
      });
    };
    setAttr("load", 0);
    ["item", "playbookitem"].forEach(clearChecks);
  });
  /* Default values for number of upgrades boxes � probably not necessary anymore */
  // on('change:repeating_upgrade:boxes_chosen', () => {
  // 	getAttrs(['repeating_upgrade_numboxes'], v => { 		if (!['1', '2',
  // '3'].includes(v.repeating_upgrade_numboxes)) {
  // 			setAttr('repeating_upgrade_numboxes', '1'); 		} 	}); });
  /* Resistance query */
  on("change:setting_consequence_query sheet:opened", () => {
    getAttrs(["setting_consequence_query"], v => {
      const consequenceQuery = (String(v.setting_consequence_query) === "1")
        ? `?{${getTranslation("consequence")}|${getTranslation("a_consequence")}}`
        : "^{a_consequence}";
      setAttr("consequence_query", consequenceQuery);
    });
  });
  /* Trim whitespace in auto-expand fields */
  autoExpandFields.forEach(name => {
    on(`change:${name}`, event => {
      const attrName = name.replace(":", "_");
      getAttrs([attrName], v => {
        if (v[attrName].trim() !== v[attrName] && event.sourceType === "player") {
          setAttr(attrName, v[attrName].trim());
        }
      });
    });
  });
  /* Clean chat image URL */
  on("change:chat_image", event => {
    const match = (event.newValue || "").match(/^(https:\/\/s3\.amazonaws\.com\/files\.d20\.io\/images\/.*\.jpg)\?\d+$/);
    if (match) 
      setAttr("chat_image", match[1]);
    }
  );
  /* Number of dice prompt */
  on("sheet:opened", () => {
    /* Set up translated attributes */
    const translatedAttrs = {
      bonusdice: getTranslation("bonusdice"),
      effect_query: getTranslation("effect_query"),
      notes_query: `?{${getTranslation("notes")}}`,
      numberofdice: buildNumdiceFormula(),
      position_query: `?{${getTranslation("position")}|` + `${getTranslation("risky")},position=${getTranslation("risky")}|` + `${getTranslation("controlled")},position=${getTranslation("controlled")}|` + `${getTranslation("desperate")},position=${getTranslation("desperate")}|` + `${getTranslation("fortune_roll")},position=}`
    };
    getAttrs(Object.keys(translatedAttrs), v => {
      const setting = {};
      Object
        .keys(translatedAttrs)
        .forEach(name => {
          if (v[name] !== translatedAttrs[name]) 
            setting[name] = translatedAttrs[name];
          }
        );
      mySetAttrs(setting);
    });
  });
  /* INITIALISATION AND UPGRADES */
  on("sheet:opened", () => {
    getAttrs([
      "sheet_type", "changed_attributes", "crew_type", "playbook"
    ], v => {
      /* Make sure sheet_type is never 0 */
      if (!["crew", "faction"].includes(v.sheet_type)) 
        setAttr("sheet_type", "character");
      
      /* Remove reminder box if we have playbook or crew name */
      if (v.playbook || v.crew_type) 
        setAttr("show_playbook_reminder", "0");
      }
    );
    /* Setup and upgrades */
    getAttrs(["version"], v => {
      const upgradeSheet = version => {
          //const [major, minor] = version && version.split(".").map(x => parseInt(x));
          console.log(`Found version ${version}.`);
        },
        initialiseSheet = () => {
          const setting = [
            "ability",
            "friend",
            "crewability",
            "contact",
            "playbookitem",
            "upgrade",
            "framefeature"
          ].reduce((memo, sectionName) => {
            memo[`repeating_${sectionName}_${generateRowID()}_autogen`] = 1;
            return memo;
          }, {});
          mySetAttrs(setting);
          fillRepeatingSectionFromData("item", data.items);
          /* Set translated default values */
          getAttrs(Object.keys(data.translatedDefaults), v => {
            const setting = {};
            Object
              .keys(data.translatedDefaults)
              .forEach(k => {
                if (v[k] !== data.translatedDefaults[k]) 
                  setting[k] = data.translatedDefaults[k];
                }
              );
            mySetAttrs(setting);
          });
          console.log("Initialising new sheet.");
        };
      if (v.version) 
        upgradeSheet(v.version);
      else 
        initialiseSheet();
      
      // Set version number
      mySetAttrs({version: sheetVersion, character_sheet: `${sheetName} v${sheetVersion}`});
    });
  });