export const configSheet = async () => {

    // pass Breakers sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        rollResults: {
            failure: {
                start: null,
                end: 6,
                label: "Miss"
            },
            partial: {
                start: 7,
                end: 9,
                label: "Partial Success"
            },
            success: {
                start: 10,
                end: 12,
                label: "Full Success!"
            },
            crit_success: {
              start: 12,
              end: 15,
              label: "Critical Success!"
            }
        },
        actorTypes: {
            character: {
                stats: {
                    insight: {
                        label: "Insight",
                        value: 0
                    },
                    prowess: {
                        label: "Prowess",
                        value: 0
                    },
                    resolve: {
                        label: "Resolve",
                        value: 0
                    },
                },
                attributes: {
                    look: {
                        position: "Left",
                        label: "Look",
                        type: "LongText",
                        playbook: true,
                    },
                    background: {
                        position: "Left",
                        label: "Background",
                        type: "LongText",
                        playbook: true,
                    },
                },
                moveTypes: {
                    talent: {
                        label: "Talents",
                        creation: true
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear",
                    },
                    contraband: {
                        label: "Contraband",
                    }
                }
            },
            npc: {
                attributes: {
                    notes: {
                        position: "Left",
                        label: "Notes",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    },
                    description: {
                        position: "Left",
                        label: "Description",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        value: ""
                    }
                },
                moveTypes: {
                    mc: {
                        label: "MC Moves",
                        moves: []
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear",
                    },
                    contraband: {
                        label: "Contraband",
                    }
                }
            }
        }
    }

    // check if users wants to override settings; if not, hide all PbtA sheet options
    let overrideSettings = await game.settings.get('wod-turbo-breakers-pbta-foundryvtt', 'settings-override');

    if (!overrideSettings) {
        await game.settings.set('pbta', 'advForward', true);
        await game.settings.set('pbta', 'hideRollFormula', true);
        await game.settings.set('pbta', 'hideForward', true);
        await game.settings.set('pbta', 'hideOngoing', true);
        await game.settings.set('pbta', 'hideRollMode', true);
        await game.settings.set('pbta', 'hideUses', true);
    }

}
