export const configSheet = async () => {
    // Pass module sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        rollShifting: true,
        statToggle: {
            label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.statToggle"),
            modifier: 0
        },
        minMod: -3,
        maxMod: 4,
        rollResults: {
            failure: {
                start: null,
                end: 6,
                label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.rollResults.complications")
            },
            partial: {
                start: 7,
                end: 9,
                label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.rollResults.partialSuccess")
            },
            success: {
                start: 10,
                end: null,
                label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.rollResults.success")
            }
        },
        actorTypes: {
            character: {
                stats: {
                    one: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.stats.one"),
                        value: 0
                    },
                    two: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.stats.two"),
                        value: 0
                    },
                    three: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.stats.three"),
                        value: 0
                    }
                },
                attrTop: {

                },
                attrLeft: {

                },
                details: {
                    biography: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.details.biographyLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.moveTypes.basicLabel"),
                        moves: [],
                        creation: true
                    },
                    playbook: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.CharacterSheets.moveTypes.playbookLabel"),
                        moves: [],
                        playbook: true
                    }
                }
            },
            npc: {
                attrTop: {

                },
                attrLeft: {

                },
                details: {
                    biography: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.NPCSheets.details.biographyLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("WOD-TURBO-BREAKERS-PBTA-FOUNDRYVTT.NPCSheets.moveTypes.basicLabel"),
                        moves: []
                    }
                }
            }
        }
    }
};
