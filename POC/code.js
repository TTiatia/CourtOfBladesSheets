
  /* EVENT HANDLERS */
  /* Set default fields when setting crew type or playbook */
  on("change:crew_type change:playbook", handlePlaybookFill);

  /* automatically fill abilities */
  on("change:repeating_ability:name", () => fillAbility("repeating_ability", playbookAbilityMap));

  on("change:repeating_crewability:name", () => fillAbility("repeating_crewability", crewAbilityMap));

  /* Watch repeating rows for changes and set autogen to false if it changes */
  autogenSections.forEach(watchAutogen);

  /* Watch for changes in auto-set attributes and update changed_attributes */
  on(watchedAttributes.map(x => `change:${x}`).join(" "), updateChangedAttrs);

  /* Register attribute/action event handlers */
  Object.keys(actionData).forEach(attrName => {
    on([...actionData[attrName], `setting_resbonus_${attrName}`]
      .map(x => `change:${x}`).join(" "), () => calculateResistance(attrName)
    );
    on(`change:setting_dark_talent_${attrName}`,
      () => handleDarkTalentChange(attrName));
    on(`change:${attrName}`, calculateVice);
  });

  /* Calculate stash */
  on("change:stash", calculateStashFormula);

  on("change:wanted", calculateWantedFormula);

  /* Calculate trauma */
  on("change:setting_traumata_set " + traumaDataFlat.map(x => `change:trauma_${x}`).join(" "), calculateTrauma);

  /* Generate buttons */
  on("change:generate_factions", generateFactions);

  autogenSections.forEach(handleRepeatingGenerateButton);

  /* Extra stress and trauma */
  on("change:setting_extra_stress", event => setAttr("stress_max", 9 + (parseInt(event.newValue) || 0)));
  on("change:setting_extra_trauma", event => setAttr("trauma_max", 4 + (parseInt(event.newValue) || 0)));

  /* Calculate cohort quality */
  on(["crew_tier", "cohort1_impaired", "cohort1_type"].map(x => `change:${x}`).join(" "), () => calculateCohortDice(["cohort1"]));

  on("change:repeating_cohort", () => calculateCohortDice(["repeating_cohort"]));

  on("change:crew_tier", () => {
    getSectionIDs("repeating_cohort",
      a => calculateCohortDice(a.map(id => `repeating_cohort_${id}`)));
  });

  on("change:char_cohort_quality change:char_cohort_impaired " + "change:setting_show_cohort", calculateCharCohortDice);

  /* Set correct verb for cohort roll button */
  ["char_cohort", "cohort1", "repeating_cohort"].forEach(handleCohortVerb);

  /* Left-fill checkboxes */
  handleBoxesFill("upgrade_mastery_check_", true);
  handleBoxesFill("bandolier1_check_");
  handleBoxesFill("bandolier2_check_");

  ["item", "playbookitem", "upgrade"].forEach(sName => handleBoxesFill(`repeating_${sName}:check_`));

  /* Pseudo-radios */
  ["crew_tier", ...actionsFlat].forEach(handlePseudoRadio);

  /* Item reset button */
  on("change:reset_items", resetItems);

  /* Resistance query */
  on("change:setting_consequence_query sheet:opened", handleConsequenceQuery);

  /* Trim whitespace in auto-expand fields */
  autoExpandFields.forEach(handleAutoExpandWhitespace);

  /* Clean chat image URL */
  on("change:chat_image", cleanChatImage);

  /* Number of dice prompt and other translation-dependent atoms */
  on("sheet:opened change:setting_usekirsty change:setting_custom_actions", setupTranslatedAttrs);

  on("change:setting_custom_actions", setRollMods);

  /* INITIALISATION AND UPGRADES */
  on("sheet:opened", handleSheetInit);