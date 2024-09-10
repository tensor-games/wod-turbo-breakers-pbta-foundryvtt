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
                        position: "TopBar",
                        label: "Background",
                        type: "LongText",
                        playbook: true,
                    },
                    experience: {
                        position: "TopBar",
                        label: "Experience",
                        type: "Xp",
                        max: 10,
                        value: 0,
                        playbook: true,
                    },
                    strain: {
                        position: "TopBar",
                        label: "Strain",
                        type: "Xp",
                        max: 5,
                        value: 0,
                        playbook: true,
                    },
                    levels: {
                        position: "TopBar",
                        label: "Levels",
                        type: "ListMany",
                        playbook: true,
                        options: {
                            0: {
                                label: "",
                                value: false,
                                xpStart: 0,
                                xpOffset: 0,
                                strain: 1,
                            },
                            1: {
                                label: "Colt",
                                value: false,
                                xpStart: 1,
                                xpOffset: 1,
                                strain: 2,
                            },
                            2: {
                                label: "Pro",
                                value: false,
                                xpStart: 2,
                                xpOffset: 2,
                                strain: 3,
                            },
                            3: {
                                label: "Ace",
                                value: false,
                                xpStart: 4,
                                xpOffset: 3,
                                strain: 4,
                            },
                            4: {
                                label: "Veteran",
                                value: false,
                                xpStart: 7,
                                xpOffset: 4,
                                strain: 5,
                            },
                        }
                    },
                    armor: {
                        position: "TopBar",
                        label: "Armor",
                        type: "Number",
                        value: 0,
                        playbook: true,
                    },
                    hitPoints: {
                        position: "TopBar",
                        label: "HP",
                        type: "Number",
                        value: 0,
                        playbook: true,
                    },
                },
                moveTypes: {
                    talent: {
                        label: "Talents",
                        creation: false
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
